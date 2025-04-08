"use client";

import Blog from "@/components/blog";
import Link from "next/link";

export default function Page() {
  return (
    <div className="size-full px-8 py-6 flex flex-col gap-8 bg-background bg-[15px_20px] bg-[linear-gradient(to_right,#8080804D_1px,transparent_1px),linear-gradient(to_bottom,#80808090_1px,transparent_1px)] shadow-shadow [background-size:70px_70px]">
      <h2 className="text-5xl font-jersey">
        Checkout my blog post on{" "}
        <Link
          href="https://derangga.medium.com"
          className="underline text-sky-600 dark:text-sky-300"
        >
          Medium
        </Link>
      </h2>
      <Blog />
    </div>
  );
}
