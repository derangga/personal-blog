"use client";

import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { experiences } from "@/constants/content";

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading
        title="Professional Experience"
        description="A detailed look at my professional journey and achievements"
      />

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto mt-16">
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border" />

        {experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative mb-12 md:mb-24 ${
              index % 2 === 0
                ? "md:pr-12 md:ml-0 md:mr-auto"
                : "md:pl-12 md:ml-auto md:mr-0"
            } w-full md:w-1/2`}
          >
            {/* Timeline dot */}
            <div
              className="absolute left-0 md:left-auto md:right-0 top-6 w-4 h-4 rounded-full bg-primary z-10 md:-mr-2.5"
              style={{
                [index % 2 === 0 ? "right" : "left"]: "-8px",
                [index % 2 === 0 ? "left" : "right"]: "auto",
              }}
            />

            <Card
              className={`relative p-6 ${
                index % 2 === 0 ? "md:mr-4" : "md:ml-4"
              }`}
            >
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center mb-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                  <Briefcase className="w-4 h-4 mr-2" />
                  <span>{exp.role}</span>
                </div>
                <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{exp.period}</span>
                  <span className="mx-2">•</span>
                  <span>{exp.location}</span>
                </div>
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                <h4 className="font-semibold mb-2">Key Achievements:</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="w-5 h-5 text-chart-1 mr-2 shrink-0 mt-0.5" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
