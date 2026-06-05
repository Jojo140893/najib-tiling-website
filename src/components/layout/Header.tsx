"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on path changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full py-4 text-white transition-all duration-300 border-b ${
        scrolled
          ? "bg-brand-charcoal/95 backdrop-blur-md shadow-lg border-white/5"
          : "bg-brand-charcoal border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium tracking-wide transition-all hover:text-brand-blue relative py-1 ${
                    isActive ? "text-brand-blue font-semibold" : "text-brand-silver"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Quick Contact & Action Buttons */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:0468372835"
              className="flex items-center gap-2 text-sm font-bold text-white hover:text-brand-blue transition-colors"
            >
              <div className="w-8 h-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                <Phone size={14} className="fill-current" />
              </div>
              <span>0468 372 835</span>
            </a>
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md shadow-brand-blue/20 hover:shadow-brand-blue/30 group"
            >
              <span>Free Quote</span>
              <ArrowRight size={14} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Hamburguer Toggle */}
          <div className="flex items-center lg:hidden gap-4">
            <a
              href="tel:0468372835"
              className="p-2 rounded-full bg-white/10 text-white hover:text-brand-blue transition-colors"
              aria-label="Call NJ Pro Tiling"
            >
              <Phone size={18} />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-brand-silver hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden w-full bg-brand-charcoal border-t border-white/5 overflow-hidden"
          >
            <div className="px-4 pt-3 pb-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive
                        ? "bg-brand-blue text-white font-bold"
                        : "text-brand-silver hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <div className="pt-4 px-4 flex flex-col gap-4">
                <a
                  href="tel:0468372835"
                  className="flex items-center justify-center gap-3 py-3 px-4 rounded-lg border border-white/15 text-white font-bold hover:bg-white/5 transition-all"
                >
                  <Phone size={16} />
                  <span>Call 0468 372 835</span>
                </a>
                <Link
                  href="/quote"
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-brand-blue hover:bg-brand-blue-hover text-white font-bold transition-all text-center"
                >
                  <span>Request Free Quote</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
