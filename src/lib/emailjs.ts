import { init } from "@emailjs/browser";

// Initialize EmailJS with your public key
init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "4sH4fm5e4pxBk5K2e");
