"use client";

import { motion } from "framer-motion";
import {
  Users,
  Eye,
  Settings,
  Zap,
  DollarSign,
  Award,
  Headphones,
  FileCheck,
} from "lucide-react";

interface BenefitItem {
  title: string;
  description: string;
  icon: React.ElementType;
}

export default function WhyChooseUs() {
  const benefits: BenefitItem[] = [
    {
      title: "Trained & Verified Staff",
      description:
        "Every manpower resource undergoes strict background verification and police verification. They are trained in specific tools, etiquette, and safety guidelines.",
      icon: Users,
    },
    {
      title: "Professional Supervision",
      description:
        "We deploy experienced area supervisors who conduct surprise night audits, manage attendance, and coordinate directly with your facilities head.",
      icon: Eye,
    },
    {
      title: "Customized Service Plans",
      description:
        "We don't believe in one-size-fits-all. We analyze your footfall, building layout, and hours of operation to draft a plan that fits your exact budget and scope.",
      icon: Settings,
    },
    {
      title: "Quick Response Time",
      description:
        "Our dedicated area managers are equipped to resolve on-site issues or deploy replacement staff within a guaranteed turnaround time.",
      icon: Zap,
    },
    {
      title: "Transparent Pricing",
      description:
        "No hidden charges or surprise line items. We provide a complete breakdown of wages, PF, ESI, supervision costs, and taxes in our commercial proposals.",
      icon: DollarSign,
    },
    {
      title: "Quality Assurance",
      description:
        "Routine audits are logged digitally. We use a score-based evaluation system to monitor cleaning quality, response rates, and guard alertness.",
      icon: Award,
    },
    {
      title: "Dedicated Customer Support",
      description:
        "Get a dedicated single point of contact (SPOC) for billing inquiries, staff feedback, service modification, or emergency escalation.",
      icon: Headphones,
    },
    {
      title: "Flexible Contracts",
      description:
        "We offer monthly, quarterly, and annual service agreements with flexible scaling options. Adjust manpower strength easily based on seasonal demand.",
      icon: FileCheck,
    },
  ];

  return (
    <section id="why-choose-us" className="py-16 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="section-label">
            Our Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-primary mb-4 leading-tight">
            Why Choose One Axis Enterprises
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-light mx-auto max-w-2xl">
            We bridge the gap between reliable labor and professional corporate oversight, ensuring high compliance and zero disruptions.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const BenefitIcon = benefit.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-[20px] p-8 border border-slate-200/60 shadow-sm flex flex-col justify-between hover:-translate-y-1.5 hover:shadow-md hover:border-secondary/20 transition-all duration-400 cursor-default"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary mb-2">
                    <BenefitIcon className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-primary">{benefit.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
