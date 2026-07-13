"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "housekeeping",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError("Please fill out all required fields.");
      return;
    }

    setLoading(true);

    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "housekeeping",
        message: "",
      });
    }, 1500);
  };

  const handleWhatsAppClick = () => {
    const messageText = `Hi One Axis Enterprises, I am interested in your ${formData.service} facility management services. Please contact me.`;
    const encodedText = encodeURIComponent(messageText);
    window.open(`https://wa.me/919900077148?text=${encodedText}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 lg:py-24 bg-white relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-xs uppercase tracking-widest font-bold text-secondary mb-3">
            Get In Touch
          </h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-primary tracking-tight">
            Contact Our Division
          </h3>
          <div className="w-12 h-1 bg-secondary mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-lg text-slate-600 font-light">
            Ready to partner with One Axis? Schedule a free site survey or request a customized commercial quotation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-primary">One Axis Enterprises</h4>
              <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed">
                Reach out directly via phone, email, or WhatsApp. Our facilities coordinator will help route your query to the correct operations supervisor.
              </p>

              <div className="space-y-4 pt-4">
                {/* Phone */}
                <a
                  href="tel:+919900077148"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-primary/5 border border-slate-100 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Call Us
                    </span>
                    <span className="text-sm font-bold text-slate-700">+91 99000 77148</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:contactus@oneaxisenterprises.com"
                  className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-primary/5 border border-slate-100 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Email Address
                    </span>
                    <span className="text-sm font-bold text-slate-700">
                      contactus@oneaxisenterprises.com
                    </span>
                  </div>
                </a>

                {/* WhatsApp */}
                <button
                  onClick={handleWhatsAppClick}
                  className="w-full flex items-center text-left gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-emerald-50 border border-slate-100 hover:border-emerald-200 transition-all duration-300 group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Chat with Us
                    </span>
                    <span className="text-sm font-bold text-slate-700">WhatsApp Support</span>
                  </div>
                </button>

                {/* Office Hours */}
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-slate-100">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                      Office Hours
                    </span>
                    <span className="text-sm font-bold text-slate-700">Mon - Sat: 9:00 AM - 6:00 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Removed standalone action buttons since WhatsApp is now in the main list */}
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-6 sm:p-8 h-full flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <h4 className="text-lg font-bold text-primary mb-4">Request a Quotation</h4>

                    {error && (
                      <div className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/35 text-red-500 text-xs rounded-xl">
                        <AlertCircle className="w-4 h-4 flex-shrink-0" />
                        <span>{error}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. John Doe"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 99000 00000"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. name@company.com"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors"
                          required
                        />
                      </div>

                      {/* Service Selector */}
                      <div className="space-y-1">
                        <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                          Service Required
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 focus:outline-none focus:border-primary transition-colors"
                        >
                          <option value="housekeeping">Housekeeping Services</option>
                          <option value="security">Security Services</option>
                          <option value="maintenance">Electrical & Plumbing</option>
                          <option value="pest-control">Pest Control Services</option>
                          <option value="property">Property Management</option>
                          <option value="supplies">Office Supplies</option>
                          <option value="survey">Schedule Site Survey</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-1">
                      <label className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                        Requirement Details *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Please describe your facility area, approximate manpower needed, and working hours..."
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-xs text-slate-700 placeholder-slate-400 focus:outline-none focus:border-primary transition-colors resize-none"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 bg-gradient-secondary hover:bg-gradient-secondary/95 text-white font-semibold text-xs uppercase tracking-wider py-3.5 px-4 rounded-xl shadow-md transition-all duration-300 hover:scale-[1.01] cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Inquiry
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="flex justify-center">
                      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm animate-bounce">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-xl font-bold text-primary">Inquiry Sent Successfully</h4>
                      <p className="text-slate-600 text-xs sm:text-sm font-light max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out! Your requirements have been logged. Our facilities coordinator will contact you within **2 business hours** to discuss details or schedule a site survey.
                      </p>
                    </div>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="inline-block border border-primary/20 bg-primary/5 hover:bg-primary text-primary hover:text-white font-semibold text-xs uppercase tracking-wider py-2.5 px-6 rounded-xl transition-all duration-300 cursor-pointer"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
