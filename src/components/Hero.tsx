"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle scroll parallax
  const { scrollY } = useScroll();
  const yBgText = useTransform(scrollY, [0, 800], [0, -150]);
  const yCircle = useTransform(scrollY, [0, 800], [0, 50]);
  const yImage = useTransform(scrollY, [0, 800], [0, -30]);

  // Track mouse coordinates for mouse-move parallax on hero assets
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { width, height, left, top } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left - width / 2) / 25; // dampening factor
      const y = (e.clientY - top - height / 2) / 25;
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: custom * 0.15, ease: "easeOut" },
    }),
  };

  const handleScrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative w-full min-h-screen bg-bg-solid flex flex-col justify-between overflow-hidden pt-24 pb-12 px-6 md:px-12 z-10"
    >
      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Hero Visual Assets (Right side / Center on desktop) */}
      <div className="absolute right-0 md:right-12 lg:right-24 top-1/2 -translate-y-1/2 w-full md:w-[45vw] h-[55vh] md:h-[75vh] z-10 opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto">
        
        {/* Large Solid Red Circle behind Image */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 translate-x-12 w-[60vw] h-[60vw] md:w-[28vw] md:h-[28vw] rounded-full bg-brand-red select-none z-0 pointer-events-none"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        />

        {/* Portrait Container */}
        <motion.div
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] md:w-[36vw] h-[50vh] md:h-[65vh] overflow-hidden grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-700 pointer-events-auto shadow-2xl shadow-black/80"
          style={{
            y: yImage,
            x: mousePosition.x * 0.3,
          }}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Developer image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/port front.jpeg"
            alt="Sanjai K Developer Portrait"
            className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-[1.5s] ease-out"
          />
        </motion.div>

        {/* Editorial Text Overlays on Asset Box */}
        <motion.div 
          className="absolute right-4 bottom-[20%] text-[8px] tracking-[0.4em] font-mono text-brand-red hidden lg:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
        >
          LOC. ACET // DEG. B.E // CSE
        </motion.div>
      </div>

      {/* Hero Content (Left side) */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center relative z-20 pointer-events-auto">
        <div className="max-w-3xl flex flex-col gap-6 md:gap-8">
          
          {/* HELLO I'M tag */}
          <div className="overflow-hidden">
            <motion.span
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xs md:text-sm tracking-[0.4em] text-brand-red font-semibold uppercase flex items-center gap-3"
            >
              <span className="inline-block w-8 h-[1px] bg-brand-red" />
              HELLO, I'M
            </motion.span>
          </div>

          {/* Name Header */}
          <div className="overflow-hidden relative">
            <motion.h1
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-anton text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] leading-[0.9] font-bold tracking-tight text-text-white uppercase"
            >
              SANJAI K
            </motion.h1>
          </div>

          {/* Role Header */}
          <div className="overflow-hidden">
            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-bebas text-4xl sm:text-5xl md:text-6xl tracking-wide text-outline-red font-bold uppercase"
            >
              FULL STACK DEVELOPER
            </motion.div>
          </div>

          {/* Description */}
          <div className="overflow-hidden max-w-xl">
            <motion.p
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-sans text-sm md:text-base leading-relaxed text-text-gray"
            >
              Building scalable web applications and modern digital experiences through innovative frontend and backend technologies. Turning ideas into real-world software solutions with clean, performant code.
            </motion.p>
          </div>

          {/* Buttons and call-to-actions */}
          <motion.div
            custom={5}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mt-4"
          >
            {/* View Projects Button */}
            <button
              onClick={handleScrollToProjects}
              className="relative px-8 py-4 overflow-hidden group border border-brand-red bg-brand-red font-sans text-xs tracking-[0.2em] font-semibold text-white transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-bg-solid -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative z-10 group-hover:text-brand-red transition-colors duration-300">
                VIEW PROJECTS
              </span>
            </button>

            {/* Resume Button */}
            <a
              href="/resume.pdf" // Placeholder path for resume
              download
              className="relative px-8 py-4 overflow-hidden group border border-white bg-transparent font-sans text-xs tracking-[0.2em] font-semibold text-white transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-white -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative z-10 group-hover:text-bg-solid transition-colors duration-300">
                DOWNLOAD RESUME
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Footer-like bottom details within Hero (Socials, Scroll helper) */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative z-20 mt-12 border-t border-brand-border pt-6">
        {/* Social Links */}
        <div className="flex gap-6 items-center">
          <motion.a
            href="https://github.com/sanjaikarthik777-hash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-gray hover:text-brand-red transition-colors duration-300"
            whileHover={{ scale: 1.15 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sanjai-k-92a133345?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-gray hover:text-brand-red transition-colors duration-300"
            whileHover={{ scale: 1.15 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:sanjaikarthik777@gmail.com"
            className="text-text-gray hover:text-brand-red transition-colors duration-300"
            whileHover={{ scale: 1.15 }}
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Scroll Helper */}
        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-3 text-xs tracking-[0.2em] font-medium text-text-gray hover:text-brand-red transition-colors duration-300 focus:outline-none"
          whileHover={{ y: 5 }}
        >
          <span>SCROLL DOWN</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
