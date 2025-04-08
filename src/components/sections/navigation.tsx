"use client";

import { navLinks } from "@/constants/content";
import Toggle from "../toggle";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NavigationBar = () => {
  const navMenuRef = useRef<HTMLElement | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="flex sticky top-0 z-20 justify-between gap-5 px-8 py-5 bg-secondary-background border-b-4 border-border">
        <Toggle />
        <nav className="flex items-center justify-end">
          <div className="hidden md:block">
            <ul className="flex flex-1 items-center gap-14 max-lg:hidden">
              {navLinks.map((navLink, index) => {
                return (
                  <li key={index}>
                    <Link href={navLink.path}>
                      <p className="font-jersey text-xl">{navLink.name}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <Button
            variant="ghost"
            className="hidden max-lg:block"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X size="20px" /> : <Menu size="20px" />}
          </Button>
        </nav>
      </header>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            ref={navMenuRef}
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0%" }}
            exit={{ translateY: "-100%" }}
            transition={{
              duration: 0.3,
              type: "tween",
              ease: "easeInOut",
            }}
            style={{ overflow: "hidden" }}
            className="fixed right-0 z-10 flex h-screen w-screen border-primary bg-secondary-background"
          >
            <ul className="mx-auto flex h-full flex-col items-center justify-center gap-10 lg:hidden font-jersey">
              {navLinks.map((navLink, index) => {
                return (
                  <li key={index}>
                    <Link href={navLink.path}>
                      <p
                        className="font-jersey text-xl"
                        onClick={() => {
                          setIsMenuOpen(false);
                        }}
                      >
                        {navLink.name}
                      </p>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavigationBar;
