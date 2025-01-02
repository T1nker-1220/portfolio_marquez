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
  Mail,
  MapPin,
  MessageSquare,
} from "lucide-react";
import { Toaster } from "sonner";

const socialIcons = {
  GitHub: <Github className="w-6 h-6" />,
  Facebook: <Facebook className="w-6 h-6" />,
  Instagram: <Instagram className="w-6 h-6" />,
  WhatsApp: <MessageSquare className="w-6 h-6" />,
  Vercel: <ExternalLink className="w-6 h-6" />,
};

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: "Location",
    value: personalInfo.location,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      personalInfo.location
    )}`,
  },
  {
    icon: <MessageSquare className="w-6 h-6" />,
    label: "WhatsApp",
    value: "+63 960 508 8715",
    href: "https://wa.me/639605088715",
  },
];

export default function ContactPage() {
  return (
    <main className="container max-w-7xl mx-auto px-6 py-12">
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
            {contactInfo.map((info) => (
              <motion.a
                key={info.label}
                href={info.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={cn(
                  "glass p-4 rounded-lg flex items-center gap-4",
                  "hover:scale-[1.02] transition-transform"
                )}
              >
                <div className="text-primary">{info.icon}</div>
                <div>
                  <p className="font-medium">{info.label}</p>
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-6">Connect with Me</h2>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-4">
              {personalInfo.socialLinks.map((social) => (
                <motion.a
                  key={social.platform}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className={cn(
                    "glass p-4 rounded-lg flex items-center justify-center",
                    "hover:scale-110 transition-transform"
                  )}
                >
                  <span className="text-primary">
                    {socialIcons[social.platform as keyof typeof socialIcons]}
                  </span>
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
          <ContactForm />
        </motion.div>
      </div>
      <Toaster position="bottom-right" />
    </main>
  );
}
