"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { label: "HOME", target: "home" },
    { label: "ABOUT", target: "about" },
    { label: "SKILLS", target: "skills" },
    { label: "PROJECTS", target: "projects" },
    { label: "EDUCATION", target: "education" },
    { label: "CONTACT", target: "contact" },
  ];

  // Track window scroll to add background blur/shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

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
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "py-4 bg-bg-solid/80 backdrop-blur-md border-b border-brand-border" : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <button
            onClick={() => scrollToSection("home")}
            className="group relative flex items-center gap-1.5 focus:outline-none"
          >
            <span className="font-bebas text-2xl md:text-3xl font-bold tracking-wider text-text-white transition-colors duration-300 group-hover:text-brand-red">
              SANJAI K
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red animate-pulse" />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToSection(item.target)}
                className="group relative py-1 focus:outline-none"
              >
                <span
                  className={`font-sans text-xs tracking-[0.2em] font-semibold transition-colors duration-300 ${
                    activeSection === item.target ? "text-brand-red" : "text-text-gray group-hover:text-text-white"
                  }`}
                >
                  {item.label}
                </span>
                {/* Underline indicators */}
                {activeSection === item.target && (
                  <motion.span
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-brand-red"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-red scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100" />
              </button>
            ))}
          </nav>

          {/* Action Button - Let's Talk */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection("contact")}
              className="relative px-5 py-2.5 overflow-hidden group border border-brand-red bg-transparent font-sans text-xs tracking-widest font-semibold hover:text-white transition-all duration-300"
            >
              <span className="absolute inset-0 w-full h-full bg-brand-red -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
              <span className="relative z-10">HIRE ME</span>
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="md:hidden p-2 text-text-white focus:outline-none hover:text-brand-red transition-colors duration-300"
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-bg-solid flex flex-col justify-between p-8"
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
                <X size={24} />
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
