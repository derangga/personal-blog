"use client";
import { workExperience } from "@/constants/content";
import { motion } from "framer-motion";
import { WorkExperienceItem } from "./work-experience-item";

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-3">
      {workExperience.map((e, idx) => (
        <motion.div
          key={idx + 1}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: "easeInOut", duration: idx + 0.5 }}
          className=" "
        >
          <WorkExperienceItem {...e} />
        </motion.div>
      ))}
    </div>
  );
};

export default WorkExperience;
