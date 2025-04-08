"use client";
import { motion } from "framer-motion";
import { projects } from "@/constants/content";
import ProjectItem from "./project-item";

const Project = () => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ ease: "easeInOut", duration: 0.75 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {projects.map((e, idx) => (
        <ProjectItem key={idx + 1} {...e} />
      ))}
    </motion.div>
  );
};

export default Project;
