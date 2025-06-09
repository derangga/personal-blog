"use client";

import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardHeader,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment processing. Built with a focus on performance and user experience.",
    image: "https://images.pexels.com/photos/6956903/pexels-photo-6956903.jpeg",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
    demoUrl: "https://demo-ecommerce.example.com",
    githubUrl: "https://github.com/username/ecommerce-platform",
    category: "Full-Stack",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, team functionality, and customizable workflows. Features include drag-and-drop task boards, notifications, and detailed analytics.",
    image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg",
    technologies: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Socket.io",
      "Tailwind CSS",
    ],
    demoUrl: "https://tasks-app.example.com",
    githubUrl: "https://github.com/username/task-management",
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "Travel Companion",
    description:
      "A travel planning application with itinerary creation, location-based recommendations, and offline capabilities. Integrates with various travel APIs for real-time information.",
    image: "https://images.pexels.com/photos/7412095/pexels-photo-7412095.jpeg",
    technologies: [
      "React Native",
      "Firebase",
      "Google Maps API",
      "Redux",
      "Expo",
    ],
    demoUrl: "https://travel-companion.example.com",
    githubUrl: "https://github.com/username/travel-companion",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Personal Finance Dashboard",
    description:
      "A comprehensive financial dashboard for tracking expenses, investments, and budgets. Features include data visualization, goal setting, and financial forecasting.",
    image: "https://images.pexels.com/photos/6771985/pexels-photo-6771985.jpeg",
    technologies: [
      "Vue.js",
      "D3.js",
      "Node.js",
      "MongoDB",
      "Express",
      "Plaid API",
    ],
    demoUrl: "https://finance-dash.example.com",
    githubUrl: "https://github.com/username/finance-dashboard",
    category: "Full-Stack",
  },
  {
    id: 5,
    title: "AI Content Generator",
    description:
      "A tool that uses AI to generate marketing content, blog posts, and social media updates. Includes features for customization, editing, and direct publishing to various platforms.",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    technologies: [
      "React",
      "Python",
      "Flask",
      "OpenAI API",
      "PostgreSQL",
      "Redis",
    ],
    demoUrl: "https://ai-content.example.com",
    githubUrl: "https://github.com/username/ai-content-generator",
    category: "AI/ML",
  },
  {
    id: 6,
    title: "Health & Fitness Tracker",
    description:
      "A mobile app for tracking workouts, nutrition, and health metrics. Features include custom workout plans, meal tracking, progress visualization, and integration with wearable devices.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg",
    technologies: ["React Native", "GraphQL", "Apollo", "MongoDB", "Node.js"],
    demoUrl: "https://fitness-tracker.example.com",
    githubUrl: "https://github.com/username/health-tracker",
    category: "Mobile",
  },
];

const categories = ["All", "Full-Stack", "Mobile", "AI/ML", "Frontend"];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
        title="My Projects"
        description="Explore a collection of my work across various technologies and domains"
      />

      {/* Category Filter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
            className="mb-2"
          >
            {category}
          </Button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={item}
            whileHover={{ y: -10 }}
            className="h-full"
          >
            <Card className="h-full flex flex-col overflow-hidden">
              <div className="relative h-56 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-bold">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  <Badge>{project.category}</Badge>
                </div>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <Badge key={i} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-4">
                <Button asChild size="sm" className="flex-1">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline" className="flex-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground">
            No projects found in this category.
          </p>
        </div>
      )}

      {/* Project Inquiry CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-20 bg-card p-8 rounded-lg text-center max-w-3xl mx-auto"
      >
        <h3 className="text-2xl font-bold mb-4">Have a project in mind?</h3>
        <p className="text-muted-foreground mb-6">
          {"I'm"} always open to discussing new projects, creative ideas or
          opportunities to be part of your vision.
        </p>
        <Button asChild>
          <Link href="/#contact">Get in Touch</Link>
        </Button>
      </motion.div>
    </div>
  );
}
