"use client";

import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { blogPosts } from "@/constants/content";
import Microlink from "@microlink/react";

const categories = [
  "All",
  "Frontend",
  "Backend",
  "Android",
  "Flutter",
  "Others",
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {featuredPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Microlink
                url={post.url}
                className="rounded-xl hover:scale-105 transform transition-transform"
                size="large"
              />
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
            <Microlink
              url={post.url}
              className="rounded-xl hover:scale-105 transform transition-transform bg-primary"
              size="large"
            />
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
    </div>
  );
}
