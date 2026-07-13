"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Target, Eye, Heart, Award, ArrowRight, ShieldCheck, Zap, Users } from "lucide-react";

type TabId = "mission" | "vision" | "values" | "why-us";

interface TabContent {
  id: TabId;
  title: string;
  icon: React.ElementType;
  heading: string;
  content: string;
  points?: string[];
}

export default function AboutUs() {
  const [activeTab, setActiveTab] = useState<TabId>("mission");

  const tabs: TabContent[] = [
    {
      id: "mission",
      title: "Mission",
      icon: Target,
      heading: "Enabling Excellence Through Seamless Operations",
      content:
        "Our mission is to provide industry-leading, compliant, and highly reliable facility management services that allow our clients to dedicate 100% of their energy to their core business operations. We commit to transparency, modern supervision, and creating clean, safe, and professional environments for all establishments we serve.",
      points: [
        "Uncompromised compliance and safety standards",
        "Empowering and training local manpower resources",
        "Cost-effective and transparent pricing",
      ],
    },
    {
      id: "vision",
      title: "Vision",
      icon: Eye,
      heading: "Setting the Standard for Modern Facility Care",
      content:
        "To become the most trusted and preferred partner for facility management and manpower solutions nationwide. We aim to revolutionize the industry by blending skilled staff execution with modern supervision techniques, establishing a hallmark of trust, efficiency, and premium service delivery.",
      points: [
        "Nationwide network of trained professionals",
        "Tech-driven supervision and monitoring",
        "Sustainable and eco-friendly cleaning solutions",
      ],
    },
    {
      id: "values",
      title: "Core Values",
      icon: Heart,
      heading: "The Pillars of Our Corporate Culture",
      content:
        "At One Axis Enterprises, our values govern our actions, guide our decisions, and form the basis of our trusted relationships with corporate clients, apartment associations, and industrial establishments.",
      points: [
        "Integrity & Transparency in all contracts and billing",
        "Professionalism and respect for client spaces",
        "Continuous feedback-driven improvement",
        "Accountability for deployed personnel and safety",
      ],
    },
    {
      id: "why-us",
      title: "Why One Axis",
      icon: Award,
      heading: "A Strategic Partner for Facility Management",
      content:
        "We are more than a service provider; we are a strategic extension of your management team. With our tagline 'We Manage. You Focus.', we assume complete operational ownership so you can lead your company without facility bottlenecks.",
      points: [
        "Customized plans tailored to your specific facility type",
        "Background-verified and professionally trained personnel",
        "Swift response team for emergency support",
        "Rigorous quality auditing and supervisor tracking",
      ],
    },
  ];

  const activeTabData = tabs.find((t) => t.id === activeTab) || tabs[0];
  const ActiveIcon = activeTabData.icon;

  const stats = [
    { icon: Users, value: "1,500+", label: "Trained Staff" },
    { icon: ShieldCheck, value: "99.8%", label: "Client Retention" },
    { icon: Zap, value: "24/7", label: "Dedicated Support" },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Decorative backdrop gradients */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">
            About Our Division
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            One Axis Enterprises
          </h3>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600 font-light">
            Providing end-to-end facility management and skilled manpower services for corporate
            hubs, large gated communities, education spaces, and industrial environments.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Overview and Stats */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-primary">Company Overview</h4>
              <p className="text-slate-600 leading-relaxed font-light">
                One Axis Enterprises stands as a premier name in professional facility services. We
                specialize in custom outsourcing models, combining state-of-the-art cleaning
                standards, verified security personnel, technical building management, and reliable
                supplies.
              </p>
              <p className="text-slate-600 leading-relaxed font-light">
                We believe that a clean, well-managed facility is essential for worker productivity,
                customer satisfaction, and business reputation. By letting One Axis handle daily operations,
                our clients experience fewer disruptions, lower overhead, and peace of mind.
              </p>
            </div>

            {/* Stats Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              {stats.map((stat, idx) => (
                <div key={idx} className="text-center p-3 rounded-xl bg-slate-50 border border-slate-100">
                  <div className="flex justify-center mb-1.5">
                    <stat.icon className="w-5 h-5 text-secondary" />
                  </div>
                  <div className="text-xl font-bold text-primary">{stat.value}</div>
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Interactive Tabs */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-2xl p-6 sm:p-8">
              {/* Tab Navigation */}
              <div className="flex flex-wrap gap-2 border-b border-slate-100 pb-4 mb-6">
                {tabs.map((tab) => {
                  const TabIcon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all duration-200 cursor-pointer ${
                        activeTab === tab.id
                          ? "bg-primary text-white shadow-md scale-105"
                          : "text-slate-500 hover:text-primary hover:bg-slate-50"
                      }`}
                    >
                      <TabIcon className="w-4 h-4" />
                      {tab.title}
                    </button>
                  );
                })}
              </div>

              {/* Tab Content Panel */}
              <div className="min-h-[260px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                        <ActiveIcon className="w-5 h-5" />
                      </div>
                      <h5 className="text-xl font-bold text-primary">
                        {activeTabData.heading}
                      </h5>
                    </div>

                    <p className="text-slate-600 leading-relaxed font-light">
                      {activeTabData.content}
                    </p>

                    {activeTabData.points && (
                      <div className="space-y-2 pt-2">
                        {activeTabData.points.map((pt, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 text-primary flex items-center justify-center mt-0.5">
                              <ArrowRight className="w-3 h-3" />
                            </span>
                            <span className="text-sm font-semibold text-slate-700">{pt}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
