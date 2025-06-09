"use client";

import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, Search } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const blogPosts = [
  {
    id: 1,
    title: "Building Modern UIs with React and Tailwind CSS",
    excerpt:
      "Learn how to combine React and Tailwind CSS to build beautiful, responsive user interfaces quickly and efficiently.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl.",
    category: "Frontend",
    date: "Mar 15, 2024",
    readTime: "8 min read",
    image:
      "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg",
    featured: true,
  },
  {
    id: 2,
    title: "The Future of Web Development: What's Coming in 2025",
    excerpt:
      "Exploring upcoming trends and technologies that will shape the future of web development in the next year.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl.",
    category: "Industry Insights",
    date: "Apr 2, 2024",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    featured: true,
  },
  {
    id: 3,
    title: "Mastering TypeScript: Tips and Best Practices",
    excerpt:
      "Enhance your TypeScript skills with these advanced tips and best practices for large-scale applications.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl.",
    category: "TypeScript",
    date: "Feb 28, 2024",
    readTime: "12 min read",
    image: "https://images.pexels.com/photos/4709285/pexels-photo-4709285.jpeg",
    featured: false,
  },
  {
    id: 4,
    title: "Building a Scalable API with Node.js and Express",
    excerpt:
      "A comprehensive guide to designing and implementing a scalable API architecture using Node.js and Express.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl.",
    category: "Backend",
    date: "Jan 15, 2024",
    readTime: "15 min read",
    image: "https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg",
    featured: false,
  },
  {
    id: 5,
    title: "The Complete Guide to CSS Grid Layout",
    excerpt:
      "Master the CSS Grid Layout system and create complex, responsive layouts with ease.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl.",
    category: "CSS",
    date: "Mar 8, 2024",
    readTime: "10 min read",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg",
    featured: false,
  },
  {
    id: 6,
    title: "Performance Optimization Techniques for React Applications",
    excerpt:
      "Learn how to identify and fix performance bottlenecks in your React applications for a smoother user experience.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nisl nunc aliquet nisl, eget aliquet nisl nisl sit amet nisl.",
    category: "React",
    date: "Feb 5, 2024",
    readTime: "13 min read",
    image: "https://images.pexels.com/photos/5926386/pexels-photo-5926386.jpeg",
    featured: false,
  },
];

const categories = [
  "All",
  "Frontend",
  "Backend",
  "React",
  "TypeScript",
  "CSS",
  "Industry Insights",
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter((post) => post.featured);

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
    <div className="container mx-auto px-4 py-20">
      <SectionHeading
        title="Blog"
        description="Thoughts, ideas, and insights on web development"
      />

      {/* Featured Posts */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-6">Featured Articles</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full flex flex-col overflow-hidden">
                <div className="relative h-60 w-full">
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
                  <h3 className="text-xl font-bold">{post.title}</h3>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href={`/blog/${post.id}`}>Read article</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search articles..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs
            defaultValue="All"
            className="w-full md:w-auto"
            onValueChange={setActiveCategory}
          >
            <TabsList className="h-auto flex flex-wrap">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs md:text-sm"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>
      </div>

      {/* Articles Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filteredPosts.map((post) => (
          <motion.div
            key={post.id}
            variants={item}
            whileHover={{ y: -5 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative h-48 w-full">
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
                </div>
                <h3 className="text-xl font-bold leading-tight line-clamp-2">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground line-clamp-3">
                  {post.excerpt}
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href={`/blog/${post.id}`}>Read more</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No articles found matching your search criteria.
          </p>
        </div>
      )}

      {/* Newsletter Signup */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 bg-card p-8 rounded-lg text-center max-w-xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-4">Subscribe to the Newsletter</h3>
        <p className="text-muted-foreground mb-6">
          Get notified when I publish new articles and receive exclusive content
          straight to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-2">
          <Input placeholder="Your email address" className="flex-grow" />
          <Button>Subscribe</Button>
        </div>
      </motion.div>
    </div>
  );
}
