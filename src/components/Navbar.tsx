"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [hoveredTab, setHoveredTab] = useState<string | null>(null);

  const navItems = [
    { label: "HOME", target: "home" },
    { label: "ABOUT", target: "about" },
    { label: "SKILLS", target: "skills" },
    { label: "PROJECTS", target: "projects" },
    { label: "EDUCATION", target: "education" },
    { label: "CONTACT", target: "contact" },
  ];

  // Track window scroll to add background blur/shadow modifications
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Section spy to highlight active menu item
      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.header
        className={`fixed left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-5xl transition-all duration-300 ${
          scrolled ? "top-4" : "top-6"
        }`}
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
      >
        {/* Liquid Glass Capsule Container */}
        <div 
          className={`w-full px-6 py-2.5 rounded-full border border-white/10 bg-[#0D0D0D]/40 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.65)] flex justify-between items-center relative overflow-hidden transition-all duration-300 ${
            scrolled ? "py-2 bg-[#0D0D0D]/60 border-white/15" : ""
          }`}
        >
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative flex items-center gap-1.5 focus:outline-none z-10 pl-2"
          >
            <span className="font-bebas text-2xl font-bold tracking-wider text-text-white transition-colors duration-300 group-hover:text-brand-red">
              SANJAI K
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1 relative z-10">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                onMouseEnter={() => setHoveredTab(item.target)}
                onMouseLeave={() => setHoveredTab(null)}
                className="group relative px-4 py-2 focus:outline-none rounded-full"
              >
                <span
                  className={`font-sans text-[10px] tracking-[0.2em] font-bold transition-colors duration-300 relative z-10 ${
                    activeSection === item.target ? "text-brand-red" : "text-text-gray group-hover:text-white"
                  }`}
                >
                  {item.label}
                </span>

                {/* Sliding Liquid Glass Capsule Hover Highlight */}
                {hoveredTab === item.target && (
                  <motion.div
                    className="absolute inset-0 bg-white/5 border border-white/5 rounded-full z-0 shadow-inner"
                    layoutId="navbarHoverPill"
                    transition={{ type: "spring", stiffness: 350, damping: 28 }}
                  />
                )}

                {/* Active Section indicator bar */}
                {activeSection === item.target && (
                  <motion.div
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 h-[2.5px] w-5 rounded-full bg-brand-red z-10"
                    layoutId="navbarActiveBar"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>

          {/* Action Button - Let's Talk */}
          <div className="hidden md:block z-10 pr-2">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-6 py-2 overflow-hidden group border border-brand-red bg-transparent font-sans text-[10px] tracking-[0.2em] font-bold text-white rounded-full transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-red -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative z-10 group-hover:text-white transition-colors duration-300">HIRE ME</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-text-white focus:outline-none hover:text-brand-red transition-colors duration-300 z-10"
            aria-label="Open Menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-[#0D0D0D] flex flex-col justify-between p-8"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
          >
            {/* Header within drawer */}
            <div className="flex justify-between items-center">
              <span className="font-bebas text-2xl font-bold tracking-wider text-text-white">
                SANJAI K
              </span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-text-white hover:text-brand-red transition-colors duration-300"
                aria-label="Close Menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex flex-col gap-6 text-left my-auto">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.target}
                  onClick={() => scrollToSection(item.target)}
                  className="font-bebas text-5xl font-bold tracking-wide text-left text-outline-white hover:text-brand-red hover:no-underline transition-colors duration-300 py-2 focus:outline-none block"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.3 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>

            {/* Drawer Footer */}
            <div className="flex justify-between items-center text-xs tracking-widest text-text-muted">
              <div>© 2025 SANJAI K</div>
              <div className="flex gap-4">
                <a href="https://github.com/sanjaikarthik777-hash" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red">GH</a>
                <a href="https://www.linkedin.com/in/sanjai-k-92a133345?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noopener noreferrer" className="hover:text-brand-red">LI</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
