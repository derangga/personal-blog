"use client";
import { blog } from "@/constants/content";
import Microlink from "@microlink/react";
import { motion } from "framer-motion";

const Blog = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      {blog.map((e, idx) => (
        <Microlink url={e} key={idx + 1} className="rounded-xl" size="large" />
      ))}
    </motion.div>
  );
};

export default Blog;
