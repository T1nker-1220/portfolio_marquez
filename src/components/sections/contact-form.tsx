"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import emailjs from "@emailjs/browser";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setIsLoading(true);
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_fuoomwr",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_1234567890",
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "4sH4fm5e4pxBk5K2e"
      );

      if (result.text === "OK") {
        toast.success("Message sent successfully!");
        reset();
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 w-full max-w-md mx-auto"
    >
      <div className="space-y-2">
        <Input
          {...register("name")}
          placeholder="Your Name"
          className="bg-background/80 backdrop-blur-[8px]"
        />
        {errors.name && (
          <p className="text-sm text-red-500">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Input
          {...register("email")}
          type="email"
          placeholder="Your Email"
          className="bg-background/80 backdrop-blur-[8px]"
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <textarea
          {...register("message")}
          placeholder="Your Message"
          className="w-full min-h-[150px] rounded-md border border-border/50 bg-background/80 backdrop-blur-[8px] px-3 py-2 text-sm"
        />
        {errors.message && (
          <p className="text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}
