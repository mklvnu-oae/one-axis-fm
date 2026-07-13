"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface TestimonialItem {
  id: number;
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  initials: string;
  avatarBg: string;
}

export default function Testimonials() {
  const testimonials: TestimonialItem[] = [
    {
      id: 1,
      name: "Rajesh Nair",
      role: "President",
      company: "Prestige Heights Apartment Association",
      rating: 5,
      text: "One Axis transformed our security and housekeeping setup. Their guard team is sharp and polite, and the supervisors conduct surprise audits twice a week. Highly recommended for premium residential gated communities!",
      initials: "RN",
      avatarBg: "bg-blue-600",
    },
    {
      id: 2,
      name: "Dr. Shalini Mehta",
      role: "Chief Operations Officer",
      company: "Apollo Wellness Centre",
      rating: 5,
      text: "We require hospital-grade cleaning compliance. One Axis's housekeeping staff is well-trained, uses safe disinfectants, and maintains excellent logs. Their technical team handles our DG backups and pumps seamlessly.",
      initials: "SM",
      avatarBg: "bg-emerald-600",
    },
    {
      id: 3,
      name: "Aniruddh Sen",
      role: "VP Procurement",
      company: "Nexa Warehouses & LogiParks",
      rating: 5,
      text: "Securing a 2-lakh-sq-ft warehouse requires strict gate logs and round-the-clock patrol. One Axis provided verified, athletic security personnel and heavy floor sweepers. Extremely satisfied with their prompt client support.",
      initials: "AS",
      avatarBg: "bg-orange-600",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-60 h-60 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">
            Client Success
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Trusted by Leaders
          </h3>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600 font-light">
            Read how our facility management solutions support operations for residential societies, health facilities, and corporate hubs.
          </p>
        </div>

        {/* Carousel Slider */}
        <div className="max-w-4xl mx-auto relative px-4">
          <div className="relative min-h-[320px] sm:min-h-[260px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: -10 }}
                transition={{ duration: 0.4 }}
                className="glass-card bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 relative w-full shadow-sm"
              >
                {/* Quote Icon Background */}
                <Quote className="absolute top-6 right-8 w-16 h-16 text-primary/5 pointer-events-none" />

                {/* Testimonial text */}
                <p className="text-slate-700 text-sm sm:text-base md:text-lg font-light italic leading-relaxed mb-8">
                  &ldquo;{testimonials[activeIndex].text}&rdquo;
                </p>

                {/* Client info and stars */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md ${testimonials[activeIndex].avatarBg}`}
                    >
                      {testimonials[activeIndex].initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-primary">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-xs text-slate-400 font-semibold">
                        {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>

                  {/* Star Ratings */}
                  <div className="flex gap-1">
                    {Array.from({ length: testimonials[activeIndex].rating }).map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-primary/10 bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center shadow-sm cursor-pointer transition-all duration-300"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-primary/10 bg-white hover:bg-primary hover:text-white text-primary flex items-center justify-center shadow-sm cursor-pointer transition-all duration-300"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
