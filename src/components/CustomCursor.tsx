"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Motion values for tracking cursor position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Spring settings for smooth trailing effect
  const springConfig = { damping: 30, stiffness: 200, mass: 0.6 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => {
      setHidden(true);
    };

    const handleMouseEnter = () => {
      setHidden(false);
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Interactive element hover listeners
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.classList.contains("interactive") ||
        target.getAttribute("role") === "button";
      
      setHovered(isHoverable);
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, hidden]);

  if (hidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 hidden lg:block">
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-red pointer-events-none z-50"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
        animate={{
          scale: hovered ? 1.8 : 1,
          backgroundColor: hovered ? "rgba(255, 42, 42, 0.15)" : "rgba(255, 42, 42, 0)",
          borderColor: hovered ? "#FF2A2A" : "rgba(255, 255, 255, 0.5)",
        }}
        transition={{ type: "tween", duration: 0.15 }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-red pointer-events-none z-50"
        style={{
          x: cursorX,
          y: cursorY,
        }}
        animate={{
          scale: hovered ? 0.5 : 1,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </div>
  );
}
