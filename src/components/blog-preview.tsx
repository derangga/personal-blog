"use client";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const featuredPosts = [
  {
    id: 1,
    title: "Building Modern UIs with React and Tailwind CSS",
    excerpt:
      "Learn how to combine React and Tailwind CSS to build beautiful, responsive user interfaces quickly and efficiently.",
    category: "Frontend",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
  },
  {
    id: 2,
    title: "The Future of Web Development: What's Coming in 2025",
    excerpt:
      "Exploring upcoming trends and technologies that will shape the future of web development in the next year.",
    category: "Industry Insights",
    date: "Apr 2, 2024",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
  },
];

export function BlogPreview() {
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
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-20 bg-muted/50">
      <SectionHeading
        title="Blog"
        description="Thoughts, ideas, and insights on web development"
      />
      <div className="container mx-auto px-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto"
        >
          {featuredPosts.map((post) => (
            <motion.div key={post.id} variants={item}>
              <Card className="h-full flex flex-col overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-56 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <CalendarDays className="mr-1 h-3 w-3" />
                      {post.date}
                    </span>
                    <span className="text-xs text-muted-foreground flex items-center">
                      <Clock className="mr-1 h-3 w-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold leading-tight">
                    {post.title}
                  </h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="group w-full">
                    Read article
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <Link href="/blog">
            <Button className="group">
              View all articles
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
