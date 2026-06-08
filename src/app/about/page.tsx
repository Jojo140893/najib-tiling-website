"use client";

import Image from "next/image";
import Link from "next/link";
import { Award, ShieldCheck, CheckCircle2, ChevronRight, Phone } from "lucide-react";
import { motion } from "framer-motion";

const corePillars = [
  {
    icon: <Award className="w-10 h-10 text-brand-blue shrink-0" />,
    title: "Licence & Standards Compliance",
    desc: "We strictly adhere to Australian Standards, including AS 3740-2021 for waterproofing wet areas. This protects your home from structure-damaging leaks.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-brand-blue shrink-0" />,
    title: "Comprehensive Liability Cover",
    desc: "NJ Pro Tiling is fully insured with Public Liability insurance, providing full financial protection and peace of mind for every single residential and commercial site we work on.",
  },
  {
    icon: <CheckCircle2 className="w-10 h-10 text-brand-blue shrink-0" />,
    title: "Structural Guarantee",
    desc: "We stand behind the calibre of our work. Every installation is backed by our comprehensive warranty on material adhesion, screed leveling, and waterproofing system longevity.",
  },
];

export default function About() {
  return (
    <div className="w-full">
      
      {/* Banner / Header */}
      <section className="bg-brand-charcoal text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio/project-10.jpeg"
            alt="Premium tile finishing"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-brand-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">About NJ Pro Tiling</h1>
          <p className="text-sm sm:text-lg text-brand-silver max-w-xl mx-auto leading-relaxed">
            The story, standards, and values of Melbourne's most dedicated tiling specialists.
          </p>
        </div>
      </section>

      {/* Main Grid: Info & Image */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Story Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-blue">Who We Are</h2>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight leading-tight">
                Crafting Flawless Spaces with Lifelong Durability
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Founded by lead craftsman Najib, **NJ Pro Tiling** was built on a simple philosophy: **never cut corners**. Tiling isn't just about placing tiles; it's a technical discipline requiring accurate levelling, correct screed slopes for water flow, and scientifically compliant waterproofing seals.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed">
                Based in Melbourne, we serve homeowners, builders, and developers who seek top-tier craftsmanship for their kitchens, bathrooms, outdoor spaces, and commercial fits. We are skilled in laying all tiling varieties, including ceramic, porcelain, natural stone, marble, mosaic, and modern large-format tiles.
              </p>
              
              <div className="flex gap-8 pt-4 border-t border-slate-100">
                <div>
                  <span className="block text-3xl font-black text-brand-blue">10+</span>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Years Experience</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-brand-blue">100%</span>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Satisfaction Rate</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-brand-blue">7 Years</span>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Waterproof Warranty</span>
                </div>
              </div>
            </motion.div>

            {/* Showcase Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
            >
              <Image
                src="/portfolio/project-7.jpeg"
                alt="Precision screed leveling check"
                fill
                sizes="(max-width: 768px) 100vw, 600px"
                className="object-cover"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-brand-charcoal/90 backdrop-blur-sm p-5 rounded-xl border border-white/10 text-white flex items-center justify-between">
                <div>
                  <span className="block text-sm font-bold text-white">Najib</span>
                  <span className="text-xs text-brand-silver">Director & Master Tiler</span>
                </div>
                <div className="text-[10px] bg-brand-blue text-white py-1 px-2.5 rounded font-black tracking-wider uppercase">
                  Licensed & Insured
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Standards & pillars */}
      <section className="py-24 bg-slate-50 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-blue mb-3">Our Standards</h2>
            <p className="text-3xl font-black text-slate-900 tracking-tight">
              Tiling Compliant with Australian Regulations
            </p>
            <div className="w-16 h-1.5 bg-brand-blue mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {corePillars.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm flex flex-col gap-5 hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 rounded-xl bg-brand-blue/5 flex items-center justify-center">
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 tracking-wide">{pillar.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-brand-charcoal text-white relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-black tracking-tight leading-tight">
            Work with Certified Tilers
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-silver max-w-xl mx-auto">
            From single splashbacks to full bathroom makeovers, we handle every detail with licensing compliance, precision fall angles, and tidy cleanup.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold px-7 py-3.5 rounded-xl shadow-md transition-colors"
            >
              <span>Get Your Free Quote</span>
              <ChevronRight size={14} className="ml-1" />
            </Link>
            <a
              href="tel:0468372835"
              className="inline-flex items-center justify-center border border-white/20 text-white hover:bg-white/5 text-sm font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              <Phone size={14} className="mr-2" />
              <span>0468 372 835</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
