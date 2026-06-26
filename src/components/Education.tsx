"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, MapPin, Award, Database } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      className="relative w-full bg-bg-solid py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 z-20 overflow-hidden border-t border-brand-border"
    >
      {/* Background Dot Accent */}
      <div className="absolute inset-0 bg-dot-pattern opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-12 sm:mb-16 md:mb-20">
          <span className="text-xs md:text-sm tracking-[0.4em] text-brand-blue font-semibold uppercase">
            ACADEMIC PATHWAY
          </span>
          <h2 className="font-anton text-5xl sm:text-6xl md:text-8xl leading-none text-text-white tracking-tight uppercase">
            MY EDUCATION
          </h2>
        </div>

        {/* Layout: Grid Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20 items-start">
          
          {/* Left Column: Timeline details (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-center gap-8">
            
            {/* Timeline Element */}
            <motion.div
              className="relative pl-6 sm:pl-8 md:pl-12 border-l-2 border-brand-blue py-4 flex flex-col gap-5 sm:gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Timeline Indicator Dot */}
              <div className="absolute -left-[9px] top-5 w-4 h-4 rounded-full bg-brand-blue border-4 border-bg-solid ring-4 ring-brand-blue-glow" />

              {/* Title & Dates */}
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl text-text-white tracking-wide font-bold leading-tight">
                    BACHELOR OF ENGINEERING (B.E.)
                  </h3>
                  <span className="font-sans text-sm md:text-base font-semibold text-brand-blue">
                    Computer Science and Engineering
                  </span>
                </div>
                {/* Year Label Tag */}
                <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-blue-glow border border-brand-border-glow text-brand-blue text-xs font-mono w-fit font-bold">
                  <Calendar size={12} />
                  <span>2024 — 2028</span>
                </div>
              </div>

              {/* Institution */}
              <div className="flex flex-col gap-1.5 text-xs md:text-sm text-text-gray">
                <div className="flex items-start sm:items-center gap-2">
                  <MapPin size={14} className="text-text-muted flex-shrink-0 mt-0.5 sm:mt-0" />
                  <span className="font-semibold text-text-white">Akshaya College of Engineering and Technology</span>
                </div>
                <div className="text-text-muted ml-5 font-semibold">Coimbatore, Tamil Nadu, India</div>
              </div>

              {/* Description */}
              <p className="font-sans text-sm md:text-base leading-relaxed text-text-gray">
                Developing strong foundations in software engineering, web technologies, databases, algorithms, and modern application development. Active focus on full stack frameworks, database designs, and constructing performant client-server applications.
              </p>

              {/* Core Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                <div className="p-3 sm:p-4 border border-brand-border bg-bg-charcoal flex gap-2.5 sm:gap-3 items-center">
                  <BookOpen size={15} className="text-brand-blue flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-text-gray font-mono font-semibold">ALGORITHMS & DATA STRUCTURES</span>
                </div>
                <div className="p-3 sm:p-4 border border-brand-border bg-bg-charcoal flex gap-2.5 sm:gap-3 items-center">
                  <Database size={15} className="text-brand-blue flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-text-gray font-mono font-semibold">DATABASE MANAGEMENT SYSTEMS</span>
                </div>
                <div className="p-3 sm:p-4 border border-brand-border bg-bg-charcoal flex gap-2.5 sm:gap-3 items-center">
                  <Award size={15} className="text-brand-blue flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-text-gray font-mono font-semibold">WEB ARCHITECTURE & APIS</span>
                </div>
                <div className="p-3 sm:p-4 border border-brand-border bg-bg-charcoal flex gap-2.5 sm:gap-3 items-center">
                  <BookOpen size={15} className="text-brand-blue flex-shrink-0" />
                  <span className="text-[10px] sm:text-xs text-text-gray font-mono font-semibold">SOFTWARE ENGINEERING CONCEPTS</span>
                </div>
              </div>

            </motion.div>
          </div>

          {/* Right Column: Portrait (lg:col-span-5) — hidden on mobile to avoid cramping */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 items-center justify-center relative overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Geometric Accent — Electric Blue Glow */}
            <div
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 w-64 h-64 rounded-full select-none z-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(37,99,235,0.55) 0%, rgba(59,130,246,0.2) 45%, transparent 72%)",
                filter: "blur(22px)",
              }}
            />

            {/* Structured Image block */}
            <div className="w-full max-w-[320px] xl:max-w-[360px] h-[420px] xl:h-[480px] border border-brand-border grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-[1.2s] relative z-10 shadow-2xl overflow-hidden bg-bg-charcoal">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sanjai 3.jpeg"
                alt="Sanjai K Academic Study Layout"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[1.5s]"
              />

              {/* Graphic magazine label */}
              <div className="absolute top-4 right-4 px-3 py-1 font-mono text-[9px] text-white tracking-widest z-20" style={{ background: 'linear-gradient(135deg, #1d4ed8, #2563EB)' }}>
                EDUCATION ISSUE // 2025
              </div>
            </div>
            
            {/* Dashed outer border card */}
            <div className="absolute inset-x-4 inset-y-8 border border-dashed border-brand-border opacity-25 pointer-events-none z-0" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
