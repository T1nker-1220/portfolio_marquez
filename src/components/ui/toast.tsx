"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, AlertCircle, CheckCircle, Info, AlertTriangle } from "lucide-react";
import { createContext, useContext, ReactNode, useState, useCallback } from "react";

export type ToastType = "success" | "error" | "warning" | "info";

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message?: string;
  duration?: number;
}

interface ToastContextType {
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
}

interface ToastProviderProps {
  children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback((toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast = { ...toast, id };
    
    setToasts(prev => [...prev, newToast]);
    
    // Auto remove toast after duration
    setTimeout(() => {
      removeToast(id);
    }, toast.duration || 5000);
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  return (
    <div className="fixed top-4 right-4 z-[9999] space-y-2 max-w-sm">
      <AnimatePresence>
        {toasts.map((toast) => (
          <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
        ))}
      </AnimatePresence>
    </div>
  );
}

interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function ToastItem({ toast, onRemove }: ToastItemProps) {
  const icons = {
    success: CheckCircle,
    error: AlertCircle,
    warning: AlertTriangle,
    info: Info,
  };

  const colors = {
    success: "from-green-500/20 to-emerald-500/20 border-green-500/20 text-green-600",
    error: "from-red-500/20 to-rose-500/20 border-red-500/20 text-red-600",
    warning: "from-yellow-500/20 to-orange-500/20 border-yellow-500/20 text-yellow-600",
    info: "from-blue-500/20 to-cyan-500/20 border-blue-500/20 text-blue-600",
  };

  const Icon = icons[toast.type];

  return (
    <motion.div
      initial={{ opacity: 0, x: 300, scale: 0.8 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 300, scale: 0.8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`bg-gradient-to-r ${colors[toast.type]} backdrop-blur-md rounded-xl p-4 border shadow-xl shadow-black/25 glass-container`}
    >
      <div className="flex items-start gap-3">
        <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
        
        <div className="flex-1 min-w-0">
          <div className="text-sm font-semibold text-foreground">
            {toast.title}
          </div>
          {toast.message && (
            <div className="text-xs text-muted-foreground mt-1">
              {toast.message}
            </div>
          )}
        </div>
        
        <motion.button
          onClick={() => onRemove(toast.id)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="flex-shrink-0 p-1 rounded-lg hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </motion.button>
      </div>
    </motion.div>
  );
}