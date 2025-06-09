"use client";

import { SectionHeading } from "@/components/section-heading";
import Image from "next/image";
import { motion } from "framer-motion";
import { Laptop, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { GithubIcon } from "@/components/icons/github-icon";
import { LinkedinIcon } from "@/components/icons/linkedin-icon";

const skillCategories = [
  {
    title: "Frontend Development",
    skills: [
      "HTML/CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Vue.js",
      "Tailwind CSS",
      "Material UI",
    ],
  },
  {
    title: "Backend Development",
    skills: [
      "Node.js",
      "Python",
      "Java",
      "Express",
      "Django",
      "Spring Boot",
      "RESTful APIs",
      "GraphQL",
    ],
  },
  {
    title: "Mobile Development",
    skills: [
      "React Native",
      "Flutter",
      "Android (Kotlin)",
      "iOS (Swift)",
      "Expo",
      "Mobile UI/UX",
    ],
  },
  {
    title: "Database & Infrastructure",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
];

const socialLinks = [
  { name: "GitHub", url: "https://github.com", icon: GithubIcon },
  { name: "LinkedIn", url: "https://linkedin.com", icon: LinkedinIcon },
  { name: "Email", url: "mailto:hello@example.com", icon: Mail },
];

export default function AboutPage() {
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
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading
        title="About Me"
        description="Learn more about my background, skills, and expertise"
      />

      {/* Bio Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-96 h-96 mx-auto rounded-full overflow-hidden dark:bg-foreground border"
        >
          <Image
            src="/assets/avatar-rz.png"
            alt="Profile"
            fill
            className="object-cover scale-x-[-1]"
          />
        </motion.div>
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4"
          >
            Dimas Rangga
          </motion.h3>
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-muted-foreground mb-6"
          >
            Software Engineer
          </motion.h4>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-6"
          >
            {"I'm"} a passionate web developer with a focus on creating
            efficient, scalable, and user-friendly applications. With 5+ years
            of experience in the industry, {"I've"} had the opportunity to work
            on a variety of projects ranging from small business websites to
            large enterprise applications.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mb-6"
          >
            My approach to development is centered around solving real problems
            with clean, maintainable code. I enjoy the challenge of finding
            elegant solutions to complex issues and continuously learning new
            technologies to stay at the forefront of web development.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            {socialLinks.map((link, i) => {
              const Icon = link.icon;
              return (
                <Link
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Icon className="h-5 w-5" />
                    <span className="sr-only">{link.name}</span>
                  </Button>
                </Link>
              );
            })}
          </motion.div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Skills & Expertise
        </h3>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, i) => (
            <motion.div key={i} variants={item}>
              <Card className="p-6">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Laptop className="h-5 w-5 mr-2 text-primary" />
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Education & Certifications */}
      <div className="mb-20">
        <h3 className="text-2xl font-bold mb-8 text-center">
          Education & Certifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h4 className="text-xl font-semibold mb-2">
              BSc in Computer Science
            </h4>
            <p className="text-muted-foreground mb-1">Stanford University</p>
            <p className="text-sm text-muted-foreground">2015 - 2019</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h4 className="text-xl font-semibold mb-2">
              AWS Certified Solutions Architect
            </h4>
            <p className="text-muted-foreground mb-1">Amazon Web Services</p>
            <p className="text-sm text-muted-foreground">2021</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h4 className="text-xl font-semibold mb-2">
              React Advanced Certification
            </h4>
            <p className="text-muted-foreground mb-1">Frontend Masters</p>
            <p className="text-sm text-muted-foreground">2020</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-card rounded-lg p-6 shadow-sm"
          >
            <h4 className="text-xl font-semibold mb-2">
              Full-Stack JavaScript Bootcamp
            </h4>
            <p className="text-muted-foreground mb-1">Code Academy</p>
            <p className="text-sm text-muted-foreground">2019</p>
          </motion.div>
        </div>
      </div>

      {/* Interests Section */}
      <div>
        <h3 className="text-2xl font-bold mb-8 text-center">
          Interests & Hobbies
        </h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          When {"I'm"} not coding, you can find me hiking in the mountains,
          reading science fiction novels, experimenting with new cooking
          recipes, or attending tech meetups to connect with other developers.
          {"I'm"} also an amateur photographer and enjoy capturing landscapes
          during my travels.
        </motion.p>
      </div>
    </div>
  );
}
