"use client";

import { motion } from "framer-motion";
import React, { useRef } from "react";
import { Cpu, Server, Database, Wrench, Globe } from "lucide-react";

export default function TechStack() {
  const stackCategories = [
    {
      title: "FRONTEND DEVELOPMENT",
      icon: <Cpu className="text-brand-red" size={24} />,
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"],
    },
    {
      title: "BACKEND ARCHITECTURE",
      icon: <Server className="text-brand-red" size={24} />,
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "DATABASE MANAGEMENT",
      icon: <Database className="text-brand-red" size={24} />,
      skills: ["MySQL", "MongoDB"],
    },
    {
      title: "DEVELOPER TOOLS",
      icon: <Wrench className="text-brand-red" size={24} />,
      skills: ["Git", "GitHub", "VS Code", "Postman"],
    },
    {
      title: "DEPLOYMENT & HOSTING",
      icon: <Globe className="text-brand-red" size={24} />,
      skills: ["Vercel", "Netlify", "Render"],
    },
  ];

  // Mouse move handler to update coordinates for radial hover glow
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-bg-solid py-24 md:py-32 px-6 md:px-12 z-20 flex items-center border-t border-brand-border"
    >
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 md:mb-20">
          <span className="text-xs md:text-sm tracking-[0.4em] text-brand-red font-semibold uppercase">
            TECHNICAL REPERTOIRE
          </span>
          <h2 className="font-anton text-6xl md:text-8xl leading-none text-text-white tracking-tight uppercase">
            MY TECH STACK
          </h2>
        </div>

        {/* Stack Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {stackCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="glow-card relative bg-bg-charcoal p-8 border border-brand-border hover:border-brand-border-glow transition-colors duration-500 overflow-hidden flex flex-col justify-between h-[320px] z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseMove={handleMouseMove}
            >
              {/* Top Row - Category Title & Icon */}
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-brand-red-glow border border-brand-border rounded">
                    {category.icon}
                  </div>
                  <span className="font-mono text-[9px] text-text-muted tracking-[0.2em] font-semibold">
                    [ 0{index + 1} / STACK ]
                  </span>
                </div>
                <h3 className="font-bebas text-2xl tracking-wide text-text-white mb-4">
                  {category.title}
                </h3>
              </div>

              {/* Skills Chips Container */}
              <div className="flex flex-wrap gap-2.5 relative z-10 mt-auto">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-bg-solid border border-brand-border text-xs text-text-gray font-mono hover:text-brand-red hover:border-brand-border-glow transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Glass subtle light reflection */}
              <div className="absolute right-0 bottom-0 w-24 h-24 bg-brand-red-glow rounded-full blur-[40px] opacity-20 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
