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
import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { GithubIcon } from "@/components/icons/github-icon";

const projects = [
  {
    id: 1,
    title: "Bukalapak Marketplace",
    description: `An online platform that helps SMEs start their own business with 
        minimum capital and greater market exposure across the country!`,
    image: "/assets/bukalapak-mp.webp",
    technologies: ["Android", "Kotlin", "Java", "Firebase"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.bukalapak.android&hl=en",
    githubUrl: "",
    category: "Mobile",
  },
  {
    id: 2,
    title: "Mitra Bukalapak",
    description: `An online service that provides individual shops or agents with access 
        to better distributors and diversifies their business offerings with a variety of virtual products.`,
    image: "/assets/bukalapak-mitra.webp",
    technologies: [
      "Android",
      "Kotlin",
      "Java",
      "Golang",
      "Vuejs",
      "Javascript",
      "Typescript",
      "Ruby",
      "MongoDB",
      "PostgresSQL",
      "MySQL",
    ],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.bukalapak.mitra&hl=en",
    githubUrl: "",
    category: "Full-Stack",
  },
  {
    id: 3,
    title: "Cartula",
    description: `An online health consultation / online telemedicine application that has a consultation feature 
      with a doctor via voice call and video call.`,
    image: "/assets/riliv-app.webp",
    technologies: ["Android", "Kotlin", "Firebase"],
    demoUrl: "https://youtu.be/wjzhpUutyfo?si=rNsVedJI2Cfv0C9d",
    githubUrl: "",
    category: "Mobile",
  },
  {
    id: 4,
    title: "Riliv",
    description:
      "An online mental health counseling to help people who are struggling with personal problems",
    image: "/assets/riliv-app.webp",
    technologies: ["Android", "Kotlin", "Java", "Firebase"],
    demoUrl: "https://play.google.com/store/apps/details?id=nozero.apps1&hl=en",
    githubUrl: "",
    category: "Mobile",
  },
  {
    id: 5,
    title: "Amartha Investor",
    description: `Amartha is a micro-finance to connect rural micro-enterprises run by strong women
        with affordable capital access.`,
    image: "/assets/amartha.webp",
    technologies: ["Android", "Kotlin", "SQLite"],
    demoUrl:
      "https://play.google.com/store/apps/details?id=com.amartha.investor&hl=en",
    githubUrl: "",
    category: "Mobile",
  },
  {
    id: 6,
    title: "Foodpedia",
    description:
      "A web app food recipe that user can share recipe and ask AI to give food recipe suggestion",
    image: "/assets/foodpedia.webp",
    technologies: ["Typescript", "Nextjs", "PostgresSQL", "Tailwind CSS", "AI"],
    demoUrl: "https://foodpedia-orcin.vercel.app/",
    githubUrl: "https://github.com/derangga/foodpedia",
    category: "Full-Stack",
  },
  {
    id: 7,
    title: "The Movie App",
    description:
      "A native android app that built with jetpack library with architechture MVVM",
    image: "/assets/the-movie.webp",
    technologies: ["Android", "Kotlin", "SQLite", "Jetpack"],
    demoUrl: "",
    githubUrl: "https://github.com/derangga/themovie-kotlin",
    category: "Mobile",
  },
];

const categories = ["All", "Full-Stack", "Mobile", "Frontend"];

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
            <Card className="h-full flex flex-col overflow-hidden pt-0 pb-6">
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
                <Button
                  size="sm"
                  className="flex-1"
                  disabled={project.demoUrl === ""}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1"
                  disabled={project.githubUrl === ""}
                >
                  <GithubIcon className="mr-2 h-4 w-4" />
                  Code
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
    </div>
  );
}
