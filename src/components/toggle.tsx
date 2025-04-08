import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

const Toggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleMode = () => {
    setDarkMode((prev) => !prev);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <Button
      variant="neutral"
      onClick={toggleMode}
      className="hover:cursor-pointer relative h-12 w-12 overflow-hidden"
    >
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={darkMode ? { y: -40, opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute"
      >
        <Sun size={24} />
      </motion.div>

      <motion.div
        initial={{ y: 40, opacity: 0 }}
        animate={darkMode ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="absolute"
      >
        <Moon />
      </motion.div>
    </Button>
  );
};

export default Toggle;
