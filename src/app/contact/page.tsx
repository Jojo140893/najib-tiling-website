"use client";

import { useState } from "react";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Award, ShieldCheck, CheckCircle2, Send, MessageCircle } from "lucide-react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      service: "Bathroom Renovation",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    // Form submission simulation.
    // In production, this can be wired to a Next.js route or Formspree endpoint.
    console.log("Contact form submitted data:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => {
      setSubmitted(false);
    }, 6000);
  };

  return (
    <div className="w-full bg-slate-50">
      
      {/* Banner / Header */}
      <section className="bg-brand-charcoal text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio/project-9.jpeg"
            alt="Tile feature wall reception"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-brand-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Contact Us</h1>
          <p className="text-sm sm:text-lg text-brand-silver max-w-xl mx-auto leading-relaxed">
            Get in touch with Najib for expert tiling consultation, site measures, and free quotes.
          </p>
        </div>
      </section>

      {/* Main Grid: Details, Form, Service Zone Map */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            
            {/* Quick Contact & Info Details (1 Column) */}
            <div className="flex flex-col gap-8 lg:col-span-1">
              
              {/* Contact Channels Card */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-6">
                <h2 className="text-xl font-black text-slate-900 tracking-tight">Direct Channels</h2>
                <div className="w-10 h-1 bg-brand-blue rounded-full" />
                
                <div className="flex flex-col gap-5 text-sm text-slate-600">
                  {/* Phone Call */}
                  <a
                    href="tel:0468372835"
                    className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                      <Phone size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Phone Call</span>
                      <span className="font-bold text-slate-900 text-sm group-hover:text-brand-blue transition-colors">
                        0468 372 835
                      </span>
                    </div>
                  </a>

                  {/* WhatsApp Message */}
                  <a
                    href="https://wa.me/61468372835"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-emerald-100 hover:border-emerald-200 hover:bg-emerald-50/30 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <MessageCircle size={18} className="fill-current" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-emerald-600/70 uppercase tracking-wider">WhatsApp chat</span>
                      <span className="font-bold text-slate-900 text-sm group-hover:text-emerald-600 transition-colors">
                        Start Chat Now
                      </span>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:info@njprotiling.com.au"
                    className="flex items-center gap-4 p-3 rounded-xl border border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 transition-all group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-brand-blue/5 text-brand-blue flex items-center justify-center shrink-0">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-slate-400 uppercase tracking-wider">Email Address</span>
                      <span className="font-bold text-slate-900 text-sm group-hover:text-brand-blue transition-colors">
                        info@njprotiling.com.au
                      </span>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business details card */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-6">
                <h2 className="text-base font-bold text-slate-900 uppercase tracking-wider">Licence & Hours</h2>
                <ul className="space-y-4 text-xs text-slate-600">
                  <li className="flex items-start gap-3">
                    <Clock size={16} className="text-brand-blue shrink-0 mt-0.5" />
                    <div className="flex flex-col">
                      <span className="font-semibold text-slate-900">Mon - Sat: 7:00 AM - 5:30 PM</span>
                      <span>Sunday: Closed (Available by appointment)</span>
                    </div>
                  </li>
                  <li className="flex items-center gap-3">
                    <Award size={16} className="text-brand-blue shrink-0" />
                    <span>Licensed & Fully Insured Tiling Contractor</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <ShieldCheck size={16} className="text-brand-blue shrink-0" />
                    <span>ABN: 84 928 371 049 (Fully Insured)</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Contact Form Container (1 Column) */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200/60 shadow-sm lg:col-span-1">
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-2">Send a Message</h2>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Have questions or want to discuss details? Complete the form and Najib will get back to you within 24 hours.
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center text-emerald-800"
                  >
                    <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                    <h3 className="font-bold text-sm mb-1.5">Message Sent Successfully!</h3>
                    <p className="text-xs leading-relaxed text-emerald-700">
                      Thank you for contacting NJ Pro Tiling. Najib will phone or email you shortly.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                          errors.name ? "border-red-300 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="john@example.com"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                            message: "Invalid email address",
                          },
                        })}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                          errors.email ? "border-red-300 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.email && <span className="text-xs text-red-500 mt-1 block">{errors.email.message}</span>}
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="04xx xxx xxx"
                        {...register("phone", { required: "Phone number is required" })}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                          errors.phone ? "border-red-300 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.phone && <span className="text-xs text-red-500 mt-1 block">{errors.phone.message}</span>}
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Service Needed
                      </label>
                      <select
                        {...register("service")}
                        className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white"
                      >
                        <option>Bathroom Renovation</option>
                        <option>Floor Tiling</option>
                        <option>Wall Tiling</option>
                        <option>Kitchen Splashback</option>
                        <option>Outdoor & Patio Tiling</option>
                        <option>Waterproofing</option>
                        <option>Tile Repairs & Grouting</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Message Details
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Describe your project, size estimate, and questions..."
                        {...register("message", { required: "Message is required" })}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                          errors.message ? "border-red-300 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.message && <span className="text-xs text-red-500 mt-1 block">{errors.message.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-lg font-bold text-sm shadow-md shadow-brand-blue/15 transition-all flex items-center justify-center gap-2"
                    >
                      <Send size={14} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Service Area Zone Map (1 Column) */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm lg:col-span-1 flex flex-col gap-6">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">Our Service Area</h2>
              <p className="text-xs text-slate-500 leading-relaxed">
                NJ Pro Tiling is based in Melbourne, VIC. We service the entire Melbourne Metropolitan Area, including:
              </p>
              
              {/* Melbourne Suburbs Listing */}
              <div className="grid grid-cols-2 gap-3 text-xs font-semibold text-slate-700">
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>Melbourne CBD</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>Eastern Suburbs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>Northern Suburbs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>Western Suburbs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>Southeastern Suburbs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue shrink-0" />
                  <span>Mornington Peninsula</span>
                </div>
              </div>

              {/* Service Zone Graphic Map (Styled SVG Mock representing Melbourne service radius) */}
              <div className="relative w-full h-[220px] bg-slate-100 rounded-xl overflow-hidden flex items-center justify-center border border-slate-200">
                <svg className="w-full h-full text-slate-300" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Mock rivers and roads grid */}
                  <path d="M 0 45 Q 35 48 50 65 T 100 70" stroke="#cbd5e1" strokeWidth="2.5" />
                  <path d="M 30 0 L 30 100" stroke="#e2e8f0" strokeWidth="0.8" />
                  <path d="M 65 0 L 65 100" stroke="#e2e8f0" strokeWidth="0.8" />
                  <path d="M 0 30 L 100 30" stroke="#e2e8f0" strokeWidth="0.8" />
                  <path d="M 0 75 L 100 75" stroke="#e2e8f0" strokeWidth="0.8" />
                  
                  {/* Service Zone Outer Radius */}
                  <circle cx="50" cy="50" r="38" fill="#0066FF" fillOpacity="0.04" stroke="#0066FF" strokeWidth="1" strokeDasharray="3 3" />
                  
                  {/* Service Zone Core Radius */}
                  <circle cx="50" cy="50" r="24" fill="#0066FF" fillOpacity="0.08" stroke="#0066FF" strokeWidth="1.5" />
                  
                  {/* Center Node (Melbourne Pin) */}
                  <circle cx="50" cy="50" r="4" fill="#0066FF" />
                  <circle cx="50" cy="50" r="8" stroke="#0066FF" strokeWidth="1.5" className="animate-ping" />
                </svg>
                
                {/* Visual Indicators */}
                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm py-1.5 px-3 rounded-lg border border-slate-200 text-[10px] font-bold text-slate-800 shadow-sm">
                  Active Service Area
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
