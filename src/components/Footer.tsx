"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart, Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const scrollElements = Array(8).fill("SANJAI K • FULL STACK DEVELOPER • ");

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Education", target: "education" },
    { label: "Contact", target: "contact" },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-bg-solid border-t border-brand-border py-10 sm:py-12 overflow-hidden z-20">

      {/* Infinite Horizontal Typography Marquee - Electric Blue */}
      <div className="w-full py-3 sm:py-4 md:py-6 overflow-hidden flex whitespace-nowrap mb-8 sm:mb-12 select-none pointer-events-none" style={{ background: 'linear-gradient(90deg, #1d4ed8, #2563EB, #3B82F6, #2563EB, #1d4ed8)', boxShadow: '0 0 24px rgba(59,130,246,0.3)' }}>
        <motion.div
          className="flex gap-4 font-anton text-xl sm:text-3xl md:text-5xl tracking-wider text-bg-solid uppercase font-bold"
          animate={{ x: [0, -1000] }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
        >
          {scrollElements.map((text, idx) => (
            <span key={idx} className="flex-shrink-0">
              {text}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 flex flex-col gap-8 sm:gap-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 items-start">

          {/* Logo & Subtitle Block (col-span-5) */}
          <div className="sm:col-span-2 md:col-span-5 flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bebas text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider text-text-white">
                SANJAI K
              </span>
              <span className="h-2 w-2 rounded-full bg-brand-blue flex-shrink-0" />
            </div>
            <p className="font-sans text-xs md:text-sm text-text-gray max-w-sm leading-relaxed">
              Engineering high-performance client interfaces and backend architectures. Aspiring software engineer translating concepts into enterprise systems.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 sm:gap-4 items-center mt-1 sm:mt-2">
              <motion.a
                href="https://github.com/sanjaikarthik777-hash"
                target="_blank" rel="noopener noreferrer"
                className="text-text-gray hover:text-electric-blue transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
              ><Github size={16} /></motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sanjai-k-92a133345"
                target="_blank" rel="noopener noreferrer"
                className="text-text-gray hover:text-electric-blue transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
              ><Linkedin size={16} /></motion.a>
              <motion.a
                href="https://www.instagram.com/viv_sanjai"
                target="_blank" rel="noopener noreferrer"
                className="text-text-gray hover:text-electric-blue transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
              ><Instagram size={16} /></motion.a>
              <motion.a
                href="mailto:sanjaikarthik777@gmail.com"
                className="text-text-gray hover:text-electric-blue transition-colors duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
              ><Mail size={16} /></motion.a>
            </div>
          </div>

          {/* Navigation Links Column (col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-bebas text-base sm:text-lg tracking-widest text-text-white font-bold uppercase mb-1 sm:mb-2">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-left text-text-gray hover:text-electric-blue transition-colors duration-300 py-1 focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scroll-To-Top button column (col-span-3) */}
          <div className="md:col-span-3 flex justify-start sm:justify-start md:justify-end items-center">
            <button
              onClick={scrollToTop}
              className="p-3 sm:p-4 rounded-none border border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white transition-all duration-300 flex items-center gap-2 font-manrope text-[10px] tracking-widest uppercase font-semibold blue-glow"
              aria-label="Scroll to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={11} />
            </button>
          </div>

        </div>

        {/* Copyright divider row */}
        <div className="border-t border-brand-border pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-[10px] font-mono tracking-widest text-text-muted">
          <div>
            © 2026 SANJAI K. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1">
            <span>BUILT WITH</span>
            <Heart size={10} className="text-electric-blue fill-electric-blue animate-pulse mx-1" />
            <span>USING NEXT.JS 15 &amp; REACT 19</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
