"use client";

import { SectionHeading } from "@/components/section-heading";
import { motion } from "framer-motion";
import { Briefcase, Calendar, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "Tech Innovators Inc.",
    location: "San Francisco, CA",
    period: "January 2022 - Present",
    description:
      "Leading the frontend development team in building modern web applications using React and Next.js. Implementing state-of-the-art UI/UX practices and mentoring junior developers.",
    achievements: [
      "Reduced page load times by 40% through code optimization and implementing lazy loading strategies",
      "Led the migration from legacy codebase to a modern React architecture",
      "Implemented comprehensive test coverage increasing stability by 35%",
      "Mentored 5 junior developers who have since been promoted",
    ],
  },
  {
    id: 2,
    role: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    location: "New York, NY",
    period: "March 2020 - December 2021",
    description:
      "Developed and maintained web applications using React, Node.js, and MongoDB. Collaborated with design and product teams to implement new features and improve user experience.",
    achievements: [
      "Designed and implemented RESTful APIs that handled 500+ requests per second",
      "Built and deployed a customer-facing dashboard that increased user engagement by 28%",
      "Refactored the authentication system, improving security and reducing login issues by 60%",
      "Contributed to open-source projects maintained by the company",
    ],
  },
  {
    id: 3,
    role: "Web Developer",
    company: "Creative Agency",
    location: "Boston, MA",
    period: "June 2018 - February 2020",
    description:
      "Created responsive websites and web applications for various clients across different industries. Focused on delivering pixel-perfect designs with optimal performance.",
    achievements: [
      "Developed 15+ client websites with a 100% client satisfaction rate",
      "Implemented mobile-first approach, increasing mobile conversions by 25%",
      "Created reusable component libraries that improved development efficiency by 40%",
      "Received recognition for exceeding project expectations 3 quarters in a row",
    ],
  },
  {
    id: 4,
    role: "Junior Developer",
    company: "Startup Hub",
    location: "Austin, TX",
    period: "January 2017 - May 2018",
    description:
      "Started as an intern and quickly progressed to a junior developer role. Worked on frontend development using HTML, CSS, and JavaScript.",
    achievements: [
      "Promoted from intern to junior developer within 3 months",
      "Created interactive visualizations for data-heavy applications",
      "Reduced CSS bundle size by 30% through optimization",
      "Participated in weekly code reviews and improved code quality standards",
    ],
  },
];

export default function ExperiencePage() {
  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeading
        title="Professional Experience"
        description="A detailed look at my professional journey and achievements"
      />

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto mt-16">
        {/* Timeline line */}
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
                ? "md:pr-12 md:text-right md:ml-0 md:mr-auto"
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

      {/* Skills Growth Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto mt-20 text-center"
      >
        <h3 className="text-2xl font-bold mb-4">Skills Growth & Development</h3>
        <p className="text-muted-foreground mb-8">
          Throughout my career, {"I've"} continuously expanded my skill set,
          staying current with the latest technologies and best practices in web
          development.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Continuous Learning</h4>
            <p className="text-muted-foreground text-sm">
              Completed 20+ online courses and certifications to stay updated
              with the latest technologies.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Mentorship</h4>
            <p className="text-muted-foreground text-sm">
              Mentored junior developers and contributed to the growth of
              development teams.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Speaking & Writing</h4>
            <p className="text-muted-foreground text-sm">
              Presented at tech conferences and authored technical articles on
              web development topics.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
