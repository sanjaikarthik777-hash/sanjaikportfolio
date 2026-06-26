"use client";

import { motion } from "framer-motion";
import { ExternalLink, CheckCircle, Database, Layout, ShieldCheck, Box } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "CAR SHOWROOM MANAGEMENT SYSTEM",
      description: "A web-based platform designed to manage vehicle inventory, customer information, sales tracking, and daily showroom operations.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      features: [
        "Vehicle Inventory Control",
        "Customer Management Profile",
        "Sales & Revenue Tracking",
        "Reporting & Analytics Dashboard",
      ],
      visualType: "showroom",
      github: "https://github.com/sanjaikarthik777-hash/SVcarshowroom",
    },
    {
      id: "02",
      title: "HOSPITAL BOOKING SYSTEM",
      description: "Appointment scheduling platform enabling patients to book consultations and healthcare appointments efficiently.",
      technologies: ["React.js", "Node.js", "MySQL"],
      features: [
        "Dynamic Appointment Scheduling",
        "EHR Patient Records Log",
        "Real-time Doctor Availability",
        "Secure User Authentication",
      ],
      visualType: "hospital",
      github: "https://github.com/sanjaikarthik777-hash/Hospitalbooking",
    },
    {
      id: "03",
      title: "FABRICATION COMPANY MANAGEMENT",
      description: "Management solution for fabrication workflows, customer records, project tracking, and operational monitoring.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      features: [
        "Production Workflow Tracking",
        "Customer Records & Estimates",
        "Real-time Project Monitoring",
        "Resource Analytics Dashboard",
      ],
      visualType: "fabrication",
      github: "https://github.com/sanjaikarthik777-hash/velmuruganindustries",
    },
    {
      id: "04",
      title: "IRON & STEEL MANAGEMENT SYSTEM",
      description: "Inventory, supplier, order, and business management platform for industrial operations.",
      technologies: ["React.js", "Express.js", "MySQL"],
      features: [
        "Raw Material Inventory Control",
        "Supplier Lifecycle Management",
        "B2B Order Processing Flow",
        "Business Financial Reporting",
      ],
      visualType: "steel",
      github: "https://github.com/sanjaikarthik777-hash/jds",
    },
    {
      id: "05",
      title: "LEARNING ACADEMY PLATFORM",
      description: "Educational platform for student enrollment, course management, and learning progress tracking.",
      technologies: ["React.js", "Node.js", "MongoDB"],
      features: [
        "Student Enrollment Portals",
        "Course & Lecture Management",
        "Progress & Grade Tracking",
        "Learning Metrics Dashboard",
      ],
      visualType: "academy",
      github: "https://github.com/sanjaikarthik777-hash/inclusivelearn",
    },
  ];

  // Component to render individual CSS-based mockups for visual excellence
  const renderVisualMockup = (type: string) => {
    switch (type) {
      case "showroom":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-6 flex flex-col justify-between relative overflow-hidden font-mono text-[10px] text-text-gray">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 blur-2xl" style={{ background: 'rgba(37,99,235,0.5)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                <Box size={12} className="text-brand-blue" /> SHOWROOM_DB.SQL
              </span>
              <span className="px-2 py-0.5 bg-brand-blue-glow text-brand-blue border border-brand-border-glow text-[8px]">ACTIVE</span>
            </div>
            
            {/* Inventory table mockup */}
            <div className="flex flex-col gap-2 my-4 flex-grow justify-center">
              <div className="grid grid-cols-4 border-b border-brand-border pb-1 font-semibold text-text-white text-[9px]">
                <span>MODEL</span>
                <span>STOCK</span>
                <span>PRICE</span>
                <span>STATUS</span>
              </div>
              <div className="grid grid-cols-4">
                <span>AMG GT 63</span>
                <span className="text-brand-blue">03</span>
                <span>$149,000</span>
                <span className="text-green-500">AVAILABLE</span>
              </div>
              <div className="grid grid-cols-4">
                <span>PORSCHE 911</span>
                <span className="text-brand-blue">01</span>
                <span>$120,000</span>
                <span className="text-green-500">AVAILABLE</span>
              </div>
              <div className="grid grid-cols-4">
                <span>M8 GRAN COUPE</span>
                <span className="text-text-muted">00</span>
                <span>$130,000</span>
                <span className="text-brand-blue">ORDERED</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-brand-border pt-3 text-[9px] text-text-muted">
              <span>SQL COMPILING STATUS: OK</span>
              <span>QUERY TIME: 0.12ms</span>
            </div>
          </div>
        );
      case "hospital":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-6 flex flex-col justify-between relative overflow-hidden font-sans text-xs">
            <div className="absolute top-1/2 left-1/3 w-32 h-32 opacity-25 blur-3xl rounded-full" style={{ background: 'rgba(37,99,235,0.4)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-brand-blue" /> PATIENT_PORTAL
              </span>
              <span className="text-[10px] font-mono text-text-muted">v1.0.2</span>
            </div>

            {/* Doctor scheduling visual */}
            <div className="my-4 flex flex-col gap-3 flex-grow justify-center">
              <div className="p-3 bg-bg-solid border border-brand-border flex justify-between items-center">
                <div>
                  <div className="font-semibold text-text-white text-xs">Dr. Sarah Connor</div>
                  <div className="text-[9px] text-text-muted font-mono">NEUROLOGY // AVAILABLE</div>
                </div>
                <button className="px-3 py-1 bg-brand-blue text-white text-[10px] font-mono hover:bg-white hover:text-black transition-colors duration-300">BOOK</button>
              </div>
              <div className="p-3 bg-bg-solid border border-brand-border flex justify-between items-center">
                <div>
                  <div className="font-semibold text-text-white text-xs">Dr. Marcus Vance</div>
                  <div className="text-[9px] text-text-muted font-mono">CARDIOLOGY // BUSY</div>
                </div>
                <button className="px-3 py-1 bg-text-muted text-bg-solid text-[10px] font-mono cursor-not-allowed" disabled>FULL</button>
              </div>
            </div>

            <div className="text-[9px] font-mono text-brand-blue flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-electric-blue animate-ping" style={{ boxShadow: '0 0 8px rgba(59,130,246,0.8)' }} />
              PORT 3000 // EXECUTING SECURE AUTHENTICATOR
            </div>
          </div>
        );
      case "fabrication":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-6 flex flex-col justify-between relative overflow-hidden font-mono text-[10px] text-text-gray">
            <div className="absolute bottom-0 right-0 w-28 h-28 opacity-12 blur-2xl rounded-full" style={{ background: 'rgba(37,99,235,0.45)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                <Database size={12} className="text-brand-blue" /> WORKFLOW_MAPPING
              </span>
              <span className="text-brand-blue text-[8px]">MONGODB CLUSTER</span>
            </div>

            {/* Workflow steps pipeline mockup */}
            <div className="my-4 flex flex-col gap-2.5 flex-grow justify-center">
              <div className="flex items-center justify-between">
                <span>[01] INTAKE & SCHEMATICS</span>
                <span className="text-green-500 font-bold">100% COMPLETE</span>
              </div>
              <div className="w-full h-1 bg-brand-border">
                <div className="w-full h-full bg-brand-blue" />
              </div>
              
              <div className="flex items-center justify-between mt-1">
                <span>[02] LASER CUTTING & BENDING</span>
                <span className="text-brand-blue font-bold">75% IN PROGRESS</span>
              </div>
              <div className="w-full h-1 bg-brand-border">
                <div className="w-3/4 h-full bg-brand-blue" />
              </div>

              <div className="flex items-center justify-between mt-1">
                <span>[03] WELDING & FINISHING</span>
                <span className="text-text-muted font-bold">WAITING</span>
              </div>
              <div className="w-full h-1 bg-brand-border">
                <div className="w-0 h-full bg-brand-blue" />
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-brand-border pt-3 text-text-muted text-[8px]">
              <span>ACTIVE WORKFLOWS: 14</span>
              <span>ESTIMATES: GENERATED</span>
            </div>
          </div>
        );
      case "steel":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-6 flex flex-col justify-between relative overflow-hidden font-sans text-xs">
            <div className="absolute top-0 left-0 w-20 h-20 opacity-20 blur-2xl rounded-full" style={{ background: 'rgba(37,99,235,0.5)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                <Layout size={14} className="text-brand-blue" /> METAL_SYS_v2
              </span>
              <span className="px-2 py-0.5 bg-white/5 border border-brand-border font-mono text-[9px]">EXPRESS.JS</span>
            </div>

            {/* Industrial order summary */}
            <div className="my-4 flex flex-col gap-2 flex-grow justify-center font-mono text-[10px]">
              <div className="p-2 border border-brand-border bg-bg-solid flex justify-between">
                <span>ITEM: REBAR GR.60 12mm</span>
                <span className="text-text-white">12.5 TONS</span>
              </div>
              <div className="p-2 border border-brand-border bg-bg-solid flex justify-between">
                <span>ITEM: HOT ROLLED COILS</span>
                <span className="text-text-white">8.2 TONS</span>
              </div>
              <div className="p-2 border border-brand-border bg-bg-solid flex justify-between">
                <span>SUPPLIER: SAIL CORP LTD</span>
                <span className="text-brand-blue">DISPATCHED</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-brand-border pt-3 text-[9px] font-mono text-text-muted">
              <span>STOCK VALUE: $432,950</span>
              <span>ORDERS: 38 PENDING</span>
            </div>
          </div>
        );
      case "academy":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-6 flex flex-col justify-between relative overflow-hidden font-sans text-xs">
            <div className="absolute bottom-0 left-1/3 w-32 h-32 opacity-20 blur-3xl rounded-full" style={{ background: 'rgba(37,99,235,0.35)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                🎓 ACADEMY_CORE
              </span>
              <span className="text-[10px] font-mono text-brand-blue">MONGODB</span>
            </div>

            {/* Course catalog / learning layout */}
            <div className="my-4 flex flex-col gap-2 flex-grow justify-center text-[10px]">
              <div className="flex flex-col gap-1 p-2 bg-bg-solid border border-brand-border">
                <div className="flex justify-between text-text-white font-semibold">
                  <span>Full Stack Dev (React+Node)</span>
                  <span>92%</span>
                </div>
                <div className="w-full h-1 bg-brand-border rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2 bg-bg-solid border border-brand-border">
                <div className="flex justify-between text-text-white font-semibold">
                  <span>Data Structures & Alg.</span>
                  <span>45%</span>
                </div>
                <div className="w-full h-1 bg-brand-border rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue" style={{ width: "45%" }} />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-brand-border pt-3 text-[9px] font-mono text-text-muted">
              <span>TOTAL STUDENTS: 1,420</span>
              <span>SERVER: CLOUD STACK</span>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section
      id="projects"
      className="relative w-full bg-bg-solid py-24 md:py-32 px-6 md:px-12 z-20 border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-20 md:mb-28">
          <span className="text-xs md:text-sm tracking-[0.4em] text-brand-blue font-semibold uppercase">
            SELECTED WORKS
          </span>
          <h2 className="font-anton text-6xl md:text-8xl leading-none text-text-white tracking-tight uppercase">
            FEATURED PROJECTS
          </h2>
        </div>

        {/* Projects List Container */}
        <div className="flex flex-col gap-24 md:gap-36">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                {/* Text Content Column */}
                <motion.div
                  className={`lg:col-span-6 flex flex-col gap-6 ${
                    isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Project ID Tag */}
                  <div className="flex items-center gap-4">
                    <span className="font-anton text-4xl md:text-5xl text-outline-blue font-bold">
                      PROJECT {project.id}
                    </span>
                    <span className="h-[1px] flex-grow bg-brand-border" />
                  </div>

                  {/* Project Title */}
                  <h3 className="font-bebas text-3xl md:text-5xl tracking-wide text-text-white font-bold uppercase leading-tight">
                    {project.title}
                  </h3>

                  {/* Project Description (Limited to 550px for high premium reading layout) */}
                  <p className="font-sans text-sm md:text-base leading-relaxed text-text-gray max-w-[550px]">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-col gap-2 mt-2">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2.5 text-xs text-text-gray font-semibold">
                        <CheckCircle size={14} className="text-brand-blue flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-bg-charcoal border border-brand-border text-[10px] font-mono text-brand-blue tracking-wider"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link */}
                  <div className="mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs tracking-widest font-bold text-text-white hover:text-electric-blue transition-colors duration-300 font-sans uppercase group w-fit"
                    >
                      <span>EXPLORE PROJECT DETAILS</span>
                      <ExternalLink size={14} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    </a>
                  </div>
                </motion.div>

                {/* Graphical Mockup Column */}
                <motion.div
                  className={`lg:col-span-6 h-[320px] md:h-[400px] w-full flex items-center justify-center relative ${
                    isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Electric Blue radial glow behind mockup */}
                  <div
                    className="absolute w-56 h-56 rounded-full opacity-25 select-none blur-2xl z-0 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.55) 0%, rgba(59,130,246,0.2) 50%, transparent 75%)' }}
                  />
                  
                  {/* Decorative background border block */}
                  <div className="absolute inset-4 border border-dashed border-brand-border opacity-20 pointer-events-none z-0" />

                  {/* Visual mockup card wrapper */}
                  <div className="relative z-10 w-full h-[90%] md:h-[85%] hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
                    {renderVisualMockup(project.visualType)}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
