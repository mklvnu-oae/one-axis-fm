"use client";

import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Calendar, ShieldCheck, ClipboardCheck, Clock } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const [particles, setParticles] = useState<Array<{ width: string, height: string, top: string, left: string, duration: number }>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setParticles(
      [...Array(20)].map(() => ({
        width: Math.random() * 6 + 2 + "px",
        height: Math.random() * 6 + 2 + "px",
        top: Math.random() * 100 + "%",
        left: Math.random() * 100 + "%",
        duration: Math.random() * 4 + 3,
      }))
    );
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };


  return (
    <section
      id="home"
      className="relative min-h-[95vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-[#030712] text-white z-10"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/hero-bg.jpg"
          alt="One Axis Corporate Building Facility"
          fill
          priority
          className="object-cover object-center opacity-30 select-none pointer-events-none"
        />
        {/* Dual radial gradients from reference */}
        <div 
          className="absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 55%, rgba(15, 118, 110, 0.4) 0%, transparent 60%), radial-gradient(circle at 90% 20%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)"
          }}
        />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/20"
            style={{ width: p.width, height: p.height, top: p.top, left: p.left }}
            animate={{ y: [0, -30, 0], opacity: [0.1, 0.6, 0.1] }}
            transition={{ duration: p.duration, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero-glass-card fm-glass shimmer-card max-w-4xl mx-auto text-center p-8 sm:p-12 lg:p-16 rounded-[30px] flex flex-col gap-8 relative overflow-hidden"
          style={{
            background: "linear-gradient(145deg, rgba(15, 118, 110, 0.2) 0%, rgba(15, 23, 42, 0.35) 100%)",
            borderColor: "rgba(249, 115, 22, 0.25)"
          }}
        >
          {/* Tagline Badge */}
          <motion.div
            variants={itemVariants}
            className="hero-badge mx-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F97316] bg-[#F97316]/10 border border-[#F97316]/20 px-4 py-2 rounded-full"
          >
            We Manage. You Focus.
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.15]"
          >
            Professional <br />
            <span className="text-gradient">Facility Management</span> <br />
            Services
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg lg:text-xl text-white/85 font-light leading-relaxed max-w-2xl mx-auto"
          >
            Reliable manpower and facility management solutions for businesses, apartments,
            hospitals, educational institutions, industries, and commercial properties.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-2"
          >
            <button
              onClick={() => handleScrollTo("contact")}
              className="btn btn-blue w-full sm:w-auto"
            >
              Request a Free Quote
              <ArrowRight className="w-4 h-4 ml-1" />
            </button>
            <button
              onClick={() => handleScrollTo("services")}
              className="btn btn-orange w-full sm:w-auto"
            >
              Explore Services
              <Calendar className="w-4 h-4 ml-1" />
            </button>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center items-center gap-4 sm:gap-8 mt-6 pt-6 border-t border-white/10"
          >
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              Verified Staff
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <ClipboardCheck className="w-4 h-4 text-emerald-400" />
              Free Site Survey
            </div>
            <div className="flex items-center gap-2 text-white/80 text-xs sm:text-sm font-medium">
              <Clock className="w-4 h-4 text-emerald-400" />
              24x7 Support
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
