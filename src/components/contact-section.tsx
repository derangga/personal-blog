"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { SectionHeading } from "@/components/section-heading";
import { Loader2, Send } from "lucide-react";
import { mailFormSchema, MailFormValues } from "@/models/mail-form";
import sendMail from "@/actions/mail";
import { toast } from "sonner";
import { useState } from "react";

export function ContactSection() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const form = useForm<MailFormValues>({
    resolver: zodResolver(mailFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  async function onSubmit(data: MailFormValues) {
    setIsLoading(true);
    const result = await sendMail(data);
    setIsLoading(false);
    if (!result) {
      toast.error("Failed sending email", {
        description:
          "Something wrong with your request, please try again later",
        duration: 2000,
      });
      return;
    }
    form.reset();
  }

  return (
    <section className="py-20">
      <SectionHeading
        title="Get in Touch"
        description="Have a project in mind? Let's work together."
      />
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Your message"
                        rows={5}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  );
}
