"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { Github, Linkedin, Mail, Send, CheckCircle2 } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen bg-bg-solid py-24 md:py-32 px-6 md:px-12 z-20 flex items-center border-t border-brand-border"
    >
      {/* Background Dot Accent */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Editorial Typography & Links (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-xs md:text-sm tracking-[0.4em] text-brand-red font-semibold uppercase">
                GET IN TOUCH
              </span>
              <h2 className="font-anton text-6xl md:text-8xl leading-none text-text-white tracking-tight uppercase">
                LET'S BUILD<br />SOMETHING<br />AMAZING
              </h2>
            </div>

            <p className="font-sans text-sm md:text-base leading-relaxed text-text-gray max-w-md">
              I'm open to internships, freelance opportunities, collaborations, and exciting development projects. Have an idea? Get in touch and let's create a digital solution together.
            </p>

            {/* Quick Contact Info */}
            <div className="flex flex-col gap-4 mt-4 font-mono text-xs tracking-wider">
              <div className="flex items-center gap-3">
                <span className="text-brand-red font-bold">EMAIL:</span>
                <a href="mailto:sanjaikarthik777@gmail.com" className="text-text-gray hover:text-white transition-colors duration-300">
                  sanjaikarthik777@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-red font-bold">PHONE:</span>
                <a href="tel:+919943567691" className="text-text-gray hover:text-white transition-colors duration-300">
                  +91 99435 67691
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-brand-red font-bold">LOC:</span>
                <span className="text-text-gray">Coimbatore, Tamil Nadu, India</span>
              </div>
            </div>

            {/* Social Links Grid */}
            <div className="flex gap-4 mt-2">
              <motion.a
                href="https://github.com/sanjaikarthik777-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-bg-charcoal border border-brand-border text-text-gray hover:text-brand-red hover:border-brand-border-glow transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <Github size={18} />
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/sanjai-k-92a133345?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-bg-charcoal border border-brand-border text-text-gray hover:text-brand-red hover:border-brand-border-glow transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <Linkedin size={18} />
              </motion.a>
              <motion.a
                href="mailto:sanjaikarthik777@gmail.com"
                className="p-3 bg-bg-charcoal border border-brand-border text-text-gray hover:text-brand-red hover:border-brand-border-glow transition-all duration-300"
                whileHover={{ y: -4 }}
              >
                <Mail size={18} />
              </motion.a>
            </div>
          </div>

          {/* Right Column: Contact Form (lg:col-span-7) */}
          <motion.div
            className="lg:col-span-7 w-full bg-bg-charcoal p-8 md:p-12 border border-brand-border shadow-2xl relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Glow line inside */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-brand-red" />

            {submitted ? (
              <motion.div
                className="flex flex-col items-center justify-center text-center py-16 gap-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div className="p-4 bg-brand-red-glow border border-brand-border-glow text-brand-red rounded-full">
                  <CheckCircle2 size={40} className="animate-bounce" />
                </div>
                <h3 className="font-bebas text-3xl text-text-white tracking-wide">
                  MESSAGE SENT SUCCESSFULLY!
                </h3>
                <p className="text-xs text-text-gray font-mono max-w-sm">
                  Thank you for reaching out. I have received your request and will respond within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 px-6 py-3 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white font-mono text-[10px] tracking-widest transition-all duration-300"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                
                {/* Form Heading */}
                <h3 className="font-bebas text-2xl tracking-wide text-text-white border-b border-brand-border pb-4 uppercase">
                  DROP A MESSAGE
                </h3>

                {/* Name Input */}
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="name" className="text-[10px] font-mono tracking-widest text-text-gray uppercase font-semibold">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent border-b border-brand-border focus:border-brand-red py-2.5 text-sm text-text-white outline-none transition-colors duration-300 font-sans"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Input */}
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="email" className="text-[10px] font-mono tracking-widest text-text-gray uppercase font-semibold">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent border-b border-brand-border focus:border-brand-red py-2.5 text-sm text-text-white outline-none transition-colors duration-300 font-sans"
                    placeholder="Enter your email address"
                  />
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2 relative">
                  <label htmlFor="message" className="text-[10px] font-mono tracking-widest text-text-gray uppercase font-semibold">
                    YOUR MESSAGE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent border border-brand-border focus:border-brand-red p-3 text-sm text-text-white outline-none transition-colors duration-300 font-sans resize-none"
                    placeholder="Write your message here..."
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full relative py-4 overflow-hidden group border border-brand-red bg-brand-red font-sans text-xs tracking-[0.2em] font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span className="absolute inset-0 w-full h-full bg-bg-solid -translate-x-full transition-transform duration-300 ease-out group-hover:translate-x-0" />
                  <span className="relative z-10 flex items-center gap-2 group-hover:text-brand-red transition-colors duration-300 uppercase">
                    {loading ? "SENDING..." : (
                      <>
                        <span>SEND MESSAGE</span>
                        <Send size={12} />
                      </>
                    )}
                  </span>
                </button>

              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
