"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hidden, setHidden] = useState(true);

  // Precise dot follows cursor exactly
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  // Outer ring trails with heavier spring (slower, smoother)
  const ringX = useSpring(dotX, { damping: 28, stiffness: 180, mass: 0.8 });
  const ringY = useSpring(dotY, { damping: 28, stiffness: 180, mass: 0.8 });

  // Aura trails even further behind
  const auraX = useSpring(dotX, { damping: 35, stiffness: 100, mass: 1.2 });
  const auraY = useSpring(dotY, { damping: 35, stiffness: 100, mass: 1.2 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      dotX.set(e.clientX);
      dotY.set(e.clientY);
      if (hidden) setHidden(false);
    };

    const handleMouseLeave = () => setHidden(true);
    const handleMouseEnter = () => setHidden(false);
    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

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

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [dotX, dotY, hidden]);

  if (hidden) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9998] hidden lg:block">

      {/* Aura — large, blurred, very slow trailing glow */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          x: auraX,
          y: auraY,
          width: hovered ? 80 : 60,
          height: hovered ? 80 : 60,
          background: hovered
            ? "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)",
          filter: "blur(8px)",
          transition: "width 0.3s, height 0.3s",
        }}
      />

      {/* Outer ring — medium spring lag */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none border"
        style={{ x: ringX, y: ringY }}
        animate={{
          width: clicked ? 20 : hovered ? 44 : 32,
          height: clicked ? 20 : hovered ? 44 : 32,
          borderColor: hovered ? "rgba(59,130,246,0.9)" : "rgba(248,250,252,0.4)",
          backgroundColor: hovered ? "rgba(37,99,235,0.12)" : "rgba(37,99,235,0)",
          boxShadow: hovered
            ? "0 0 20px rgba(59,130,246,0.5), 0 0 40px rgba(37,99,235,0.2)"
            : "none",
        }}
        transition={{ type: "tween", duration: 0.2 }}
      />

      {/* Inner dot — precise, no lag */}
      <motion.div
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
        style={{
          x: dotX,
          y: dotY,
          boxShadow: "0 0 10px rgba(59,130,246,0.9)",
          background: "linear-gradient(135deg, #3B82F6, #2563EB)",
        }}
        animate={{
          width: clicked ? 6 : hovered ? 4 : 6,
          height: clicked ? 6 : hovered ? 4 : 6,
          scale: clicked ? 0.5 : 1,
        }}
        transition={{ type: "tween", duration: 0.1 }}
      />
    </div>
  );
}
