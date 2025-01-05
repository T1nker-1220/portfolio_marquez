"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import {
  BookHeart,
  Briefcase,
  Building2,
  Calendar,
  Camera,
  FileText,
  Layout,
  Mail,
  Package,
  Palette,
  Plane,
  ShoppingBag
} from "lucide-react";
import { memo } from "react";

interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
}

const services: Service[] = [
  {
    title: "Business Profile Website",
    description: "Professional websites tailored for businesses to establish a strong online presence.",
    icon: Building2,
  },
  {
    title: "Small Business E-commerce",
    description: "Custom e-commerce solutions designed for small businesses to sell products online.",
    icon: ShoppingBag,
  },
  {
    title: "UI/UX Website Designer",
    description: "Expert UI/UX design services to create intuitive and engaging web experiences.",
    icon: Palette,
  },
  {
    title: "Landing Page Website",
    description: "High-converting landing pages optimized for your marketing campaigns.",
    icon: Layout,
  },
  {
    title: "Portfolio Website",
    description: "Showcase your work with a professionally designed portfolio website.",
    icon: Briefcase,
  },
  {
    title: "Product Showcase/Catalog Website",
    description: "Beautiful product catalogs and showcase websites for your offerings.",
    icon: Package,
  },
  {
    title: "Blog or Content Website",
    description: "Content-focused websites perfect for bloggers and content creators.",
    icon: FileText,
  },
  {
    title: "Wedding/Event Planning Website",
    description: "Specialized websites for wedding and event planning services.",
    icon: Calendar,
  },
  {
    title: "Wedding Blog/Memories Website",
    description: "Capture and share wedding memories with a dedicated wedding blog website.",
    icon: BookHeart,
  },
  {
    title: "Travel/Lifestyle Website",
    description: "Engaging websites for travel and lifestyle content creators.",
    icon: Plane,
  },
  {
    title: "Photographer Website",
    description: "Showcase your photography portfolio with a professionally designed website.",
    icon: Camera,
  },
  {
    title: "Wedding Invitations Website",
    description: "Digital wedding invitation websites to share your special day.",
    icon: Mail,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

interface ServiceCardProps {
  service: Service;
}

const ServiceCard = memo(function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;
  
  return (
    <motion.div
      variants={item}
      className={cn(
        "group relative glass p-6 rounded-xl",
        "hover:scale-[1.02] hover:shadow-lg transition-all duration-300"
      )}
    >
      <div className="absolute top-4 right-4 text-primary opacity-10 group-hover:opacity-20 transition-opacity">
        <Icon size={40} />
      </div>
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-lg bg-gradient-to-r from-green-400/10 via-emerald-500/10 to-teal-600/10 text-primary">
          <Icon size={20} />
        </div>
        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
          {service.title}
        </h3>
      </div>
      <p className="text-muted-foreground">
        {service.description}
      </p>
      <div className="mt-4 flex items-center text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
        <span>Learn more</span>
        <motion.svg
          className="w-4 h-4 ml-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          animate={{ x: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </motion.svg>
      </div>
    </motion.div>
  );
});

export default function ServicesPage() {
  return (
    <main className="container max-w-7xl mx-auto px-6 py-12">
      <div className="relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-green-400/5 via-emerald-500/5 to-background rounded-3xl" />

        {/* Content */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-4"
          >
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
              My Services
            </h1>
            <div className="w-20 h-1 bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 mx-auto rounded-full" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I offer a wide range of web development and design services tailored to your needs. 
              Each service is crafted with attention to detail and focus on delivering exceptional results.
            </p>
          </motion.div>
          
          <motion.div 
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          >
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </motion.div>
        </div>
      </div>
    </main>
  );
} 