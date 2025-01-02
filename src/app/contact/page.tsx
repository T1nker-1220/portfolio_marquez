"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
} from "lucide-react";

const socialLinks = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/nathanielmarquez.20",
    icon: <Facebook className="w-6 h-6" />,
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/clover_nat/",
    icon: <Instagram className="w-6 h-6" />,
  },
  {
    name: "GitHub",
    url: "https://github.com/T1nker-1220",
    icon: <Github className="w-6 h-6" />,
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/639605088715",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    name: "Vercel",
    url: "https://vercel.com/t1nker-1220s-projects",
    icon: <ExternalLink className="w-6 h-6" />,
  },
];

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: "marquezjohnnathanieljade@gmail.com",
    href: "mailto:marquezjohnnathanieljade@gmail.com",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: "Amadeo, Cavite",
    href: "https://maps.google.com/?q=Amadeo,Cavite",
  },
  {
    icon: <Phone className="w-6 h-6" />,
    label: "WhatsApp",
    value: "+63 960 508 8715",
    href: "https://wa.me/639605088715",
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-primary to-primary/50 text-transparent bg-clip-text"
          >
            Let's Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-muted-foreground max-w-[90%] md:max-w-2xl mx-auto leading-relaxed"
          >
            Feel free to reach out for collaborations, opportunities, or just to
            say hello. I'm always open to discussing new projects and ideas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="glass p-4 rounded-lg flex items-center gap-4 hover:scale-[1.02] transition-transform"
                >
                  <div className="text-primary">{info.icon}</div>
                  <div>
                    <p className="font-medium">{info.label}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8">
              <h2 className="text-2xl font-semibold mb-6">Connect with Me</h2>
              <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    className="glass p-4 rounded-lg flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <span className="text-primary">{social.icon}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="glass p-6 md:p-8 rounded-lg"
          >
            <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full min-h-[44px] px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full min-h-[44px] px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-background/50 border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full min-h-[44px] px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
