"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

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

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card bg-slate-50 hover:bg-white border border-slate-200 rounded-3xl p-8 relative shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/10 pointer-events-none" />
              
              <div className="mb-8 relative z-10">
                {/* Star Ratings */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 mt-auto border-t border-slate-200 pt-6">
                <div
                  className={`w-12 h-12 rounded-2xl flex flex-shrink-0 items-center justify-center text-white font-bold text-sm shadow-inner transition-transform group-hover:rotate-6 ${testimonial.avatarBg}`}
                >
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-primary">
                    {testimonial.name}
                  </h4>
                  <div className="flex flex-col mt-0.5">
                    <span className="text-[11px] text-slate-500 font-medium">{testimonial.role}</span>
                    <span className="text-xs text-secondary font-bold">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
