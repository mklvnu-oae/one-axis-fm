"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Clipboard,
  FileSpreadsheet,
  FileSignature,
  UserCheck,
  Activity,
  HeartHandshake,
} from "lucide-react";

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function WorkingProcess() {
  const steps: ProcessStep[] = [
    {
      step: "01",
      title: "Requirement Discussion",
      description: "We connect to understand your facility scope, manpower strength, shifts, and compliance expectations.",
      icon: MessageSquare,
    },
    {
      step: "02",
      title: "Site Survey",
      description: "Our technical operations manager visits your premises to assess square footage, conditions, and specific challenges.",
      icon: Clipboard,
    },
    {
      step: "03",
      title: "Proposal Submission",
      description: "We submit a detailed commercial quotation and draft SLAs outlining standard service protocols and transparent costs.",
      icon: FileSpreadsheet,
    },
    {
      step: "04",
      title: "Agreement",
      description: "Upon alignment, we execute a mutual service agreement, finalizing the start date, shift charts, and deployment schedules.",
      icon: FileSignature,
    },
    {
      step: "05",
      title: "Staff Deployment",
      description: "Our operations team deploys background-verified, uniform-clad staff on-site alongside critical tools and chemicals.",
      icon: UserCheck,
    },
    {
      step: "06",
      title: "Supervision & Monitoring",
      description: "We implement daily attendance checks, supervisor checklists, and weekly quality audits to maintain consistency.",
      icon: Activity,
    },
    {
      step: "07",
      title: "Continuous Support",
      description: "Get monthly client feedback meetings, regular billing reconciliations, and responsive 24/7 client coordination support.",
      icon: HeartHandshake,
    },
  ];

  return (
    <section id="process" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label text-[10px] leading-tight mb-2">
            Our Roadmap
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 leading-tight">
            How We Partner With You
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light mx-auto max-w-2xl">
            A seamless, step-by-step onboarding process built to ensure zero service gaps from day one.
          </p>
        </div>

        {/* Timeline container */}
        <div className="relative">
          {/* Central Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 -translate-x-1/2 z-0" />

          {/* Timeline Steps */}
          <div className="space-y-12 lg:space-y-20 relative z-10">
            {steps.map((stepData, index) => {
              const StepIcon = stepData.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center justify-between ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Left or Right card side */}
                  <div className="w-full lg:w-[45%]">
                    <motion.div
                      initial={{ opacity: 0, x: isEven ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.5 }}
                      className="glass-card bg-slate-50/50 hover:bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 relative group"
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                          <StepIcon className="w-6 h-6" />
                        </div>
                        <div>
                          <span className="text-xs font-bold text-secondary uppercase tracking-widest">
                            Step {stepData.step}
                          </span>
                          <h4 className="text-lg font-bold text-primary">
                            {stepData.title}
                          </h4>
                        </div>
                      </div>
                      <p className="text-slate-500 text-xs leading-relaxed font-light">
                        {stepData.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Central Node */}
                  <div className="my-6 lg:my-0 relative flex items-center justify-center z-20">
                    <div className="w-10 h-10 rounded-full bg-secondary text-white font-bold text-sm flex items-center justify-center border-4 border-white shadow-md">
                      {stepData.step}
                    </div>
                  </div>

                  {/* Empty side for layout alignment */}
                  <div className="hidden lg:block w-[45%]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
