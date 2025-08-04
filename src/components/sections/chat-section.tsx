"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send, User, Building, MessageCircle, Clock, Shield, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

interface Message {
  id: string;
  name: string;
  company?: string;
  message: string;
  created_at: string;
  is_read: boolean;
  session_id?: string;
}

interface Conversation {
  session_id: string;
  name: string;
  company?: string;
  messages: Message[];
  last_message_at: string;
  unread_count: number;
}

export default function ChatSection() {
  const { isAuthenticated, isLoading: authLoading, logout } = useAuth();
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState({
    name: "",
    company: "",
    message: ""
  });
  const [replyMessage, setReplyMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [sessionId, setSessionId] = useState<string>("");
  const [userDetails, setUserDetails] = useState<{name: string; company?: string} | null>(null);

  useEffect(() => {
    // Generate or get session ID for regular users
    if (!isAuthenticated) {
      let userSession = localStorage.getItem('portfolio-user-session');
      if (!userSession) {
        userSession = crypto.randomUUID();
        localStorage.setItem('portfolio-user-session', userSession);
      }
      setSessionId(userSession);

      // Check if user details are saved
      const savedDetails = localStorage.getItem('portfolio-user-details');
      if (savedDetails) {
        setUserDetails(JSON.parse(savedDetails));
      }
    }
  }, [isAuthenticated]);

  useEffect(() => {
    // Only fetch messages after sessionId is set for regular users
    if (isAuthenticated || (!isAuthenticated && sessionId)) {
      fetchMessages();
    }
  }, [isAuthenticated, sessionId]);

  const fetchMessages = async () => {
    try {
      const url = isAuthenticated 
        ? '/api/chat/messages' // Admin sees all messages
        : `/api/chat/messages?session=${sessionId}`; // Users see only their messages
      
      const response = await fetch(url);
      const data = await response.json();
      if (data.success) {
        setMessages(data.messages);
        
        // If admin, group messages into conversations
        if (isAuthenticated) {
          groupMessagesIntoConversations(data.messages);
        }
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    }
  };

  const groupMessagesIntoConversations = (allMessages: Message[]) => {
    const conversationMap = new Map<string, Conversation>();
    
    allMessages.forEach(message => {
      if (!message.session_id) return;
      
      if (!conversationMap.has(message.session_id)) {
        conversationMap.set(message.session_id, {
          session_id: message.session_id,
          name: message.name,
          company: message.company,
          messages: [],
          last_message_at: message.created_at,
          unread_count: 0
        });
      }
      
      const conversation = conversationMap.get(message.session_id)!;
      conversation.messages.push(message);
      
      if (!message.is_read) {
        conversation.unread_count++;
      }
      
      // Update last message time if this message is newer
      if (new Date(message.created_at) > new Date(conversation.last_message_at)) {
        conversation.last_message_at = message.created_at;
      }
    });
    
    // Sort conversations by last message time
    const sortedConversations = Array.from(conversationMap.values())
      .sort((a, b) => new Date(b.last_message_at).getTime() - new Date(a.last_message_at).getTime());
    
    setConversations(sortedConversations);
  };

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newMessage.name || !newMessage.message) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('/api/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...newMessage,
          sessionId: isAuthenticated ? null : sessionId
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setMessages(prev => [data.message, ...prev]);
        
        // Save user details to localStorage for future use
        if (!userDetails) {
          const details = { name: newMessage.name, company: newMessage.company };
          setUserDetails(details);
          localStorage.setItem('portfolio-user-details', JSON.stringify(details));
        }
        
        setNewMessage({ name: "", company: "", message: "" });
        setShowForm(false);
        fetchMessages(); // Refresh to get latest messages
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendQuickMessage = async (messageText: string) => {
    if (!messageText || !userDetails) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: userDetails.name,
          company: userDetails.company,
          message: messageText,
          sessionId: sessionId
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        fetchMessages(); // Refresh to get latest messages
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendReply = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!replyMessage || !selectedConversation) return;

    setIsLoading(true);

    try {
      const response = await fetch('/api/chat/send', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: "Portfolio Owner", // Admin replies as "Portfolio Owner"
          company: null,
          message: replyMessage,
          sessionId: selectedConversation
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setReplyMessage("");
        fetchMessages(); // Refresh messages
      }
    } catch (error) {
      console.error('Error sending reply:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return `${days}d ago`;
  };

  if (authLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Admin Header */}
      {isAuthenticated && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-emerald-500/20 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/25 border border-emerald-500/20 p-4 glass-container"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-emerald-400" />
              <span className="text-emerald-400 font-medium drop-shadow-md">
                Admin Mode - Viewing All Messages
              </span>
            </div>
            <motion.button
              onClick={logout}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-3 py-2 bg-red-500/20 text-red-400 rounded-lg hover:bg-red-500/30 transition-all border border-red-500/20"
            >
              <LogOut className="w-4 h-4" />
              <span className="text-sm">Logout</span>
            </motion.button>
          </div>
        </motion.div>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-2"
      >
        <h2 className="text-2xl font-bold text-white drop-shadow-lg">
          {isAuthenticated ? "Message Management" : "Let's Connect"}
        </h2>
        <p className="text-gray-300 drop-shadow-md">
          {isAuthenticated 
            ? "Manage and respond to messages from potential clients" 
            : "Interested in working together? Send me a message!"
          }
        </p>
      </motion.div>

      {/* Admin: Conversation Management / User: Send Message Form */}
      {isAuthenticated ? (
        /* Admin Conversation View */
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Conversations List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/25 border border-white/20 dark:border-white/10 p-4 glass-container"
          >
            <h3 className="text-lg font-semibold text-white mb-4 drop-shadow-md">
              Conversations ({conversations.length})
            </h3>
            
            <div className="space-y-3 max-h-96 overflow-y-auto">
              {conversations.map((conversation) => (
                <motion.div
                  key={conversation.session_id}
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setSelectedConversation(conversation.session_id)}
                  className={`p-4 rounded-xl cursor-pointer transition-all border ${
                    selectedConversation === conversation.session_id
                      ? "bg-emerald-500/20 border-emerald-500/30"
                      : "bg-white/5 border-white/10 hover:bg-white/10"
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h4 className="font-medium text-white drop-shadow-md">
                        {conversation.name}
                      </h4>
                      {conversation.company && (
                        <p className="text-sm text-gray-300">
                          {conversation.company}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs text-gray-400">
                        {formatTime(conversation.last_message_at)}
                      </span>
                      {conversation.unread_count > 0 && (
                        <span className="bg-emerald-500 text-white text-xs px-2 py-1 rounded-full">
                          {conversation.unread_count}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-sm text-gray-300 truncate">
                    {conversation.messages[conversation.messages.length - 1]?.message}
                  </p>
                </motion.div>
              ))}
              
              {conversations.length === 0 && (
                <div className="text-center py-8">
                  <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-400 opacity-50" />
                  <p className="text-gray-400">No conversations yet</p>
                </div>
              )}
            </div>
          </motion.div>

          {/* Selected Conversation */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/25 border border-white/20 dark:border-white/10 p-4 glass-container"
          >
            {selectedConversation ? (
              <div className="h-full flex flex-col">
                <div className="border-b border-white/10 pb-3 mb-4">
                  <h3 className="text-lg font-semibold text-white drop-shadow-md">
                    {conversations.find(c => c.session_id === selectedConversation)?.name}
                  </h3>
                  <p className="text-sm text-gray-300">
                    {conversations.find(c => c.session_id === selectedConversation)?.company}
                  </p>
                </div>
                
                {/* Messages */}
                <div className="flex-1 space-y-3 overflow-y-auto max-h-64 mb-4">
                  {conversations
                    .find(c => c.session_id === selectedConversation)
                    ?.messages.sort((a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime())
                    .map((message) => (
                      <div
                        key={message.id}
                        className={`p-3 rounded-lg ${
                          message.name === 'Portfolio Owner'
                            ? 'bg-emerald-500/20 ml-8 border border-emerald-500/30'
                            : 'bg-blue-500/20 mr-8 border border-blue-500/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium text-white">
                            {message.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {formatTime(message.created_at)}
                          </span>
                        </div>
                        <p className="text-gray-200 text-sm">{message.message}</p>
                      </div>
                    ))}
                </div>
                
                {/* Reply Form */}
                <form onSubmit={handleSendReply} className="space-y-3">
                  <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Type your reply..."
                    rows={3}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                  />
                  <motion.button
                    type="submit"
                    disabled={isLoading || !replyMessage}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-lg font-medium hover:from-emerald-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Send className="w-4 h-4" />
                    {isLoading ? "Sending..." : "Send Reply"}
                  </motion.button>
                </form>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center">
                <div className="text-center">
                  <MessageCircle className="w-16 h-16 mx-auto mb-4 text-gray-400 opacity-50" />
                  <p className="text-gray-400">Select a conversation to view messages</p>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      ) : (
        /* User Message Form */
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/25 border border-white/20 dark:border-white/10 p-6 glass-container"
        >
          {userDetails ? (
            /* Returning User - Simple Message Input */
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-white font-medium">{userDetails.name}</h4>
                  {userDetails.company && (
                    <p className="text-sm text-gray-300">{userDetails.company}</p>
                  )}
                </div>
                <motion.button
                  onClick={() => {
                    setUserDetails(null);
                    localStorage.removeItem('portfolio-user-details');
                  }}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Change Details
                </motion.button>
              </div>
              
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const formData = new FormData(form);
                  const message = formData.get('message') as string;
                  if (message) {
                    handleSendQuickMessage(message);
                    form.reset();
                  }
                }}
                className="space-y-3"
              >
                <textarea
                  name="message"
                  required
                  rows={3}
                  placeholder="Type your message..."
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                />
                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {isLoading ? "Sending..." : "Send Message"}
                </motion.button>
              </form>
            </div>
          ) : (
            /* New User - Full Details Form */
            <>
              {!showForm ? (
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowForm(true)}
                  className="w-full flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-white rounded-xl hover:from-emerald-500/30 hover:to-blue-500/30 transition-all border border-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-medium">Send me a message</span>
                </motion.button>
              ) : (
                <form onSubmit={handleSendMessage} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white drop-shadow-md flex items-center gap-2">
                        <User className="w-4 h-4" />
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={newMessage.name}
                        onChange={(e) => setNewMessage(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-white drop-shadow-md flex items-center gap-2">
                        <Building className="w-4 h-4" />
                        Company
                      </label>
                      <input
                        type="text"
                        value={newMessage.company}
                        onChange={(e) => setNewMessage(prev => ({ ...prev, company: e.target.value }))}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all"
                        placeholder="Your company (optional)"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white drop-shadow-md flex items-center gap-2">
                      <MessageCircle className="w-4 h-4" />
                      Message *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={newMessage.message}
                      onChange={(e) => setNewMessage(prev => ({ ...prev, message: e.target.value }))}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
                      placeholder="What would you like to discuss?"
                    />
                  </div>

                  <div className="flex gap-3">
                    <motion.button
                      type="submit"
                      disabled={isLoading || !newMessage.name || !newMessage.message}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-blue-500 text-white rounded-xl font-medium hover:from-emerald-600 hover:to-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="w-4 h-4" />
                      {isLoading ? "Sending..." : "Send Message"}
                    </motion.button>
                    
                    <motion.button
                      type="button"
                      onClick={() => setShowForm(false)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 bg-white/10 text-white rounded-xl font-medium hover:bg-white/20 transition-all border border-white/20"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              )}
            </>
          )}
        </motion.div>
      )}

      {/* User Messages (for non-authenticated users only) */}
      {!isAuthenticated && (
        <div className="space-y-4">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl shadow-2xl shadow-black/25 border border-white/20 dark:border-white/10 p-6 glass-container"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white drop-shadow-md">
                      {message.name}
                    </h4>
                    {message.company && (
                      <p className="text-sm text-gray-300 drop-shadow-sm">
                        {message.company}
                      </p>
                    )}
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-xs text-gray-400">
                  <Clock className="w-3 h-3" />
                  {formatTime(message.created_at)}
                </div>
              </div>
              
              <p className="text-gray-200 leading-relaxed drop-shadow-sm">
                {message.message}
              </p>
              
              {!message.is_read && (
                <div className="mt-3 pt-3 border-t border-white/10">
                  <span className="text-xs text-emerald-400 font-medium">
                    New message
                  </span>
                </div>
              )}
            </motion.div>
          ))}
          
          {messages.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-white/10 dark:bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20 dark:border-white/10 shadow-2xl shadow-black/25 text-center glass-container"
            >
              <MessageCircle className="w-12 h-12 mx-auto mb-4 text-gray-400 opacity-50" />
              <p className="text-gray-400 drop-shadow-md">
                No messages yet. Be the first to reach out!
              </p>
            </motion.div>
          )}
        </div>
      )}
    </div>
  );
}