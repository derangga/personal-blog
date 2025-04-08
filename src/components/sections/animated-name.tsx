"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const AnimatedName = () => {
  const el = useRef<HTMLElement | null>(null);
  useEffect(() => {
    if (!el.current) return;

    const typed = new Typed(el.current, {
      strings: ["Hello!", "Hola!", "Bonjour!"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <h2 className="text-4xl text-sky-600 dark:text-sky-300">
      {" "}
      <span ref={el}></span>
    </h2>
  );
};

export default AnimatedName;
