"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Shield,
  Wrench,
  Bug,
  Building,
  ClipboardList,
  Check,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";

interface ServiceItem {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  image?: string;
  isPopular?: boolean;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      id: "housekeeping",
      title: "Housekeeping Services",
      price: "₹19,999/month*",
      description:
        "High-standard cleaning and sanitation solutions tailored for commercial offices, residential hubs, hospitals, and schools.",
      features: [
        "Daily dry/wet mopping & vacuuming",
        "Deep floor scrubbing & carpet shampooing",
        "Glass pane & high-reach cleaning",
        "Eco-friendly cleaning agents",
      ],
      icon: Sparkles,
      image: "/housekeeping.jpg",
      isPopular: true,
    },
    {
      id: "security",
      title: "Security Services",
      price: "₹19,999/month*",
      description:
        "Professional and verified security personnel protecting your assets, residents, employees, and physical properties 24/7.",
      features: [
        "Skilled, background-verified security guards",
        "Visitor & vehicle access management",
        "CCTV control room operations",
        "Patrolling & incident reporting",
      ],
      icon: Shield,
      image: "/security.jpg",
    },
    {
      id: "maintenance",
      title: "Electrical & Plumbing Support",
      price: "₹24,999/month*",
      description:
        "On-site technical support for electrical grids, plumbing systems, DG sets, HVAC, and critical mechanical equipment.",
      features: [
        "Preventive electrical inspections",
        "Plumbing fixes & leak control",
        "DG set operation & logbook management",
        "On-call breakdown support",
      ],
      icon: Wrench,
      image: "/maintenance.jpg",
    },
    {
      id: "pest-control",
      title: "Pest Control Services",
      price: "₹1,499/service*",
      description:
        "Eco-friendly, chemical-safe pest management solutions to keep commercial and residential properties pest-free.",
      features: [
        "Cockroach & rodent eradication",
        "Termite prevention & barriers",
        "General disinfection sprays",
        "Government-approved safe chemicals",
      ],
      icon: Bug,
      image: "/pest-control.jpg",
    },
    {
      id: "property",
      title: "Property Management",
      price: "₹2,499/month*",
      description:
        "Complete building and asset oversight, tenant facilitation, vendor coordination, and routine quality audits.",
      features: [
        "Asset register & condition audits",
        "Common area facility checking",
        "Utility bills & vendor monitoring",
        "Society portal data maintenance",
      ],
      icon: Building,
      image: "/property-management.jpg",
    },
    {
      id: "supplies",
      title: "Office & Cleaning Supplies",
      price: "Customized Quotation",
      description:
        "Consistent and cost-effective delivery of corporate cleaning chemicals, pantry essentials, safety gears, and stationery.",
      features: [
        "Housekeeping tools & consumables",
        "Office stationery & papers",
        "Pantry coffee, tea & cups",
        "Fast doorstep delivery with wholesale rates",
      ],
      icon: ClipboardList,
      image: "/office-supplies.jpg",
    },
  ];

  const handleScrollToContact = () => {
    const contactSec = document.getElementById("contact");
    if (contactSec) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSec.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="services" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      {/* Decorative dots */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-secondary/5 rounded-full blur-2xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label">
            Our Offerings
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 leading-tight">
            Facility Management Solutions
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light mx-auto max-w-2xl">
            We deliver highly trained personnel and customized service plans to keep your facility clean, secure, and operational.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const ServiceIcon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white border border-slate-200 group h-full shadow-sm hover:shadow-lg hover:-translate-y-2 hover:border-primary/20 transition-all duration-300 ${
                  service.isPopular ? "ring-2 ring-primary" : ""
                }`}
              >
                {service.isPopular && (
                  <div className="absolute top-3 right-3 bg-secondary text-white text-[10px] uppercase font-bold py-1 px-2.5 rounded-full z-10 shadow-sm tracking-wider">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Service image if available, else decorative icon placeholder */}
                  {service.image ? (
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        sizes="(max-w-720px) 100vw, 33vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary/95 flex items-center justify-center text-white shadow-md">
                          <ServiceIcon className="w-4 h-4 text-white" />
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-7 pb-0 flex items-center gap-3">
                      <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                        <ServiceIcon className="w-7 h-7" />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <h4 className="text-xl font-bold text-primary mb-2 flex items-center justify-between">
                      {service.title}
                    </h4>

                    {/* Pricing Badge */}
                    <div className="inline-flex items-center bg-slate-100 px-3 py-1.5 rounded-lg text-[11px] uppercase tracking-wider font-bold text-slate-600 mb-4">
                      Starting from <span className="text-secondary ml-1">{service.price}</span>
                    </div>

                    <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <ul className="space-y-2">
                      {service.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                          <Check className="w-4 h-4 text-secondary flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-6 pt-0 mt-auto">
                  <button
                    onClick={handleScrollToContact}
                    className="w-full py-3 px-4 rounded-xl font-bold bg-primary/5 text-primary hover:bg-primary hover:text-white transition-colors duration-300 inline-flex justify-center items-center gap-2 group/btn"
                  >
                    Learn More
                    <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Disclaimer Section */}
        <div className="mt-12 text-center border-t border-slate-200/50 pt-8">
          <div className="inline-block bg-orange-50 text-orange-800 border border-orange-200/60 font-semibold text-xs px-6 py-3 rounded-lg shadow-sm">
            *All prices are indicative, exclude applicable taxes, and may vary based on manpower
            requirement, site conditions, working hours, and scope of work.
          </div>
        </div>
      </div>
    </section>
  );
}
