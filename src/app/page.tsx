"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch issues on mount
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {/* Cinematic entry loader */}
      <Loader onComplete={() => setLoading(false)} />

      {/* Main page content (Revealed after loading completes) */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative min-h-screen bg-bg-solid text-text-white overflow-hidden selection:bg-brand-blue selection:text-white"
          >
            {/* Custom Mouse Tracker */}
            <CustomCursor />

            {/* Navigation Header */}
            <Navbar />

            {/* Portfolio Content Layout */}
            <main className="w-full flex flex-col items-center">
              <Hero />
              <About />
              <TechStack />
              <Projects />
              <Education />
              <Services />
              <Contact />
            </main>

            {/* Footer */}
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
