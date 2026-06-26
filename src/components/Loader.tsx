"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const statuses = [
    "INITIALIZING INTERFACES",
    "COMPILING CORE SERVICES",
    "ESTABLISHING DATABASE PORTS",
    "FETCHING PROJECT REPOSITORIES",
    "OPTIMIZING SYSTEM ASSETS",
    "PREPARING LUXURY EXPERIENCES",
  ];

  useEffect(() => {
    // Increment progress counter
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Varying speed increments for realistic loader feel
        const increment = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + increment, 100);
      });
    }, 80);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Cycle status labels based on progress range
    if (progress < 20) setStatusIndex(0);
    else if (progress < 40) setStatusIndex(1);
    else if (progress < 60) setStatusIndex(2);
    else if (progress < 80) setStatusIndex(3);
    else if (progress < 95) setStatusIndex(4);
    else setStatusIndex(5);

    if (progress === 100) {
      const timeout = setTimeout(() => {
        setIsVisible(false);
        onComplete();
      }, 600); // Small pause at 100% for aesthetic duration
      return () => clearTimeout(timeout);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex flex-col justify-between bg-bg-solid p-6 sm:p-8 md:p-16 select-none overflow-hidden"
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%", 
            transition: { duration: 0.8, ease: [0.85, 0, 0.15, 1] as const } 
          }}
        >
          {/* Top Panel - Branding */}
          <div className="flex justify-between items-center text-[9px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] text-text-muted">
            <div>SANJAI K PORTFOLIO</div>
            <div>EDITION ©2025</div>
          </div>

          {/* Middle Panel - Oversized Typographic Reveal */}
          <div className="my-auto flex flex-col items-start gap-4">
            <div className="overflow-hidden">
              <motion.h1 
                className="font-bebas text-5xl sm:text-6xl md:text-9xl font-bold tracking-tight text-text-white"
                initial={{ y: 150 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                SANJAI K
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.p
                className="font-space text-[10px] sm:text-xs md:text-sm tracking-[0.3em] sm:tracking-[0.4em] text-brand-blue font-bold blue-glow-text"
                initial={{ y: 40 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                FULL STACK DEVELOPER
              </motion.p>
            </div>
          </div>

          {/* Bottom Panel - Loading Info */}
          <div className="flex flex-row justify-between items-end gap-4">
            {/* Status logs */}
            <div className="flex flex-col gap-2">
              <div className="h-[2px] w-24 overflow-hidden" style={{ background: 'rgba(37,99,235,0.2)' }}>
                <motion.div 
                  className="h-full"
                  style={{ width: `${progress}%`, background: 'linear-gradient(90deg, #1d4ed8, #3B82F6)', boxShadow: '0 0 8px rgba(59,130,246,0.7)' }}
                />
              </div>
              <div className="text-[10px] md:text-xs font-mono tracking-widest text-text-gray flex items-center gap-2">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-electric-blue animate-pulse" style={{ boxShadow: '0 0 8px rgba(59,130,246,0.8)' }} />
                {statuses[statusIndex]}
              </div>
            </div>

            {/* Huge numeric ticker */}
            <div className="font-anton text-6xl sm:text-8xl md:text-[12rem] leading-none text-outline-white relative -bottom-2 sm:-bottom-4 md:-bottom-12 select-none tracking-tighter">
              {String(progress).padStart(3, "0")}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
