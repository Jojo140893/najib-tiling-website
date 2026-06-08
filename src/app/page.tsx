"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Star, Clock, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { LogoMark } from "@/components/layout/Logo";

const trustBadges = [
  {
    icon: <ShieldCheck className="w-8 h-8 text-brand-blue" />,
    title: "Licensed & Fully Insured",
    desc: "Fully qualified tilers. Peace of mind with full liability cover.",
  },
  {
    icon: <CheckCircle2 className="w-8 h-8 text-brand-blue" />,
    title: "AS 3740 Waterproofing",
    desc: "100% compliant waterproofing for wet areas, avoiding costly leaks.",
  },
  {
    icon: <Sparkles className="w-8 h-8 text-brand-blue" />,
    title: "Precision Finish",
    desc: "Flawless screeding, levelling, and perfect joint alignments.",
  },
  {
    icon: <Clock className="w-8 h-8 text-brand-blue" />,
    title: "On Time & On Budget",
    desc: "Clear timelines, reliable communication, and zero hidden costs.",
  },
];

const featuredServices = [
  {
    title: "Bathroom Renovations",
    image: "/portfolio/project-1.jpeg",
    desc: "Transforming old layouts into modern, luxurious sanctuaries with absolute waterproofing integrity.",
  },
  {
    title: "Floor & Wall Tiling",
    image: "/portfolio/project-4.jpeg",
    desc: "Precision laying of porcelain, ceramic, marble, and large-format tiles in living spaces and bathrooms.",
  },
  {
    title: "Kitchen Splashbacks",
    image: "/portfolio/project-5.jpeg",
    desc: "Functional elegance. Beautiful mosaic, subway, or custom format tiling for kitchen walls.",
  },
];

const testimonials = [
  {
    name: "Daniel K.",
    suburb: "South Yarra",
    rating: 5,
    text: "Najib did an incredible job tiling our bathroom. The levelling is absolutely perfect, and the custom niches look fantastic. Highly recommend NJ Pro Tiling!",
  },
  {
    name: "Sarah M.",
    suburb: "Brunswick",
    rating: 5,
    text: "Very professional team. They turned up exactly on time, laid down protective sheets, and finished our splashback in a day. Spotless clean-up afterwards.",
  },
  {
    name: "Marcus L.",
    suburb: "St Kilda",
    rating: 5,
    text: "Flawless outdoor tiling for our new patio. NJ Pro Tiling ensured correct falls for drainage. Will be using them for our upcoming laundry renovation.",
  },
];

export default function Home() {
  return (
    <>
      <div className="w-full overflow-hidden">
        
        {/* HERO SECTION */}
        <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center bg-brand-charcoal text-white overflow-hidden">
          {/* Background Video */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-25"
            >
              <source src="/portfolio/video-1.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/80 to-transparent" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="mb-8"
            >
              <LogoMark className="w-28 h-28 drop-shadow-xl" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.1 }}
              className="text-4xl sm:text-6xl font-black tracking-tight leading-tight max-w-4xl"
            >
              Quality Tiling. <br className="sm:hidden" />
              <span className="bg-gradient-to-r from-brand-blue to-cyan-400 bg-clip-text text-transparent">
                Professional Finish.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="mt-6 text-base sm:text-xl text-brand-silver max-w-2xl leading-relaxed"
            >
              Premium floor & wall tile installations across Melbourne. 
              Certified waterproofing, screeding, and premium finishes that stand the test of time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white font-bold px-8 py-4 rounded-xl transition-all shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/35 group"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all backdrop-blur-sm"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </section>

        {/* TRUST BADGES SECTION */}
        <section className="bg-white py-16 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustBadges.map((badge, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  className="flex gap-4 p-5 rounded-xl border border-slate-50 hover:border-slate-100 hover:shadow-sm transition-all"
                >
                  <div className="shrink-0 mt-1">{badge.icon}</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm tracking-wide mb-1.5">{badge.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed">{badge.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES OVERVIEW */}
        <section className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-blue mb-3">Our Core Expertise</h2>
              <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Premium Tiling Services Done Right
              </p>
              <div className="w-16 h-1.5 bg-brand-blue mx-auto mt-5 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredServices.map((service, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl transition-all group flex flex-col h-full"
                >
                  <div className="relative h-64 overflow-hidden shrink-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 400px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent" />
                  </div>
                  <div className="p-8 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-blue transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-500 leading-relaxed mb-6">
                        {service.desc}
                      </p>
                    </div>
                    <Link
                      href="/services"
                      className="inline-flex items-center text-sm font-bold text-brand-blue group-hover:text-brand-blue-hover"
                    >
                      <span>Read Details</span>
                      <ArrowRight size={14} className="ml-1.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-6 py-3.5 rounded-xl transition-colors"
              >
                Explore All Services
              </Link>
            </div>
          </div>
        </section>

        {/* WORK SNEAK PEEK (PORTFOLIO CTA) */}
        <section className="py-24 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-16">
              <div className="max-w-2xl">
                <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-blue mb-3">Our Work Showcase</h2>
                <p className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Real Projects, Flawless Finishes
                </p>
                <p className="mt-4 text-slate-500 text-sm sm:text-base leading-relaxed">
                  Browse our real client transformations across bathrooms, kitchens, laundries, and residential spaces. We don't use generic stock images.
                </p>
              </div>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white text-sm font-bold px-6 py-3.5 rounded-xl shadow-md transition-colors shrink-0"
              >
                View Full Portfolio
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["/portfolio/project-6.jpeg", "/portfolio/project-7.jpeg", "/portfolio/project-12.jpeg", "/portfolio/project-13.jpeg"].map((src, i) => (
                <div
                  key={i}
                  className="relative h-60 md:h-72 rounded-xl overflow-hidden shadow-sm border border-slate-100 group"
                >
                  <Image
                    src={src}
                    alt={`NJ Pro Tiling finish ${i+1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-white/95 text-slate-900 text-xs font-bold py-1.5 px-3 rounded-lg shadow-sm">View Grid</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SLIDER SECTION */}
        <section className="py-24 bg-slate-900 text-white relative">
          <div className="absolute inset-0 bg-brand-charcoal/50 z-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-xs font-extrabold uppercase tracking-widest text-brand-blue mb-3">Client Reviews</h2>
              <p className="text-3xl sm:text-4xl font-black tracking-tight">What Our Customers Say</p>
              <div className="w-16 h-1.5 bg-brand-blue mx-auto mt-4 rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((test, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.08 }}
                  className="bg-brand-charcoal border border-white/5 p-8 rounded-2xl shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <div className="flex gap-1 mb-4 text-amber-400">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star key={i} size={16} className="fill-current" />
                      ))}
                    </div>
                    <p className="text-brand-silver text-sm italic leading-relaxed mb-6">
                      "{test.text}"
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs">
                    <span className="font-bold text-white text-sm">{test.name}</span>
                    <span className="text-slate-400 font-semibold">{test.suburb}, VIC</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT CTA BANNER */}
        <section className="py-20 bg-brand-blue text-white relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute top-0 left-0 w-80 h-80 rounded-full bg-white blur-3xl" />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-white blur-3xl" />
          </div>
          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight">
              Ready to Upgrade Your Space?
            </h2>
            <p className="mt-4 text-base sm:text-lg text-white/90 max-w-xl">
              Get in touch with Najib today for expert advice, design suggestions, and an obligation-free detailed quote.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
              <a
                href="tel:0468372835"
                className="inline-flex items-center justify-center bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition-colors shadow-lg"
              >
                <Phone size={18} className="mr-2" />
                <span>Call 0468 372 835</span>
              </a>
              <Link
                href="/quote"
                className="inline-flex items-center justify-center bg-slate-900 text-white font-bold px-8 py-4 rounded-xl hover:bg-slate-800 transition-colors border border-slate-800 shadow-lg"
              >
                <span>Request Online Quote</span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
