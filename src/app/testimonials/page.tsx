"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, MessageSquare, CheckCircle, Quote } from "lucide-react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

interface ReviewFormValues {
  name: string;
  suburb: string;
  rating: number;
  service: string;
  reviewText: string;
}

const initialTestimonials = [
  {
    id: 1,
    name: "Daniel K.",
    suburb: "South Yarra",
    rating: 5,
    service: "Bathroom Renovation",
    text: "Najib did an incredible job tiling our bathroom. The levelling is absolutely perfect, and the custom niches look fantastic. Highly recommend NJ Pro Tiling!",
    image: "/portfolio/project-1.jpeg",
  },
  {
    id: 2,
    name: "Sarah M.",
    suburb: "Brunswick",
    rating: 5,
    service: "Kitchen Splashback",
    text: "Very professional team. They turned up exactly on time, laid down protective sheets, and finished our splashback in a day. Spotless clean-up afterwards.",
    image: "/portfolio/project-5.jpeg",
  },
  {
    id: 3,
    name: "Marcus L.",
    suburb: "St Kilda",
    rating: 5,
    service: "Outdoor Patio Tiling",
    text: "Flawless outdoor tiling for our new patio. NJ Pro Tiling ensured correct falls for drainage. Will be using them for our upcoming laundry renovation.",
    image: "/portfolio/project-13.jpeg",
  },
  {
    id: 4,
    name: "Jessica H.",
    suburb: "Fitzroy",
    rating: 5,
    service: "Floor Tiling",
    text: "Professional, fast, and competitive rates. Najib replaced our living room tiles with large format porcelain. The lines are dead straight and flat. Highly recommended!",
    image: "/portfolio/project-4.jpeg",
  },
  {
    id: 5,
    name: "Ahmad F.",
    suburb: "Coburg",
    rating: 5,
    service: "Waterproofing & Bathroom Repairs",
    text: "Had a leak from our shower recess. Najib identified the issues, redid the waterproofing membrane, and tiled it beautifully. Highly skilled in waterproofing standards.",
    image: "/portfolio/project-7.jpeg",
  },
];

export default function Testimonials() {
  const [reviews, setReviews] = useState(initialTestimonials);
  const [submitted, setSubmitted] = useState(false);
  const [formRating, setFormRating] = useState(5);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ReviewFormValues>({
    defaultValues: {
      rating: 5,
      service: "Bathroom Renovation",
    },
  });

  const onSubmit = (data: ReviewFormValues) => {
    // Generate a mock project image for the new review from existing portfolio images
    const mockImage = `/portfolio/project-${Math.floor(Math.random() * 14) + 1}.jpeg`;
    
    const newReview = {
      id: reviews.length + 1,
      name: data.name,
      suburb: data.suburb,
      rating: Number(formRating),
      service: data.service,
      text: data.reviewText,
      image: mockImage,
    };

    setReviews([newReview, ...reviews]);
    setSubmitted(true);
    reset();
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };

  return (
    <div className="w-full bg-slate-50">
      
      {/* Banner / Header */}
      <section className="bg-brand-charcoal text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio/project-3.jpeg"
            alt="Polished tile bathroom wall"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-brand-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Reviews & Testimonials</h1>
          <p className="text-sm sm:text-lg text-brand-silver max-w-xl mx-auto leading-relaxed">
            Read what our clients say about Najib's premium craftsmanship and tiling precision.
          </p>
        </div>
      </section>

      {/* Main content grid: Reviews and review form */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
            
            {/* Review Form - 1 Column */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/80 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xl font-black text-slate-900 tracking-tight mb-2">Leave a Review</h2>
              <p className="text-xs text-slate-500 mb-6 leading-relaxed">
                Had tiling work done by NJ Pro Tiling? We appreciate your honest feedback!
              </p>

              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl text-center text-emerald-800"
                  >
                    <CheckCircle className="w-12 h-12 text-emerald-500 mx-auto mb-3" />
                    <h3 className="font-bold text-sm mb-1.5">Review Submitted!</h3>
                    <p className="text-xs leading-relaxed text-emerald-700">
                      Thank you for reviewing NJ Pro Tiling. Your feedback helps us maintain our quality standards.
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
                        placeholder="e.g. John Doe"
                        {...register("name", { required: "Name is required" })}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                          errors.name ? "border-red-300 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.name && <span className="text-xs text-red-500 mt-1 block">{errors.name.message}</span>}
                    </div>

                    {/* Suburb */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Suburb (VIC)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Richmond"
                        {...register("suburb", { required: "Suburb is required" })}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                          errors.suburb ? "border-red-300 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.suburb && <span className="text-xs text-red-500 mt-1 block">{errors.suburb.message}</span>}
                    </div>

                    {/* Rating */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-2">
                        Rating (1-5 Stars)
                      </label>
                      <div className="flex gap-1.5 text-slate-300">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            key={star}
                            type="button"
                            onClick={() => setFormRating(star)}
                            className={`p-1 hover:scale-110 transition-transform ${
                              star <= formRating ? "text-amber-400" : ""
                            }`}
                          >
                            <Star className="w-6 h-6 fill-current" />
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Service */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Service Completed
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
                        <option>Waterproofing Recess</option>
                        <option>Regrouting & Repairs</option>
                      </select>
                    </div>

                    {/* Review text */}
                    <div>
                      <label className="block text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1.5">
                        Your Review
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Write your review details here..."
                        {...register("reviewText", { required: "Review text is required" })}
                        className={`w-full px-4 py-2.5 rounded-lg border text-sm focus:outline-none focus:ring-1 focus:ring-brand-blue ${
                          errors.reviewText ? "border-red-300 bg-red-50/20" : "border-slate-200"
                        }`}
                      />
                      {errors.reviewText && <span className="text-xs text-red-500 mt-1 block">{errors.reviewText.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white rounded-lg font-bold text-sm shadow-sm transition-colors mt-2"
                    >
                      Submit Review
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>

            {/* Testimonials List - 2 Columns */}
            <div className="lg:col-span-2 space-y-6">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white rounded-2xl border border-slate-200/60 shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row gap-6 items-start"
                >
                  {/* Photo of Completed Job */}
                  <div className="relative w-full sm:w-44 h-36 rounded-xl overflow-hidden shrink-0 border border-slate-100 shadow-inner select-none bg-slate-900">
                    <Image
                      src={rev.image}
                      alt={`${rev.service} project photo`}
                      fill
                      sizes="(max-width: 768px) 100vw, 200px"
                      className="object-cover"
                    />
                  </div>

                  {/* Review Text Area */}
                  <div className="flex-grow flex flex-col gap-3 justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex gap-0.5 text-amber-400">
                          {[...Array(rev.rating)].map((_, i) => (
                            <Star key={i} size={15} className="fill-current" />
                          ))}
                        </div>
                        <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 bg-slate-100 py-0.5 px-2 rounded">
                          {rev.service}
                        </span>
                      </div>
                      
                      <div className="relative mt-3">
                        <Quote size={24} className="absolute -top-2.5 -left-2 text-slate-100 rotate-180 z-0 shrink-0" />
                        <p className="text-slate-600 text-sm leading-relaxed relative z-10 italic">
                          "{rev.text}"
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-4 border-t border-slate-50 mt-2 text-slate-500">
                      <span className="font-extrabold text-slate-900 text-sm">{rev.name}</span>
                      <span>{rev.suburb}, VIC</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
