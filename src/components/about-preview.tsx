"use client";

import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const techStack = [
  {
    name: "Android",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Go",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    name: "Kotlin",
    color:
      "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300",
  },
  {
    name: "Java",
    color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300",
  },
  {
    name: "TypeScript",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    name: "JavaScript",
    color: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  },
  {
    name: "React",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    name: "Tailwind CSS",
    color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300",
  },
  {
    name: "Next.js",
    color: "bg-black text-white dark:bg-zinc-800 dark:text-zinc-200",
  },

  {
    name: "Node.js",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "MongoDB",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "PostgreSQL",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
];

export function AboutPreview() {
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about-preview" className="py-20">
      <SectionHeading
        title="About Me"
        description="Get to know a bit about my background and skills"
      />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative w-80 h-80 mx-auto rounded-full overflow-hidden dark:bg-foreground border"
          >
            <Image
              src="/assets/avatar-rz.png"
              alt="Profile"
              fill
              className="object-cover transform scale-x-[-1]"
            />
          </motion.div>
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-bold mb-4"
            >
              Software Engineer based in Indonesia
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground mb-6"
            >
              Experienced Software Engineer with expertise in designing and
              building applications used by more than 800,000 users. My primary
              focus has been on delivering high-performance, user-friendly
              mobile solutions that meet both user needs and business
              objectives. I enjoy learning new technologies and applying them to
              create full-stack solutions. Currently, {"I’m"} exploring
              full-stack development with Next.js by building a mini project to
              deepen my understanding of modern web frameworks.
            </motion.p>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="mb-6"
            >
              <h4 className="text-lg font-semibold mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.div key={i} variants={item}>
                    <Badge
                      variant="outline"
                      className={`font-normal ${tech.color}`}
                    >
                      {tech.name}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
