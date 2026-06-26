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
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-mono text-[10px] text-text-gray">
            <div className="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 blur-2xl" style={{ background: 'rgba(37,99,235,0.5)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                <Box size={12} className="text-brand-blue flex-shrink-0" /> <span className="truncate">SHOWROOM_DB.SQL</span>
              </span>
              <span className="px-2 py-0.5 bg-brand-blue-glow text-brand-blue border border-brand-border-glow text-[8px] flex-shrink-0 ml-2">ACTIVE</span>
            </div>
            
            {/* Inventory table mockup */}
            <div className="flex flex-col gap-1.5 my-3 flex-grow justify-center overflow-hidden">
              <div className="grid grid-cols-4 border-b border-brand-border pb-1 font-semibold text-text-white text-[8px] sm:text-[9px]">
                <span>MODEL</span>
                <span>STOCK</span>
                <span>PRICE</span>
                <span>STATUS</span>
              </div>
              <div className="grid grid-cols-4 text-[8px] sm:text-[9px]">
                <span className="truncate">AMG GT 63</span>
                <span className="text-brand-blue">03</span>
                <span>$149K</span>
                <span className="text-green-500">AVAIL</span>
              </div>
              <div className="grid grid-cols-4 text-[8px] sm:text-[9px]">
                <span className="truncate">911 TURBO</span>
                <span className="text-brand-blue">01</span>
                <span>$120K</span>
                <span className="text-green-500">AVAIL</span>
              </div>
              <div className="grid grid-cols-4 text-[8px] sm:text-[9px]">
                <span className="truncate">M8 GRAN</span>
                <span className="text-text-muted">00</span>
                <span>$130K</span>
                <span className="text-brand-blue">ORDERED</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-brand-border pt-3 text-[8px] sm:text-[9px] text-text-muted">
              <span>SQL STATUS: OK</span>
              <span>0.12ms</span>
            </div>
          </div>
        );
      case "hospital":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans text-xs">
            <div className="absolute top-1/2 left-1/3 w-32 h-32 opacity-25 blur-3xl rounded-full" style={{ background: 'rgba(37,99,235,0.4)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                <ShieldCheck size={13} className="text-brand-blue flex-shrink-0" /> <span className="truncate">PATIENT_PORTAL</span>
              </span>
              <span className="text-[9px] font-mono text-text-muted flex-shrink-0 ml-2">v1.0.2</span>
            </div>

            {/* Doctor scheduling visual */}
            <div className="my-3 flex flex-col gap-2.5 flex-grow justify-center">
              <div className="p-2.5 sm:p-3 bg-bg-solid border border-brand-border flex justify-between items-center gap-2">
                <div className="min-w-0">
                  <div className="font-semibold text-text-white text-[10px] sm:text-xs truncate">Dr. Sarah Connor</div>
                  <div className="text-[8px] sm:text-[9px] text-text-muted font-mono">NEUROLOGY // AVAILABLE</div>
                </div>
                <button className="px-2 sm:px-3 py-1 bg-brand-blue text-white text-[9px] sm:text-[10px] font-mono flex-shrink-0">BOOK</button>
              </div>
              <div className="p-2.5 sm:p-3 bg-bg-solid border border-brand-border flex justify-between items-center gap-2">
                <div className="min-w-0">
                  <div className="font-semibold text-text-white text-[10px] sm:text-xs truncate">Dr. Marcus Vance</div>
                  <div className="text-[8px] sm:text-[9px] text-text-muted font-mono">CARDIOLOGY // BUSY</div>
                </div>
                <button className="px-2 sm:px-3 py-1 bg-text-muted text-bg-solid text-[9px] sm:text-[10px] font-mono cursor-not-allowed flex-shrink-0" disabled>FULL</button>
              </div>
            </div>

            <div className="text-[8px] sm:text-[9px] font-mono text-brand-blue flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue animate-ping flex-shrink-0" style={{ boxShadow: '0 0 8px rgba(59,130,246,0.8)' }} />
              <span className="truncate">PORT 3000 // SECURE AUTH</span>
            </div>
          </div>
        );
      case "fabrication":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-mono text-[10px] text-text-gray">
            <div className="absolute bottom-0 right-0 w-28 h-28 opacity-12 blur-2xl rounded-full" style={{ background: 'rgba(37,99,235,0.45)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                <Database size={12} className="text-brand-blue flex-shrink-0" /> <span className="truncate">WORKFLOW_MAPPING</span>
              </span>
              <span className="text-brand-blue text-[8px] flex-shrink-0 ml-2">MONGODB</span>
            </div>

            {/* Workflow steps pipeline mockup */}
            <div className="my-3 flex flex-col gap-2 flex-grow justify-center">
              <div className="flex items-center justify-between gap-2 text-[8px] sm:text-[9px]">
                <span className="truncate">[01] INTAKE & SCHEMATICS</span>
                <span className="text-green-500 font-bold flex-shrink-0">100%</span>
              </div>
              <div className="w-full h-1 bg-brand-border">
                <div className="w-full h-full bg-brand-blue" />
              </div>
              
              <div className="flex items-center justify-between gap-2 mt-1 text-[8px] sm:text-[9px]">
                <span className="truncate">[02] CUTTING & BENDING</span>
                <span className="text-brand-blue font-bold flex-shrink-0">75%</span>
              </div>
              <div className="w-full h-1 bg-brand-border">
                <div className="w-3/4 h-full bg-brand-blue" />
              </div>

              <div className="flex items-center justify-between gap-2 mt-1 text-[8px] sm:text-[9px]">
                <span className="truncate">[03] WELDING & FINISHING</span>
                <span className="text-text-muted font-bold flex-shrink-0">WAITING</span>
              </div>
              <div className="w-full h-1 bg-brand-border">
                <div className="w-0 h-full bg-brand-blue" />
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-brand-border pt-3 text-text-muted text-[8px]">
              <span>WORKFLOWS: 14</span>
              <span>ESTIMATES: OK</span>
            </div>
          </div>
        );
      case "steel":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans text-xs">
            <div className="absolute top-0 left-0 w-20 h-20 opacity-20 blur-2xl rounded-full" style={{ background: 'rgba(37,99,235,0.5)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                <Layout size={13} className="text-brand-blue flex-shrink-0" /> <span className="truncate">METAL_SYS_v2</span>
              </span>
              <span className="px-2 py-0.5 bg-white/5 border border-brand-border font-mono text-[8px] flex-shrink-0 ml-2">EXPRESS</span>
            </div>

            {/* Industrial order summary */}
            <div className="my-3 flex flex-col gap-1.5 flex-grow justify-center font-mono text-[9px] sm:text-[10px]">
              <div className="p-2 border border-brand-border bg-bg-solid flex justify-between gap-2">
                <span className="truncate">REBAR GR.60 12mm</span>
                <span className="text-text-white flex-shrink-0">12.5 T</span>
              </div>
              <div className="p-2 border border-brand-border bg-bg-solid flex justify-between gap-2">
                <span className="truncate">HOT ROLLED COILS</span>
                <span className="text-text-white flex-shrink-0">8.2 T</span>
              </div>
              <div className="p-2 border border-brand-border bg-bg-solid flex justify-between gap-2">
                <span className="truncate">SAIL CORP LTD</span>
                <span className="text-brand-blue flex-shrink-0">DISPATCHED</span>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-brand-border pt-3 text-[8px] sm:text-[9px] font-mono text-text-muted">
              <span>$432,950</span>
              <span>38 PENDING</span>
            </div>
          </div>
        );
      case "academy":
        return (
          <div className="w-full h-full bg-bg-charcoal border border-brand-border rounded-lg p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden font-sans text-xs">
            <div className="absolute bottom-0 left-1/3 w-32 h-32 opacity-20 blur-3xl rounded-full" style={{ background: 'rgba(37,99,235,0.35)' }} />
            <div className="flex justify-between items-center border-b border-brand-border pb-3">
              <span className="text-text-white font-semibold flex items-center gap-1.5">
                🎓 <span className="truncate">ACADEMY_CORE</span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-mono text-brand-blue flex-shrink-0 ml-2">MONGODB</span>
            </div>

            {/* Course catalog */}
            <div className="my-3 flex flex-col gap-2 flex-grow justify-center text-[9px] sm:text-[10px]">
              <div className="flex flex-col gap-1 p-2 bg-bg-solid border border-brand-border">
                <div className="flex justify-between text-text-white font-semibold gap-2">
                  <span className="truncate">Full Stack Dev (React+Node)</span>
                  <span className="flex-shrink-0">92%</span>
                </div>
                <div className="w-full h-1 bg-brand-border rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue" style={{ width: "92%" }} />
                </div>
              </div>
              <div className="flex flex-col gap-1 p-2 bg-bg-solid border border-brand-border">
                <div className="flex justify-between text-text-white font-semibold gap-2">
                  <span className="truncate">Data Structures & Alg.</span>
                  <span className="flex-shrink-0">45%</span>
                </div>
                <div className="w-full h-1 bg-brand-border rounded-full overflow-hidden">
                  <div className="h-full bg-brand-blue" style={{ width: "45%" }} />
                </div>
              </div>
            </div>

            <div className="flex justify-between items-center border-t border-brand-border pt-3 text-[8px] sm:text-[9px] font-mono text-text-muted">
              <span>1,420 STUDENTS</span>
              <span>CLOUD STACK</span>
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
      className="relative w-full bg-bg-solid py-20 sm:py-24 md:py-32 px-5 sm:px-8 md:px-12 z-20 border-t border-brand-border"
    >
      <div className="max-w-7xl mx-auto w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-2 mb-14 sm:mb-20 md:mb-28">
          <span className="text-xs md:text-sm tracking-[0.4em] text-brand-blue font-semibold uppercase">
            SELECTED WORKS
          </span>
          <h2 className="font-anton text-5xl sm:text-6xl md:text-8xl leading-none text-text-white tracking-tight uppercase">
            FEATURED PROJECTS
          </h2>
        </div>

        {/* Projects List Container */}
        <div className="flex flex-col gap-16 sm:gap-24 md:gap-36">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-20 items-center"
              >
                {/* Text Content Column */}
                <motion.div
                  className={`lg:col-span-6 flex flex-col gap-5 sm:gap-6 ${
                    isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Project ID Tag */}
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span className="font-anton text-3xl sm:text-4xl md:text-5xl text-outline-blue font-bold whitespace-nowrap">
                      PROJECT {project.id}
                    </span>
                    <span className="h-[1px] flex-grow bg-brand-border" />
                  </div>

                  {/* Project Title */}
                  <h3 className="font-bebas text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wide text-text-white font-bold uppercase leading-tight">
                    {project.title}
                  </h3>

                  {/* Project Description */}
                  <p className="font-sans text-sm md:text-base leading-relaxed text-text-gray">
                    {project.description}
                  </p>

                  {/* Features List */}
                  <div className="flex flex-col gap-2 mt-1">
                    {project.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2 sm:gap-2.5 text-xs text-text-gray font-semibold">
                        <CheckCircle size={13} className="text-brand-blue flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mt-1">
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
                  <div className="mt-2 sm:mt-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs tracking-widest font-bold text-text-white hover:text-electric-blue transition-colors duration-300 font-sans uppercase group w-fit"
                    >
                      <span>EXPLORE PROJECT DETAILS</span>
                      <ExternalLink size={13} className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300 flex-shrink-0" />
                    </a>
                  </div>
                </motion.div>

                {/* Graphical Mockup Column */}
                <motion.div
                  className={`lg:col-span-6 h-[260px] sm:h-[320px] md:h-[380px] w-full flex items-center justify-center relative ${
                    isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                  }`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7 }}
                >
                  {/* Electric Blue radial glow behind mockup */}
                  <div
                    className="absolute w-40 sm:w-56 h-40 sm:h-56 rounded-full opacity-25 select-none blur-2xl z-0 pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(37,99,235,0.55) 0%, rgba(59,130,246,0.2) 50%, transparent 75%)' }}
                  />
                  
                  {/* Decorative background border block */}
                  <div className="absolute inset-3 sm:inset-4 border border-dashed border-brand-border opacity-20 pointer-events-none z-0" />

                  {/* Visual mockup card wrapper */}
                  <div className="relative z-10 w-full h-[90%] hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
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
