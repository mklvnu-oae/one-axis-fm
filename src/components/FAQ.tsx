"use client";

import { motion } from "framer-motion";
import { ChevronDown, HelpCircle, Plus, Minus } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const faqs: FAQItem[] = [
    {
      question: "What types of properties do you provide facility management for?",
      answer:
        "We provide comprehensive facility management for corporate hubs, MNC offices, large gated communities, apartments, hospitals, clinics, educational institutions (schools & colleges), warehouses, manufacturing industries, hotels, retail outlets, and commercial buildings.",
    },
    {
      question: "Are all your deployed personnel background-verified?",
      answer:
        "Absolutely. Security, compliance, and trust are our top priorities. Every guard, housekeeper, and technician undergoes strict background verification, government identity check, and local police verification prior to deployment.",
    },
    {
      question: "How do you ensure service quality and monitor staff performance?",
      answer:
        "We deploy a dedicated Area Operations Manager who visits your site daily or weekly (depending on project size) to review logs, mark attendance, and grade service quality using a digital scorecard. We also conduct surprise night-patrol audits for our security personnel.",
    },
    {
      question: "Do you offer flexible contract options or is it a long-term commitment?",
      answer:
        "We offer flexible service level agreements (SLAs). Clients can opt for short-term monthly contracts or annual corporate agreements. You can also scale manpower strength up or down with a standard 15-day notice.",
    },
    {
      question: "How are billing, wages, and compliance handled?",
      answer:
        "One Axis is 100% compliant with labor laws. We provide a complete monthly billing package which includes invoices, along with verified PF, ESI, and basic wage compliance receipts for all staff deployed at your site.",
    },
    {
      question: "Can we bundle housekeeping supplies and pantry services?",
      answer:
        "Yes. We offer an integrated facility package where we supply all cleaning chemicals (eco-friendly, commercial grade), pantry consumables (tea, coffee, cups), and toilet supplies. This is billed under a unified invoice, reducing vendor overhead.",
    },
  ];

  return (
    <section id="faq" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">
            Questions
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Frequently Asked Questions
          </h3>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600 font-light">
            Got questions about our deployment, compliance, or billing? Find quick answers below.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <details className="group glass-card bg-white border border-slate-200 rounded-2xl p-5 [&_summary]:list-none cursor-pointer">
                <summary className="flex justify-between items-center font-bold text-primary text-sm sm:text-base outline-none select-none">
                  <div className="flex items-center gap-3 pr-4">
                    <HelpCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-300 group-open:rotate-180 group-hover:text-primary flex-shrink-0" />
                </summary>
                <div className="mt-4 pt-4 border-t border-slate-100 text-slate-500 text-xs sm:text-sm font-light leading-relaxed cursor-default">
                  {faq.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
