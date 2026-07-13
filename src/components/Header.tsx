"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Menu, X, PhoneCall } from "lucide-react";
import Image from "next/image";

interface NavItem {
  name: string;
  href: string;
  id: string;
}

const navItems: NavItem[] = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About Us", href: "#about", id: "about" },
  { name: "Services", href: "#services", id: "services" },
  { name: "Industries", href: "#industries", id: "industries" },
  { name: "Why Choose Us", href: "#why-choose-us", id: "why-choose-us" },
  { name: "Process", href: "#process", id: "process" },
  { name: "Pricing", href: "#pricing", id: "pricing" },
  { name: "Testimonials", href: "#testimonials", id: "testimonials" },
  { name: "FAQ", href: "#faq", id: "faq" },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    // Intersection Observer to highlight active navigation link based on current section
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px", // Trigger when section occupies the mid-upper screen
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of the sticky header
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
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-secondary origin-left z-50"
        style={{ scaleX }}
      />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3 border-b border-slate-100" : "glass-nav py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center group cursor-pointer shrink-0"
            >
              <div className="relative w-48 h-12 sm:w-56 sm:h-16 transition-transform group-hover:scale-105">
                <Image src="/logo.png" alt="One Axis Enterprises Logo" fill className="object-contain object-left scale-[1.8] origin-left" priority />
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 relative z-50">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative px-2 xl:px-3 py-2 text-[11px] font-semibold rounded-md transition-all duration-200 uppercase tracking-wider whitespace-nowrap ${
                    activeSection === item.id
                      ? "text-primary font-bold"
                      : "text-slate-700 hover:text-primary hover:bg-slate-100/55"
                  }`}
                >
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-primary/10 rounded-md -z-10"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  {item.name}
                </a>
              ))}
            </nav>

            {/* Right side CTA Button */}
            <div className="hidden lg:flex items-center ml-6 xl:ml-10">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="btn btn-blue text-[11px] uppercase tracking-wider whitespace-nowrap px-4 py-2"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                Contact Us
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-slate-700 hover:text-primary hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg border-b border-slate-200 shadow-xl"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`block px-4 py-3 text-sm font-semibold rounded-lg uppercase tracking-wider transition-colors ${
                    activeSection === item.id
                      ? "bg-primary/5 text-secondary font-bold"
                      : "text-slate-700 hover:bg-slate-50 hover:text-primary"
                  }`}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 px-4">
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="btn btn-blue w-full text-xs uppercase tracking-wider"
                >
                  <PhoneCall className="w-4 h-4" />
                  Contact Us
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </header>
    </>
  );
}
