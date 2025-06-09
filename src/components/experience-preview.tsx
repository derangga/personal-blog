"use client";

import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/section-heading";
import Link from "next/link";
import { ArrowRight, Briefcase, CalendarDays } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    period: "2022 - Present",
    description:
      "Leading the frontend development team, implementing modern UI/UX practices and mentoring junior developers.",
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2020 - 2022",
    description:
      "Developed and maintained web applications using React, Node.js, and MongoDB. Improved application performance by 40%.",
  },
];

export function ExperiencePreview() {
  return (
    <section className="py-20 bg-muted/50">
      <SectionHeading
        title="Experience"
        description="A glimpse into my professional journey"
      />
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-6"
            >
              <Card>
                <CardHeader className="flex flex-row items-start space-y-0 gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-md">
                    <Briefcase className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                    <CardDescription className="flex items-center">
                      {exp.company}
                      <span className="mx-2">•</span>
                      <span className="flex items-center text-xs">
                        <CalendarDays className="mr-1 h-3 w-3" />
                        {exp.period}
                      </span>
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 text-center"
          >
            <Link href="/experience">
              <Button className="group">
                View full experience
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
