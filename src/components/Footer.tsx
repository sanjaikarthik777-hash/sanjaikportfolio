"use client";

import { motion } from "framer-motion";
import { ArrowUp, Heart } from "lucide-react";

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
    <footer className="relative w-full bg-bg-solid border-t border-brand-border py-12 overflow-hidden z-20">
      
      {/* Infinite Horizontal Typography Marquee */}
      <div className="w-full bg-brand-red py-4 md:py-6 overflow-hidden flex whitespace-nowrap mb-12 select-none pointer-events-none">
        <motion.div
          className="flex gap-4 font-anton text-2xl md:text-5xl tracking-wider text-bg-solid uppercase font-bold"
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

      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-12">
        {/* Main Footer Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Logo & Subtitle Block (col-span-5) */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-bebas text-3xl md:text-4xl font-bold tracking-wider text-text-white">
                SANJAI K
              </span>
              <span className="h-2 w-2 rounded-full bg-brand-red" />
            </div>
            <p className="font-sans text-xs md:text-sm text-text-gray max-w-sm leading-relaxed">
              Engineering high-performance client interfaces and backend architectures. Aspiring software engineer translating concepts into enterprise systems.
            </p>
          </div>

          {/* Navigation Links Column (col-span-4) */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="font-bebas text-lg tracking-widest text-text-white font-bold uppercase mb-2">
              NAVIGATION
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs md:text-sm">
              {navLinks.map((link) => (
                <button
                  key={link.target}
                  onClick={() => scrollToSection(link.target)}
                  className="text-left text-text-gray hover:text-brand-red transition-colors duration-300 py-1 focus:outline-none"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Scroll-To-Top button column (col-span-3) */}
          <div className="md:col-span-3 flex justify-start md:justify-end items-center">
            <button
              onClick={scrollToTop}
              className="p-4 rounded-none border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 flex items-center gap-2 font-mono text-[10px] tracking-widest uppercase font-semibold"
              aria-label="Scroll to top"
            >
              <span>BACK TO TOP</span>
              <ArrowUp size={12} />
            </button>
          </div>

        </div>

        {/* Copyright divider row */}
        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono tracking-widest text-text-muted">
          <div>
            © 2025 SANJAI K. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center gap-1">
            <span>BUILT WITH</span>
            <Heart size={10} className="text-brand-red fill-brand-red animate-pulse" />
            <span>USING NEXT.JS 15 & REACT 19</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
