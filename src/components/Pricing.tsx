"use client";

import { motion } from "framer-motion";
import { ShieldAlert, Sparkles, Shield, Wrench, Bug, Building, FileText } from "lucide-react";

interface PriceCard {
  title: string;
  price: string;
  period: string;
  icon: React.ElementType;
  details: string[];
  ctaText: string;
  isCustom?: boolean;
  isPopular?: boolean;
}

export default function Pricing() {
  const plans: PriceCard[] = [
    {
      title: "Housekeeping Services",
      price: "₹19,999",
      period: "/month",
      icon: Sparkles,
      details: [
        "1 Trained Cleaning Professional",
        "8-hour Daily Service Shift",
        "Basic Hand tools included",
        "Routine Supervisor Quality Check",
        "Wages, PF, and ESI compliant",
      ],
      ctaText: "Get Quote",
    },
    {
      title: "Security Services",
      price: "₹19,999",
      period: "/month",
      icon: Shield,
      details: [
        "1 Background-Verified Security Guard",
        "8-hour Daily Guard Shift",
        "Standard Guard Uniform & Flashlight",
        "Daily Attendance Tracking",
        "Statutory Compliance Covered",
      ],
      ctaText: "Get Quote",
    },
    {
      title: "Electrical & Plumbing",
      price: "₹24,999",
      period: "/month",
      icon: Wrench,
      details: [
        "1 On-site Technician Support",
        "Preventive Checkups Scheduler",
        "Pumps & Generator Monitoring",
        "Tools & Testers included",
        "Emergency Escalation contact",
      ],
      ctaText: "Get Quote",
    },
    {
      title: "Pest Control Services",
      price: "₹1,499",
      period: "/service",
      icon: Bug,
      details: [
        "Single General Disinfection Treatment",
        "Cockroach & Ant Baiting Gel",
        "Safe, Government-Approved Chemicals",
        "15-Day Free Touch-up Guarantee",
        "Suitable for Standard 2BHK/Office",
      ],
      ctaText: "Book Service",
    },
    {
      title: "Property Management",
      price: "₹2,499",
      period: "/month",
      icon: Building,
      details: [
        "Weekly Common Area Site Inspections",
        "Vendor Invoice Verification",
        "Routine Utility Meter Log checks",
        "Basic Tenant Query Handling support",
        "Monthly Facility Status Report",
      ],
      ctaText: "Get Quote",
    },
    {
      title: "Office & Cleaning Supplies",
      price: "Custom",
      period: "Quotation",
      icon: FileText,
      details: [
        "Wholesale chemical pricing sheets",
        "Monthly scheduled supply drop-off",
        "Pantries and washrooms stocking",
        "Custom billing cycles for corporates",
        "Flexible returns for damaged items",
      ],
      ctaText: "Request Price List",
      isCustom: true,
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
    };
  };

  return (
    <section id="pricing" className="py-20 lg:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">
            Pricing Plans
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Transparent Indicative Pricing
          </h3>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600 font-light">
            Clear base costs for manpower deployment and service packages, with no hidden overhead.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => {
            const PlanIcon = plan.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-[30px] p-8 xl:p-10 border transition-all duration-300 flex flex-col h-full ${
                  plan.isPopular
                    ? "border-secondary/50 shadow-2xl shadow-secondary/10 scale-100 lg:scale-[1.05] z-10"
                    : "border-slate-200 shadow-lg hover:shadow-xl hover:border-slate-300"
                }`}
              >
                {plan.isPopular && (
                  <div className="absolute top-0 inset-x-0 flex justify-center -translate-y-1/2">
                    <span className="bg-gradient-secondary text-white text-[10px] uppercase tracking-widest font-bold py-1.5 px-6 rounded-full shadow-lg border border-white/20">
                      Most Popular
                    </span>
                  </div>
                )}  <div>
                  <div className="flex items-center justify-between mb-6">
                    <h4 className="text-lg font-bold text-primary">{plan.title}</h4>
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <PlanIcon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Price Row */}
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-3xl font-extrabold text-primary">{plan.price}</span>
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider">
                      {plan.period}
                    </span>
                  </div>

                  {/* Plan Features */}
                  <ul className="space-y-3 pt-6 border-t border-slate-100">
                    {plan.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-1.5 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-8 mt-6">
                  <button
                    onClick={handleScrollToContact}
                    className={`w-full text-center py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-bold shadow-sm transition-all duration-300 cursor-pointer hover:scale-[1.02] ${
                      plan.isCustom
                        ? "bg-gradient-secondary text-white hover:bg-gradient-secondary/95"
                        : "border border-primary/20 bg-primary/5 hover:bg-primary text-primary hover:text-white"
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Pricing Disclaimer Card */}
        <div className="glass-card bg-orange-500/5 border border-secondary/20 rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-4 max-w-4xl mx-auto shadow-sm">
          <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center text-secondary flex-shrink-0">
            <ShieldAlert className="w-6 h-6" />
          </div>
          <div>
            <h5 className="text-sm font-bold text-primary mb-1">Pricing Variables Notice</h5>
            <p className="text-slate-600 text-xs font-medium leading-relaxed">
              *All prices are indicative, exclude applicable taxes, and may vary based on manpower requirement, site conditions, working hours, and scope of work. Contact us for a precise custom quote.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
