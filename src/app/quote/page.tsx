"use client";

import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Phone, MessageCircle, Award, CheckCircle2, ChevronRight, Upload } from "lucide-react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

interface QuoteFormValues {
  name: string;
  email: string;
  phone: string;
  suburb: string;
  projectType: string;
  dimensions: string;
  timeline: string;
  details: string;
  photos?: FileList;
}

function QuoteFormContent() {
  const searchParams = useSearchParams();
  const [submitted, setSubmitted] = useState(false);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm<QuoteFormValues>({
    defaultValues: {
      projectType: "Bathroom Renovation",
      timeline: "ASAP (Within 2 weeks)",
    },
  });

  // Pull service parameter from URL
  useEffect(() => {
    const serviceParam = searchParams.get("service");
    if (serviceParam) {
      if (serviceParam.includes("Floor")) setValue("projectType", "Floor Tiling");
      else if (serviceParam.includes("Wall")) setValue("projectType", "Wall Tiling");
      else if (serviceParam.includes("Kitchen") || serviceParam.includes("Splashback")) setValue("projectType", "Kitchen Splashback");
      else if (serviceParam.includes("Outdoor") || serviceParam.includes("Patio")) setValue("projectType", "Outdoor & Patio Tiling");
      else if (serviceParam.includes("Waterproofing")) setValue("projectType", "Waterproofing");
      else if (serviceParam.includes("Repair") || serviceParam.includes("Grout")) setValue("projectType", "Regrouting & Repairs");
      else setValue("projectType", "Bathroom Renovation");
    }
  }, [searchParams, setValue]);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedFileName(`${e.target.files.length} file(s) selected`);
    } else {
      setSelectedFileName(null);
    }
  };

  const onSubmit = (data: QuoteFormValues) => {
    console.log("Detailed quote request data:", data);
    setSubmitted(true);
    reset();
    setSelectedFileName(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            src="/portfolio/project-11.jpeg"
            alt="Measuring tiles"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-brand-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4 font-sans">Request a Free Quote</h1>
          <p className="text-sm sm:text-lg text-brand-silver max-w-xl mx-auto leading-relaxed">
            Provide details of your project dimensions and site location below. Najib will prepare a detailed cost estimate.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            
            {/* Form Section - 2 Columns */}
            <div className="lg:col-span-2 bg-white p-8 sm:p-12 rounded-2xl border border-slate-200/60 shadow-sm">
              
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-emerald-50 border border-emerald-200 p-8 rounded-xl text-center text-emerald-800"
                  >
                    <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                    <h3 className="text-lg font-bold mb-2">Quote Request Received!</h3>
                    <p className="text-sm leading-relaxed text-emerald-700 max-w-md mx-auto">
                      Thank you. Najib will review the project specifications and phone or email you within 24 hours. We may schedule a brief site visit if required.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    
                    {/* Basic Contact Info Header */}
                    <div className="border-b border-slate-100 pb-4 mb-4">
                      <h3 className="font-bold text-slate-800 text-base">1. Contact Information</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                          Full Name
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
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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

                      {/* Suburb */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                          Project Suburb
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. South Yarra, Melbourne"
                          {...register("suburb", { required: "Project suburb/location is required" })}
                          className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                            errors.suburb ? "border-red-300 bg-red-50/20" : "border-slate-200"
                          }`}
                        />
                        {errors.suburb && <span className="text-xs text-red-500 mt-1 block">{errors.suburb.message}</span>}
                      </div>
                    </div>

                    {/* Project Specifications Header */}
                    <div className="border-b border-slate-100 pb-4 pt-4 mb-4">
                      <h3 className="font-bold text-slate-800 text-base">2. Project Specifications</h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Project Type */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                          Project Scope
                        </label>
                        <select
                          {...register("projectType")}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white"
                        >
                          <option>Bathroom Renovation</option>
                          <option>Floor Tiling</option>
                          <option>Wall Tiling</option>
                          <option>Kitchen Splashback</option>
                          <option>Outdoor & Patio Tiling</option>
                          <option>Waterproofing</option>
                          <option>Regrouting & Repairs</option>
                        </select>
                      </div>

                      {/* Estimated Dimensions */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                          Estimated Area Size (m² / Sq M)
                        </label>
                        <input
                          type="text"
                          placeholder="e.g. 15 m²"
                          {...register("dimensions", { required: "Estimated area size is required" })}
                          className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                            errors.dimensions ? "border-red-300 bg-red-50/20" : "border-slate-200"
                          }`}
                        />
                        {errors.dimensions && <span className="text-xs text-red-500 mt-1 block">{errors.dimensions.message}</span>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Timeline */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                          Project Urgency
                        </label>
                        <select
                          {...register("timeline")}
                          className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue bg-white"
                        >
                          <option>ASAP (Within 2 weeks)</option>
                          <option>Within 1 Month</option>
                          <option>Within 2 - 3 Months</option>
                          <option>Flexible / Planning Phase</option>
                        </select>
                      </div>

                      {/* Photo upload mock */}
                      <div>
                        <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                          Attach Existing Space Photos
                        </label>
                        <div className="relative w-full h-[46px] rounded-lg border border-slate-200 flex items-center justify-between px-4 bg-slate-50/50 hover:bg-slate-50 transition-colors select-none cursor-pointer">
                          <span className="text-xs text-slate-500 font-medium overflow-hidden whitespace-nowrap text-ellipsis max-w-[170px]">
                            {selectedFileName || "Upload images of space"}
                          </span>
                          <Upload size={16} className="text-slate-400 shrink-0" />
                          <input
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={onFileChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Project Details text */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Describe Project Details & Tile Type
                      </label>
                      <textarea
                        rows={5}
                        placeholder="Please specify if you already have the tiles, preferred formats (e.g. 600x600 porcelain), or special details like niche builds or waterproofing scope..."
                        {...register("details", { required: "Project details are required" })}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                          errors.details ? "border-red-300 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.details && <span className="text-xs text-red-500 mt-1 block">{errors.details.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 bg-brand-blue hover:bg-brand-blue-hover text-white rounded-xl font-bold text-sm shadow-lg shadow-brand-blue/15 transition-all flex items-center justify-center gap-2 mt-4"
                    >
                      <span>Submit Detailed Quote Request</span>
                      <ChevronRight size={16} />
                    </button>

                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Trust sidebar - 1 Column */}
            <div className="flex flex-col gap-6 lg:col-span-1">
              
              {/* Trust badges sidebar */}
              <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col gap-6">
                <h3 className="font-bold text-slate-800 text-sm tracking-wide uppercase border-l-2 border-brand-blue pl-3">
                  Why Work With Us
                </h3>
                
                <ul className="space-y-6 text-slate-600 text-xs leading-relaxed">
                  <li className="flex gap-3">
                    <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-900 mb-0.5">Licensed & Registered Contractor</span>
                      <span>Compliant with Victorian waterproofing standards and codes.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-900 mb-0.5">Guaranteed Waterproofing</span>
                      <span>Certified membrane installations compliant with AS 3740.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 size={16} className="text-brand-blue shrink-0 mt-0.5" />
                    <div>
                      <span className="block font-bold text-slate-900 mb-0.5">Detailed Line-Item Estimates</span>
                      <span>Clear costs mapping screeding, waterproofing, laying, and adhesives.</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Alternative details */}
              <div className="bg-brand-charcoal text-white p-8 rounded-2xl border border-white/5 shadow-sm flex flex-col gap-5">
                <h3 className="font-bold text-base">Alternative Options</h3>
                <p className="text-xs text-brand-silver leading-relaxed">
                  Prefer discussing details over the phone or sending project photos via chat? WhatsApp Najib directly.
                </p>
                <a
                  href="tel:0468372835"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-white text-slate-900 rounded-lg text-xs font-bold shadow-sm transition-colors"
                >
                  <Phone size={14} />
                  <span>Call 0468 372 835</span>
                </a>
                <a
                  href="https://wa.me/61468372835"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 bg-emerald-500 text-white rounded-lg text-xs font-bold shadow-sm hover:bg-emerald-600 transition-colors"
                >
                  <MessageCircle size={14} className="fill-current" />
                  <span>WhatsApp Najib</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default function GetQuote() {
  return (
    <Suspense
      fallback={
        <div className="min-h-[70vh] flex items-center justify-center bg-slate-50">
          <div className="text-center font-semibold text-slate-500 animate-pulse">
            Loading Quote Form...
          </div>
        </div>
      }
    >
      <QuoteFormContent />
    </Suspense>
  );
}
