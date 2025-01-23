"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]*$/, "Name can only contain letters and spaces"),
  email: z.string()
    .email("Invalid email address")
    .min(5, "Email must be at least 5 characters")
    .max(100, "Email must be less than 100 characters"),
  message: z.string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters")
    .trim(),
});

type FormData = z.infer<typeof formSchema>;

const formVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const lastSubmitTime = useRef<number>(0);
  const formRef = useRef<HTMLFormElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isDirty, isValid },
    watch,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
  });

  // Watch form fields for real-time validation
  const watchFields = watch();

  // Rate limiting check
  const canSubmit = () => {
    const now = Date.now();
    const timeSinceLastSubmit = now - lastSubmitTime.current;
    const hasReachedLimit = submitCount >= 5;

    if (timeSinceLastSubmit < 60000) { // 1 minute cooldown
      toast.error("Please wait a moment before sending another message.");
      return false;
    }

    if (hasReachedLimit) {
      toast.error("Maximum message limit reached. Please try again later.");
      return false;
    }

    return true;
  };

  const onSubmit = async (data: FormData) => {
    try {
      if (!canSubmit()) return;

      setIsLoading(true);
      const sanitizedData = {
        from_name: data.name.trim(),
        from_email: data.email.trim(),
        message: data.message.trim(),
      };

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        sanitizedData,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      if (result.text === "OK") {
        // Success animation
        const form = formRef.current;
        if (form) {
          form.style.transform = "scale(0.98)";
          setTimeout(() => {
            form.style.transform = "scale(1)";
          }, 100);
        }

        toast.success("Message sent successfully! I'll get back to you soon.");
        reset();
        setSubmitCount(prev => prev + 1);
        lastSubmitTime.current = Date.now();
      }
    } catch (err) {
      console.error(err);
      toast.error(
        "Failed to send message. Please try again or contact me directly via email."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <motion.form
      ref={formRef}
      variants={formVariants}
      initial="hidden"
      animate="show"
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-md mx-auto relative"
    >
      <motion.div variants={itemVariants} className="space-y-2">
        <label className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent inline-flex items-center gap-2">
          Your Name
          {watchFields.name?.length > 0 && !errors.name && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-emerald-500 text-xs"
            >
              ✓
            </motion.span>
          )}
        </label>
        <div className="relative group">
          <Input
            {...register("name")}
            placeholder="Enter your name"
            className={cn(
              "bg-background/80 backdrop-blur-[8px] pr-10 transition-all duration-300",
              errors.name ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-emerald-500/50 group-hover:border-emerald-500/30"
            )}
            disabled={isLoading}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {errors.name && <span className="text-red-500 text-sm">!</span>}
          </div>
        </div>
        {errors.name && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-500"
            id="name-error"
            role="alert"
          >
            {errors.name.message}
          </motion.p>
        )}
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <label className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent inline-flex items-center gap-2">
          Your Email
          {watchFields.email?.length > 0 && !errors.email && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-emerald-500 text-xs"
            >
              ✓
            </motion.span>
          )}
        </label>
        <div className="relative group">
          <Input
            {...register("email")}
            type="email"
            placeholder="Enter your email"
            className={cn(
              "bg-background/80 backdrop-blur-[8px] pr-10 transition-all duration-300",
              errors.email ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-emerald-500/50 group-hover:border-emerald-500/30"
            )}
            disabled={isLoading}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
            {errors.email && <span className="text-red-500 text-sm">!</span>}
          </div>
        </div>
        {errors.email && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-500"
            id="email-error"
            role="alert"
          >
            {errors.email.message}
          </motion.p>
        )}
      </motion.div>

      <motion.div variants={itemVariants} className="space-y-2">
        <label className="text-sm font-medium bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent inline-flex items-center gap-2">
          Your Message
          {watchFields.message?.length > 0 && !errors.message && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="text-emerald-500 text-xs"
            >
              ✓
            </motion.span>
          )}
        </label>
        <div className="relative group">
          <textarea
            {...register("message")}
            placeholder="Type your message here..."
            className={cn(
              "w-full min-h-[150px] rounded-md border bg-background/80 backdrop-blur-[8px] px-3 py-2 text-sm resize-y transition-all duration-300",
              errors.message ? "border-red-500 focus:border-red-500" : "border-border/50 focus:border-emerald-500/50 group-hover:border-emerald-500/30"
            )}
            disabled={isLoading}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? "message-error" : undefined}
          />
          <div className="absolute right-3 top-3 pointer-events-none">
            {errors.message && <span className="text-red-500 text-sm">!</span>}
          </div>
          <span className="absolute bottom-2 right-2 text-xs text-muted-foreground">
            {watchFields.message?.length || 0}/1000
          </span>
        </div>
        {errors.message && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-red-500"
            id="message-error"
            role="alert"
          >
            {errors.message.message}
          </motion.p>
        )}
      </motion.div>

      <motion.div variants={itemVariants}>
        <Button
          type="submit"
          className={cn(
            "w-full transition-all duration-300 group",
            isValid && isDirty
              ? "bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 hover:from-green-500 hover:via-emerald-600 hover:to-teal-700"
              : "bg-gray-400 cursor-not-allowed opacity-50"
          )}
          disabled={isLoading || !isValid || !isDirty || isSubmitting}
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              Sending...
            </span>
          ) : (
            <span className="flex items-center gap-2">
              Send Message
              <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
          )}
        </Button>
      </motion.div>

      {submitCount > 0 && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xs text-muted-foreground text-center"
        >
          Messages sent today: {submitCount}/5
        </motion.p>
      )}
    </motion.form>
  );
}
