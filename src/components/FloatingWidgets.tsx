"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

export default function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", checkScrollTop);
    return () => window.removeEventListener("scroll", checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleWhatsAppChat = () => {
    const defaultMsg = "Hi One Axis Enterprises, I am checking your facility management website and would like to request details.";
    window.open(`https://wa.me/919900077148?text=${encodeURIComponent(defaultMsg)}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="scroll-top"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-xl bg-slate-900 hover:bg-primary border border-slate-800 text-white flex items-center justify-center shadow-lg transition-colors cursor-pointer"
            aria-label="Scroll to Top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp Button */}
      <motion.button
        onClick={handleWhatsAppChat}
        className="w-12 h-12 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-center shadow-lg cursor-pointer relative"
        aria-label="Chat on WhatsApp"
        animate={{
          y: [0, -6, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        whileHover={{ scale: 1.05 }}
      >
        <span className="absolute inset-0 rounded-xl bg-emerald-600 animate-ping opacity-25 pointer-events-none" />
        <MessageCircle className="w-6 h-6 fill-white text-emerald-600" />
      </motion.button>
    </div>
  );
}
