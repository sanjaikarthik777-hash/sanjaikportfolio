"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { useEffect, useRef, useState, useCallback } from "react";
import { Github, Linkedin, Mail, ArrowDown, ArrowRight } from "lucide-react";

// Floating particle component
function Particle({ x, y, size, delay, duration }: { x: string; y: string; size: number; delay: number; duration: number }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(59,130,246,0.9) 0%, rgba(37,99,235,0.4) 60%, transparent 100%)`,
        boxShadow: `0 0 ${size * 3}px rgba(59,130,246,0.6)`,
      }}
      initial={{ opacity: 0, y: 0, scale: 1 }}
      animate={{ opacity: [0, 1, 0], y: -80, scale: [1, 0.6, 0] }}
      transition={{ duration, delay, repeat: Infinity, ease: "easeOut" }}
    />
  );
}

const PARTICLES = [
  { x: "10%", y: "80%", size: 4, delay: 0, duration: 3.5 },
  { x: "20%", y: "70%", size: 3, delay: 1, duration: 4 },
  { x: "30%", y: "85%", size: 5, delay: 0.5, duration: 3 },
  { x: "75%", y: "75%", size: 4, delay: 1.5, duration: 3.8 },
  { x: "85%", y: "65%", size: 3, delay: 2, duration: 4.2 },
  { x: "90%", y: "80%", size: 5, delay: 0.8, duration: 3.2 },
  { x: "60%", y: "88%", size: 3, delay: 1.2, duration: 3.6 },
  { x: "50%", y: "72%", size: 4, delay: 2.5, duration: 4.5 },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [spotlightPos, setSpotlightPos] = useState({ x: 50, y: 50 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  // Handle scroll parallax
  const { scrollY } = useScroll();
  const yImage = useTransform(scrollY, [0, 800], [0, -30]);

  // Track mouse for parallax, spotlight and card tilt
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!containerRef.current) return;
    const { width, height, left, top } = containerRef.current.getBoundingClientRect();
    const relX = e.clientX - left;
    const relY = e.clientY - top;
    const x = (relX - width / 2) / 25;
    const y = (relY - height / 2) / 25;
    // Clamp parallax x/y to prevent extreme flying when scrolled far down
    setMousePosition({ x: Math.max(-50, Math.min(50, x)), y: Math.max(-50, Math.min(50, y)) });
    setSpotlightPos({ x: (relX / width) * 100, y: (relY / height) * 100 });
    // Card tilt: max ±8 degrees (clamped)
    const rawTiltX = ((relY - height / 2) / height) * -8;
    const rawTiltY = ((relX - width / 2) / width) * 8;
    setTilt({ 
      x: Math.max(-10, Math.min(10, rawTiltX)), 
      y: Math.max(-10, Math.min(10, rawTiltY)) 
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

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
      className="animated-gradient relative w-full min-h-screen flex flex-col justify-between overflow-hidden pt-24 pb-12 px-6 md:px-12 z-10"
    >
      {/* Mouse-follow spotlight */}
      <div
        className="absolute inset-0 pointer-events-none z-0 transition-none"
        style={{
          background: `radial-gradient(circle 500px at ${spotlightPos.x}% ${spotlightPos.y}%, rgba(37,99,235,0.07) 0%, transparent 70%)`,
        }}
      />

      {/* Background Grid Accent */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Large ambient blue radial blobs */}
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full pointer-events-none opacity-20"
        style={{ background: "radial-gradient(circle, rgba(37,99,235,0.6) 0%, transparent 70%)", filter: "blur(60px)" }}
      />
      <div
        className="absolute -bottom-20 right-1/3 w-[400px] h-[400px] rounded-full pointer-events-none opacity-15"
        style={{ background: "radial-gradient(circle, rgba(59,130,246,0.5) 0%, transparent 70%)", filter: "blur(50px)" }}
      />

      {/* Floating Particles */}
      {PARTICLES.map((p, i) => (
        <Particle key={i} {...p} />
      ))}

      {/* Hero Visual Assets — Right side */}
      <div className="absolute right-0 md:right-12 lg:right-16 top-1/2 -translate-y-1/2 w-full md:w-[42vw] h-[60vh] md:h-[80vh] z-10 opacity-40 md:opacity-100 pointer-events-none md:pointer-events-auto flex items-center justify-center">

        {/* Large gradient halo behind card */}
        <motion.div
          className="absolute inset-0 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(37,99,235,0.45) 0%, rgba(59,130,246,0.18) 40%, transparent 70%)",
            filter: "blur(32px)",
            transform: "scale(1.2)",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1.2 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
        />

        {/* Orbit rings */}
        <motion.div
          className="absolute w-[110%] h-[110%] rounded-full border border-electric-blue/20 pointer-events-none orbit-ring"
          style={{ animationDuration: "12s" }}
        />
        <motion.div
          className="absolute w-[125%] h-[125%] rounded-full border border-electric-blue/10 pointer-events-none orbit-ring"
          style={{ animationDuration: "20s", animationDirection: "reverse" }}
        />

        {/* Glass card with portrait */}
        <motion.div
          className="glass-card-hero relative w-[85vw] md:w-[34vw] h-[52vh] md:h-[62vh] overflow-hidden pointer-events-auto"
          style={{
            y: yImage,
            x: mousePosition.x * 0.25,
            rotateX: tilt.x,
            rotateY: tilt.y,
            transformStyle: "preserve-3d",
          }}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Blue edge glow on card border */}
          <div
            className="absolute inset-0 rounded-[24px] pointer-events-none z-10"
            style={{
              boxShadow: "inset 0 0 30px rgba(59,130,246,0.12), 0 0 60px rgba(37,99,235,0.25)",
            }}
          />

          {/* Developer image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/port front.jpeg"
            alt="Sanjai K Developer Portrait"
            className="w-full h-full object-cover object-top scale-105 hover:scale-110 transition-transform duration-[1.5s] ease-out grayscale contrast-[1.1] hover:grayscale-0"
          />

          {/* Glass bottom overlay on image */}
          <div
            className="absolute bottom-0 left-0 right-0 h-1/3 pointer-events-none z-10"
            style={{
              background: "linear-gradient(to top, rgba(8,11,18,0.75) 0%, transparent 100%)",
            }}
          />

          {/* Editorial label inside card */}
          <motion.div
            className="absolute bottom-4 right-4 z-20 font-mono text-[9px] tracking-[0.3em] text-electric-blue blue-glow-text"
            animate={{ y: [0, -6, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          >
            LOC. ACET // DEG. B.E // CSE
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Content — Left side */}
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col justify-center relative z-20 pointer-events-auto">
        <div className="max-w-[600px] flex flex-col gap-5 md:gap-6">

          {/* Available badge */}
          <motion.div
            custom={0}
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/10 text-green-400 text-[11px] font-manrope font-600 tracking-wide">
              <span className="w-2 h-2 rounded-full bg-green-400 pulse-green" />
              Available for Internship
            </span>
          </motion.div>

          {/* HELLO I'M tag */}
          <div className="overflow-hidden">
            <motion.span
              custom={1}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xs md:text-sm tracking-[0.4em] text-brand-blue font-space font-semibold uppercase flex items-center gap-3 blue-glow-text"
            >
              <span className="inline-block w-8 h-[1px] bg-brand-blue" />
              HELLO, I&apos;M
            </motion.span>
          </div>

          {/* Name Header — Bebas Neue 700 */}
          <div className="overflow-hidden relative">
            <motion.h1
              custom={2}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-bebas text-7xl sm:text-8xl md:text-[8rem] lg:text-[10rem] leading-[0.9] font-bold tracking-tight text-text-white uppercase"
            >
              SANJAI K
            </motion.h1>
          </div>

          {/* Role — Space Grotesk 700, white→blue gradient */}
          <div className="overflow-hidden">
            <motion.div
              custom={3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
            >
              <span
                className="font-space font-bold text-3xl sm:text-4xl md:text-5xl tracking-tight gradient-text-blue"
                style={{ letterSpacing: "-0.01em" }}
              >
                Full Stack Developer
              </span>
            </motion.div>
          </div>

          {/* Subtitle pills — AI Enthusiast etc. */}
          <motion.div
            custom={3.5}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex items-center gap-2 flex-wrap"
          >
            {["AI Enthusiast", "MERN Stack", "UI Engineer"].map((tag, i) => (
              <span key={tag}>
                <span className="text-xs font-space font-medium text-electric-blue/80 tracking-wide">{tag}</span>
                {i < 2 && <span className="text-text-muted mx-2">•</span>}
              </span>
            ))}
          </motion.div>

          {/* Description — Inter 400, max-w 550px */}
          <div className="overflow-hidden" style={{ maxWidth: "550px" }}>
            <motion.p
              custom={4}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-sans text-sm md:text-base leading-[1.85] text-text-gray"
            >
              Building scalable web applications and modern digital experiences through innovative frontend and backend technologies. Turning ideas into real-world software solutions with clean, performant code.
            </motion.p>
          </div>

          {/* Buttons — Manrope 600 */}
          <motion.div
            custom={5}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap gap-4 mt-2"
          >
            {/* View Projects — gradient primary */}
            <motion.button
              onClick={handleScrollToProjects}
              className="btn-primary group flex items-center gap-2.5 px-7 py-3.5 text-white text-sm rounded-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>View Projects</span>
              <motion.span
                className="inline-flex"
                animate={{ x: 0 }}
                whileHover={{ x: 4 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </motion.span>
            </motion.button>

            {/* Resume — secondary glass */}
            <motion.a
              href="/resume.pdf"
              download
              className="btn-secondary group flex items-center gap-2.5 px-7 py-3.5 text-text-white text-sm rounded-lg"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <span>Download Resume</span>
              <ArrowDown size={16} className="group-hover:translate-y-0.5 transition-transform duration-300" />
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Footer-like bottom details — Socials, Scroll helper */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center relative z-20 mt-12 border-t border-brand-border pt-6">
        {/* Social Links */}
        <div className="flex gap-6 items-center">
          <motion.a
            href="https://github.com/sanjaikarthik777-hash"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-gray hover:text-electric-blue transition-colors duration-300"
            whileHover={{ scale: 1.15, y: -2 }}
          >
            <Github size={20} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/sanjai-k-92a133345?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-gray hover:text-electric-blue transition-colors duration-300"
            whileHover={{ scale: 1.15, y: -2 }}
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            href="mailto:sanjaikarthik777@gmail.com"
            className="text-text-gray hover:text-electric-blue transition-colors duration-300"
            whileHover={{ scale: 1.15, y: -2 }}
          >
            <Mail size={20} />
          </motion.a>
        </div>

        {/* Scroll Helper */}
        <motion.button
          onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
          className="flex items-center gap-3 text-xs tracking-[0.2em] font-medium text-text-gray hover:text-electric-blue transition-colors duration-300 focus:outline-none font-space"
          whileHover={{ y: 4 }}
        >
          <span>SCROLL DOWN</span>
          <ArrowDown size={14} className="animate-bounce" />
        </motion.button>
      </div>
    </section>
  );
}
