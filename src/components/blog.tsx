"use client";
import { blog } from "@/constants/content";
import Microlink from "@microlink/react";

const Blog = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {blog.map((e, idx) => (
        <Microlink url={e} key={idx + 1} className="rounded-xl" size="large" />
      ))}
    </div>
  );
};

export default Blog;
