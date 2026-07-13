"use client";

import { ArrowRight, Phone } from "lucide-react";

export default function SectionCTA() {
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

  return (
    <div className="mt-16 max-w-5xl mx-4 lg:mx-auto bg-slate-900 rounded-3xl p-8 sm:p-12 text-center shadow-2xl relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
      
      <div className="relative z-10">
        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
          Need Reliable Facility Management Services?
        </h3>
        <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-2xl mx-auto leading-relaxed">
          Get a free site survey and a customised quotation for your office, apartment, hospital, school, warehouse, or commercial property.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => handleScrollTo("contact")}
            className="w-full sm:w-auto btn btn-blue flex items-center justify-center gap-2 group"
          >
            Request a Free Quote
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
          
          <a
            href="tel:+919900077148"
            className="w-full sm:w-auto btn bg-white text-slate-900 hover:bg-slate-50 flex items-center justify-center gap-2 transition-colors font-bold px-6 py-3 rounded-lg"
          >
            <Phone className="w-4 h-4 text-secondary" />
            Call +91 99000 77148
          </a>
        </div>
      </div>
    </div>
  );
}
