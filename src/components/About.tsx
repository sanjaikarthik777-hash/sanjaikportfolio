"use client";

import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Database, Layout } from "lucide-react";

export default function About() {
  const stats = [
    { label: "Projects Completed", value: "5+", icon: <Briefcase className="text-brand-blue" size={20} /> },
    { label: "Developer Focus", value: "Full Stack", icon: <Layout className="text-brand-blue" size={20} /> },
    { label: "Core Expertise", value: "Frontend & Backend", icon: <Layout className="text-brand-blue" size={20} /> },
    { label: "Storage & APIs", value: "Databases", icon: <Database className="text-brand-blue" size={20} /> },
  ];

  return (
    <section
      id="about"
      className="relative w-full min-h-screen bg-bg-solid py-24 md:py-32 px-6 md:px-12 z-20 flex items-center"
    >
      {/* Background Dot Accent */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Column - Portrait Image & Circle (lg:col-span-5) */}
          <motion.div
            className="lg:col-span-5 flex justify-center relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            {/* Geometric Accent — Electric Blue Glow behind the image */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 w-72 h-72 md:w-96 md:h-96 rounded-full select-none z-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle, rgba(37,99,235,0.5) 0%, rgba(59,130,246,0.2) 45%, transparent 72%)",
                filter: "blur(24px)",
              }}
            />

            {/* Profile Picture Frame */}
            <div className="w-[80vw] h-[100vw] sm:w-[50vw] sm:h-[65vw] lg:w-[26vw] lg:h-[35vw] relative z-10 overflow-hidden grayscale contrast-[1.1] hover:grayscale-0 transition-all duration-[1s] shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-brand-border" style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.8), 0 0 40px rgba(37,99,235,0.15)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/sanjai 2.PNG"
                alt="Sanjai K Profile"
                className="w-full h-full object-cover object-center scale-100 hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
            </div>
            
            {/* Design detail: floating layout coordinates */}
            <div className="absolute bottom-4 left-4 z-20 font-mono text-[8px] text-text-gray tracking-widest bg-black/60 px-3 py-1.5 border border-brand-border">
              SEC_02 // SANJAI_2.PNG
            </div>
          </motion.div>

          {/* Right Column - Content (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-8 order-1 lg:order-2">
            
            {/* Section Title */}
            <div className="flex flex-col gap-2">
              <span className="text-xs md:text-sm tracking-[0.4em] text-brand-blue font-semibold uppercase">
                GET TO KNOW ME
              </span>
              <h2 className="font-anton text-6xl md:text-8xl leading-none text-text-white tracking-tight uppercase">
                ABOUT ME
              </h2>
            </div>

            {/* Content paragraphs (Limited to 550px for high premium reading layout) */}
            <div className="flex flex-col gap-4 text-text-gray text-sm md:text-base leading-relaxed max-w-[550px]">
              <p>
                I am <strong className="text-text-white font-semibold">Sanjai K</strong>, an aspiring Full Stack Developer passionate about building scalable, efficient, and user-friendly web applications. I enjoy transforming ideas into real-world digital solutions through modern web technologies and clean development practices.
              </p>
              <p>
                My expertise spans frontend development, backend architecture, database management, and API integration. I continuously learn emerging technologies and apply them to create impactful solutions that solve practical business challenges.
              </p>
              <p>
                I focus on delivering high-quality applications with excellent performance, responsiveness, and user experience.
              </p>
            </div>

            {/* Academic Card */}
            <motion.div
              className="glass-panel p-6 md:p-8 border-l-[3px] border-l-brand-blue relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-blue-glow border border-brand-border-glow text-brand-blue rounded">
                  <GraduationCap size={24} />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] tracking-[0.2em] font-mono text-brand-blue uppercase font-semibold">
                    CURRENT EDUCATION
                  </span>
                  <h3 className="font-bebas text-2xl tracking-wide text-text-white">
                    BACHELOR OF ENGINEERING (B.E.)
                  </h3>
                  <p className="text-xs tracking-wider text-text-gray font-semibold">
                    Computer Science and Engineering
                  </p>
                  <p className="text-xs text-text-muted mt-2">
                    Akshaya College of Engineering and Technology
                  </p>
                  <p className="text-xs font-mono text-brand-blue mt-1">
                    Expected Graduation: 2028
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6 mt-4">
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="p-5 border border-brand-border bg-bg-charcoal hover:border-brand-border-glow transition-all duration-300 flex flex-col gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * idx }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-sora text-2xl md:text-3xl text-text-white font-bold tracking-tight leading-none">
                      {stat.value}
                    </span>
                    {stat.icon}
                  </div>
                  <span className="text-[11px] md:text-xs tracking-wider text-text-gray uppercase font-sora font-semibold">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
