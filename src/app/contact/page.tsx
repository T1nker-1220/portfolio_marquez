"use client";

import { ContactForm } from "@/components/sections/contact-form";
import { personalInfo } from "@/data/personal-info";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageSquare,
  Send,
  Youtube
} from "lucide-react";
import { Toaster } from "sonner";

const socialIcons = {
  GitHub: <Github className="w-6 h-6" />,
  Facebook: <Facebook className="w-6 h-6" />,
  Instagram: <Instagram className="w-6 h-6" />,
  LinkedIn: <Linkedin className="w-6 h-6" />,
  WhatsApp: <MessageSquare className="w-6 h-6" />,
  Youtube: <Youtube className="w-6 h-6" />,
};

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: personalInfo.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(personalInfo.location)}`,
    color: "from-red-400 to-red-600",
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    label: "WhatsApp",
    value: "+63 960 508 8715",
    href: "https://wa.me/639605088715",
    color: "from-green-400 to-green-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
    }
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container max-w-7xl mx-auto px-6 py-12 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-1/2 -right-1/2 w-[500px] h-[500px] rounded-full bg-green-500/10 blur-3xl" />
          <div className="absolute -bottom-1/2 -left-1/2 w-[500px] h-[500px] rounded-full bg-teal-500/10 blur-3xl" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 relative"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent pb-2">
            Get in Touch
          </h1>
          <p className="text-muted-foreground/80 mt-4 max-w-2xl mx-auto">
            Have a question or want to work together? I&apos;d love to hear from you.
            Drop me a message or connect through any of these platforms.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 relative">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold inline-flex items-center gap-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent"
              >
                <Mail className="w-5 h-5" />
                Contact Information
              </motion.h2>
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.label}
                    variants={itemVariants}
                    href={info.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group block p-4 rounded-xl backdrop-blur-sm border border-border/50",
                      "hover:border-emerald-500/50 transition-all duration-300",
                      "bg-background/50 hover:bg-background/80",
                      "transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                    )}
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn(
                        "p-3 rounded-lg bg-gradient-to-br",
                        info.color,
                        "text-white transform transition-transform group-hover:scale-110"
                      )}>
                        {info.icon}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-foreground/90">{info.label}</p>
                        <p className="text-sm text-muted-foreground group-hover:text-foreground/90 transition-colors break-all">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <motion.h2
                variants={itemVariants}
                className="text-2xl font-bold inline-flex items-center gap-2 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent"
              >
                <ExternalLink className="w-5 h-5" />
                Connect with Me
              </motion.h2>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-3 sm:grid-cols-6 gap-4"
              >
                {personalInfo.socialLinks.map((social, index) => (
                  <motion.a
                    key={social.platform}
                    variants={itemVariants}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group p-4 rounded-xl backdrop-blur-sm border border-border/50",
                      "hover:border-emerald-500/50 transition-all duration-300",
                      "bg-background/50 hover:bg-background/80",
                      "flex flex-col items-center justify-center gap-2",
                      "transform hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10"
                    )}
                    style={{
                      transitionDelay: `${index * 50}ms`
                    }}
                  >
                    <span className="text-muted-foreground group-hover:text-emerald-500 transition-colors transform group-hover:scale-125 duration-300">
                      {socialIcons[social.platform as keyof typeof socialIcons]}
                    </span>
                    <span className="text-xs text-muted-foreground group-hover:text-emerald-500 transition-colors">
                      {social.platform}
                    </span>
                  </motion.a>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="backdrop-blur-sm bg-background/50 border border-border/50 p-6 md:p-8 rounded-xl shadow-2xl shadow-emerald-500/5">
                <div className="flex items-center gap-3 mb-8">
                  <Send className="w-6 h-6 text-emerald-500" />
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                    Send a Message
                  </h2>
                </div>
                <ContactForm />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'hsl(var(--background))',
            color: 'hsl(var(--foreground))',
            border: '1px solid hsl(var(--border))',
          },
        }}
      />
    </main>
  );
}
