"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Home,
  HeartPulse,
  GraduationCap,
  Package,
  Factory,
  Hotel,
  Store,
  Building2,
} from "lucide-react";
import SectionCTA from "./SectionCTA";

interface IndustryItem {
  name: string;
  icon: React.ElementType;
  description: string;
}

export default function Industries() {
  const industries: IndustryItem[] = [
    {
      name: "Corporate Offices",
      icon: Briefcase,
      description: "Pristine desk cleaning, pantry support, and professional security matching MNC requirements.",
    },
    {
      name: "Apartments & Gated Communities",
      icon: Home,
      description: "24/7 security patrolling, perimeter guards, common area housekeeping, and plumbing support.",
    },
    {
      name: "Hospitals & Clinics",
      icon: HeartPulse,
      description: "Highly sanitized cleanroom environment cleaning and strict disinfection safety protocols.",
    },
    {
      name: "Schools & Colleges",
      icon: GraduationCap,
      description: "Safe educational premises, reliable washroom cleaning, and child-safe pest management.",
    },
    {
      name: "Warehouses & Logistics",
      icon: Package,
      description: "Heavy-duty sweeping, round-the-clock entry/exit security tracking, and rodent control.",
    },
    {
      name: "Manufacturing Units",
      icon: Factory,
      description: "Industrial-grade cleaning, skilled machine area sweepers, and strict safety equipment protocols.",
    },
    {
      name: "Hotels & Hospitality",
      icon: Hotel,
      description: "Bespoke banquet cleaning support, supplementary staff, and premium glass cleaning.",
    },
    {
      name: "Retail Stores & Malls",
      icon: Store,
      description: "Spotless retail floors, glass facade maintenance, and security crowd control.",
    },
    {
      name: "Commercial Buildings",
      icon: Building2,
      description: "Façade cleaning, elevator operation support, sewage pump checking, and common area upkeep.",
    },
  ];

  return (
    <section id="industries" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">
            Sectors We Support
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Industries We Serve
          </h3>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600 font-light">
            We adapt our training modules, cleaning chemicals, and security protocols to match the unique compliance standards of each sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, index) => {
            const IndIcon = ind.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="glass-card bg-slate-50/50 hover:bg-white p-6 rounded-2xl border border-slate-100 flex gap-4 items-start cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-sm transition-transform duration-300 group-hover:scale-105">
                  <IndIcon className="w-6 h-6 text-white" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-base font-bold text-primary">{ind.name}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">
                    {ind.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
      <div className="relative z-20">
        <SectionCTA />
      </div>
    </section>
  );
}
