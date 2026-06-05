"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, ChevronRight, Check } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    title: "Bathroom Tiling & Renovations",
    image: "/portfolio/project-1.jpeg",
    desc: "Complete bathroom transformations. From modern floating vanities to curbless walk-in showers. We ensure perfect slopes, aligned layout grids, and premium niche integrations.",
    bullets: [
      "Custom niche and shelf builds",
      "Screeding and correct falls to floor wastes",
      "Large-format porcelain and ceramic wall matching",
      "Compliant wet area finishes"
    ],
  },
  {
    title: "Floor Tiling",
    image: "/portfolio/project-4.jpeg",
    desc: "Premium living space, hallway, and bedroom floor tiling. We handle full levelling checks, sound-proof acoustic underlays, and laying of marble, slate, porcelain, or timber-look planks.",
    bullets: [
      "Large-format tile levelling systems",
      "Sound-proofing acoustic barrier layers",
      "Expansion joint placements to prevent cracking",
      "Timber-look tile laying experts"
    ],
  },
  {
    title: "Wall Tiling",
    image: "/portfolio/project-10.jpeg",
    desc: "Feature walls, laundry walls, and accent panels. We use precision spacers and laser alignment lines to deliver flawless joint lines and uniform adhesive bonding.",
    bullets: [
      "Laser-guided alignment",
      "Decorative feature wall panels",
      "Bevelled-edge subway and mosaic tiling",
      "Premium trim profiles (silver, brass, black)"
    ],
  },
  {
    title: "Kitchen Splashbacks",
    image: "/portfolio/project-5.jpeg",
    desc: "The focal point of your kitchen. We install splashbacks in a wide range of styles: mosaic grids, subway stacks, herringbone formats, or large porcelain sheets.",
    bullets: [
      "Precision cuts around power sockets",
      "Herringbone, chevron, and custom pattern laying",
      "High-grade sanitary silicone seals",
      "Heat-resistant adhesive layouts"
    ],
  },
  {
    title: "Outdoor & Patio Tiling",
    image: "/portfolio/project-13.jpeg",
    desc: "Laying slip-resistant outdoor tiles that withstand elements. We pay critical attention to correct falls, outdoor expansion points, and weather-proof grouts.",
    bullets: [
      "Correct fall angles for heavy rain run-off",
      "Slip-resistant porcelain and stone options",
      "High-durability external adhesive coatings",
      "Efflorescence prevention measures"
    ],
  },
  {
    title: "Waterproofing Compliance (AS 3740)",
    image: "/portfolio/project-7.jpeg",
    desc: "The most important stage of any wet area project. Najib is fully certified in waterproofing application, guaranteeing zero water penetration into structural timbers.",
    bullets: [
      "Compliant with Australian Standard AS 3740",
      "Premium polyurethane waterproof membranes",
      "Bond breaker tape in critical joints",
      "Waterproofing certificate provided for insurance"
    ],
  },
  {
    title: "Tile Repair & Regrouting",
    image: "/portfolio/project-12.jpeg",
    desc: "Restoring old tiles. We cleanly remove mouldy, cracked grout and replace it with high-grade epoxy or polymer grouts, making your shower look brand new.",
    bullets: [
      "Clean mechanical grout removal",
      "Epoxy grout upgrades for chemical resistance",
      "Individual cracked tile replacements",
      "Sanitary silicone seal refreshes"
    ],
  },
];

export default function Services() {
  return (
    <div className="w-full">
      
      {/* Banner / Header */}
      <section className="bg-brand-charcoal text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio/project-11.jpeg"
            alt="Tiler cutting tile"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-brand-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Our Tiling Services</h1>
          <p className="text-sm sm:text-lg text-brand-silver max-w-xl mx-auto leading-relaxed">
            Professional tiling solutions for bathrooms, kitchens, living zones, and external areas.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-20">
            {services.map((service, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
                    isEven ? "" : "lg:flex-row-reverse"
                  }`}
                >
                  {/* Service Image */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="relative w-full lg:w-1/2 h-[300px] sm:h-[400px] rounded-2xl overflow-hidden shadow-lg border border-slate-100"
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover"
                    />
                  </motion.div>

                  {/* Service Details */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full lg:w-1/2 flex flex-col gap-5"
                  >
                    <h2 className="text-2xl font-black text-slate-900 tracking-tight leading-tight">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 text-sm leading-relaxed">
                      {service.desc}
                    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-600">
                          <Check className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100 mt-4">
                      <Link
                        href={`/quote?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center justify-center bg-brand-blue hover:bg-brand-blue-hover text-white text-xs font-bold px-6 py-3 rounded-lg shadow-sm transition-colors"
                      >
                        <span>Book Free Quote</span>
                        <ChevronRight size={12} className="ml-1" />
                      </Link>
                      <a
                        href="tel:0468372835"
                        className="inline-flex items-center justify-center border border-slate-200 hover:bg-slate-50 text-slate-800 text-xs font-bold px-6 py-3 rounded-lg transition-colors"
                      >
                        <Phone size={12} className="mr-2" />
                        <span>0468 372 835</span>
                      </a>
                    </div>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quote Banner */}
      <section className="py-20 bg-slate-50 border-t border-slate-100 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-black text-slate-900 tracking-tight">Need a Bespoke Tiling Solution?</h2>
          <p className="mt-3 text-sm text-slate-500 max-w-xl mx-auto leading-relaxed">
            If you have unique architectural requirements, complex tile patterns, or commercial fit-out projects, we can supply specialized layouts.
          </p>
          <div className="mt-8">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center bg-slate-900 hover:bg-slate-800 text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-colors"
            >
              Get Started Online
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
