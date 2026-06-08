"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Phone, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    q: "Which areas of Melbourne do you service?",
    a: "NJ Pro Tiling works across Melbourne and the surrounding metropolitan suburbs, covering residential and light-commercial projects. If you're unsure whether we cover your area, give us a quick call on 0468 372 835 and we'll let you know.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes. We hold full contractor licensing and carry full Public Liability insurance. Every job is completed to Australian Standards, including AS 3740 for waterproofing of wet areas.",
  },
  {
    q: "Do you offer free quotes?",
    a: "Absolutely. We provide free, obligation-free quotes. Send us your measurements and photos, or book a site visit, and we'll put together a clear, itemised quote with no hidden costs.",
  },
  {
    q: "What types of tiling do you do?",
    a: "Floor and wall tiling, bathroom renovations, kitchen splashbacks, outdoor and patio tiling, waterproofing, screeding and levelling, plus tile repairs and regrouting. We work with porcelain, ceramic, marble, natural stone, large-format and mosaic tiles.",
  },
  {
    q: "How long does a typical bathroom take?",
    a: "Most standard bathrooms take around 4–7 working days depending on size, waterproofing cure times, tile format and the complexity of the layout. We'll give you a realistic timeline up front and keep you updated throughout.",
  },
  {
    q: "Do you handle waterproofing?",
    a: "Yes. Correct waterproofing is critical in wet areas. We install compliant waterproofing membranes to AS 3740 before tiling, protecting your home from leaks and costly structural damage down the track.",
  },
  {
    q: "Do you supply the tiles or do I buy them?",
    a: "Either works. Many clients select and purchase their own tiles, and we're happy to advise on quantities, formats and suitability. We can also point you to trusted suppliers to help you get the right product for your space and budget.",
  },
  {
    q: "Is your work guaranteed?",
    a: "Yes. We stand behind our craftsmanship with a workmanship guarantee covering tile adhesion, levelling and the integrity of the waterproofing system, on top of any manufacturer warranties on the materials used.",
  },
  {
    q: "How do I get started?",
    a: "Call or message us on 0468 372 835, or request a quote through our online form. Tell us a bit about your project and we'll take it from there.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Banner / Header */}
      <section className="relative overflow-hidden bg-brand-charcoal py-20 text-center text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/showcase/04_photo.jpg"
            alt="Premium tiled wall by NJ Pro Tiling"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-brand-charcoal/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4">
          <h1 className="mb-4 text-3xl font-black tracking-tight sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-brand-silver sm:text-lg">
            Everything you need to know about working with NJ Pro Tiling — licensing, timelines,
            waterproofing and more.
          </p>
        </div>
      </section>

      {/* Accordion */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = open === idx;
              return (
                <div
                  key={idx}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                    isOpen ? "border-brand-blue/40 shadow-md" : "border-slate-200"
                  }`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-bold text-slate-900 sm:text-lg">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-brand-blue transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-slate-600">
                          {faq.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-2xl font-black tracking-tight text-slate-900 sm:text-3xl">
            Still have a question?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-slate-500">
            We're happy to help. Reach out and we'll get back to you with honest, expert advice.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="tel:0468372835"
              className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
            >
              <Phone size={16} className="mr-2" />
              Call 0468 372 835
            </a>
            <Link
              href="/quote"
              className="group inline-flex items-center justify-center rounded-xl bg-brand-blue px-7 py-3.5 text-sm font-bold text-white shadow-md shadow-brand-blue/20 transition-all hover:bg-brand-blue-hover"
            >
              Request a Free Quote
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
