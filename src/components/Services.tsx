"use client";

import { motion } from "framer-motion";
import React from "react";
import { Code, Layout, Server, Database, Globe, Layers } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "FULL STACK DEVELOPMENT",
      description: "End-to-end frontend + backend application development with robust architectures and unified state management.",
      icon: <Layers className="text-brand-blue" size={24} />,
    },
    {
      id: "02",
      title: "FRONTEND DEVELOPMENT",
      description: "Modern, dynamic and responsive user interfaces created using React.js, Next.js, and high-fidelity Tailwind layouts.",
      icon: <Layout className="text-brand-blue" size={24} />,
    },
    {
      id: "03",
      title: "BACKEND DEVELOPMENT",
      description: "Scalable server-side logic, custom database pipelines, and secure servers engineered with Node.js and Express.",
      icon: <Server className="text-brand-blue" size={24} />,
    },
    {
      id: "04",
      title: "DATABASE DESIGN",
      description: "Efficient, relational MySQL query architectures and flexible, document-oriented MongoDB schema design systems.",
      icon: <Database className="text-brand-blue" size={24} />,
    },
    {
      id: "05",
      title: "API DEVELOPMENT",
      description: "Developing robust, RESTful endpoints and API microservices with clean response codes and integrated validations.",
      icon: <Code className="text-brand-blue" size={24} />,
    },
    {
      id: "06",
      title: "WEB APPLICATION DEVELOPMENT",
      description: "Fully customized, highly secure business web applications tailored to streamline operations and daily workflows.",
      icon: <Globe className="text-brand-blue" size={24} />,
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
      id="services"
      className="relative w-full bg-bg-solid py-24 md:py-32 px-6 md:px-12 z-20 border-t border-brand-border"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-16 md:mb-20">
          <span className="text-xs md:text-sm tracking-[0.4em] text-brand-blue font-semibold uppercase">
            SERVICES OFFERED
          </span>
          <h2 className="font-anton text-6xl md:text-8xl leading-none text-text-white tracking-tight uppercase">
            WHAT I DO
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="glow-card relative bg-bg-charcoal p-8 border border-brand-border hover:border-brand-border-glow transition-colors duration-500 overflow-hidden flex flex-col justify-between h-[280px] z-10"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onMouseMove={handleMouseMove}
            >
              {/* Header inside Card */}
              <div className="relative z-10">
                <div className="flex justify-between items-center mb-6">
                  <div className="p-3 bg-brand-blue-glow border border-brand-border rounded">
                    {service.icon}
                  </div>
                  <span className="font-bebas text-3xl font-bold text-outline-blue">
                    {service.id}
                  </span>
                </div>
                
                {/* Service Title */}
                <h3 className="font-bebas text-2xl tracking-wide text-text-white mb-3">
                  {service.title}
                </h3>
              </div>

              {/* Service Description */}
              <p className="font-sans text-xs md:text-sm leading-relaxed text-text-gray relative z-10">
                {service.description}
              </p>

              {/* Graphical flare */}
              <div className="absolute right-0 top-0 w-16 h-16 bg-brand-blue-glow rounded-full blur-[30px] opacity-10 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
