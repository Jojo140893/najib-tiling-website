"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Eye, Maximize2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Lightbox from "@/components/Lightbox";
import ReelShowcase from "@/components/ReelShowcase";
import GridVideo from "@/components/GridVideo";

// Media dataset mapped from public/portfolio
const mediaItems = [
  { id: 1, type: "image" as const, src: "/portfolio/project-1.jpeg", category: "bathrooms", title: "Luxury Ensuite Tiling" },
  { id: 2, type: "image" as const, src: "/portfolio/project-2.jpeg", category: "bathrooms", title: "Custom Shower Layout" },
  { id: 3, type: "image" as const, src: "/portfolio/project-3.jpeg", category: "bathrooms", title: "Marble Wall Tiling" },
  { id: 4, type: "image" as const, src: "/portfolio/project-4.jpeg", category: "floors", title: "Large Format Floor Porcelain" },
  { id: 5, type: "image" as const, src: "/portfolio/project-5.jpeg", category: "kitchens", title: "Herringbone Kitchen Splashback" },
  { id: 6, type: "image" as const, src: "/portfolio/project-6.jpeg", category: "floors", title: "Living Room Screed & Finish" },
  { id: 7, type: "image" as const, src: "/portfolio/project-7.jpeg", category: "bathrooms", title: "Shower Waterproofing Membrane" },
  { id: 8, type: "image" as const, src: "/portfolio/project-8.jpeg", category: "kitchens", title: "Bevelled Subway Splashback" },
  { id: 9, type: "image" as const, src: "/portfolio/project-9.jpeg", category: "commercial", title: "Office Reception Wall" },
  { id: 10, type: "image" as const, src: "/portfolio/project-10.jpeg", category: "commercial", title: "Retail Shopfront Tiling" },
  { id: 11, type: "image" as const, src: "/portfolio/project-11.jpeg", category: "bathrooms", title: "Bathroom Niche & Grouting" },
  { id: 12, type: "image" as const, src: "/portfolio/project-12.jpeg", category: "commercial", title: "Restaurant Kitchen Refurb" },
  { id: 13, type: "image" as const, src: "/portfolio/project-13.jpeg", category: "outdoor", title: "External Patio Non-slip Stone" },
  { id: 14, type: "image" as const, src: "/portfolio/project-14.jpeg", category: "outdoor", title: "Pool Surrounds Levelling" },
  
  // Videos
  { id: 15, type: "video" as const, src: "/portfolio/video-1.mp4", category: "bathrooms", title: "Walk-in Shower Finish (Video)" },
  { id: 16, type: "video" as const, src: "/portfolio/video-2.mp4", category: "floors", title: "Screed Levelling Flow Check (Video)" },
  { id: 17, type: "video" as const, src: "/portfolio/video-3.mp4", category: "bathrooms", title: "Wall Tile Joint Alignment (Video)" },
  { id: 18, type: "video" as const, src: "/portfolio/video-4.mp4", category: "kitchens", title: "Splashback Silicone Sealing (Video)" },
  { id: 19, type: "video" as const, src: "/portfolio/video-5.mp4", category: "outdoor", title: "Outdoor fall inspection (Video)" },
  { id: 20, type: "video" as const, src: "/portfolio/video-6.mp4", category: "commercial", title: "Epoxy Grouting Final Look (Video)" },
];

const categories = [
  { id: "all", label: "All Work" },
  { id: "bathrooms", label: "Bathrooms" },
  { id: "kitchens", label: "Kitchens" },
  { id: "floors", label: "Floors" },
  { id: "outdoor", label: "Outdoor" },
  { id: "commercial", label: "Commercial" },
];

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxState, setLightboxState] = useState<{
    isOpen: boolean;
    mediaType: "image" | "video";
    src: string;
    index: number;
  }>({
    isOpen: false,
    mediaType: "image",
    src: "",
    index: 0,
  });

  const filteredMedia = mediaItems.filter(
    (item) => activeCategory === "all" || item.category === activeCategory
  );

  const openLightbox = (index: number) => {
    const item = filteredMedia[index];
    setLightboxState({
      isOpen: true,
      mediaType: item.type,
      src: item.src,
      index,
    });
  };

  const handleNext = () => {
    const nextIndex = (lightboxState.index + 1) % filteredMedia.length;
    const item = filteredMedia[nextIndex];
    setLightboxState({
      isOpen: true,
      mediaType: item.type,
      src: item.src,
      index: nextIndex,
    });
  };

  const handlePrev = () => {
    const prevIndex =
      (lightboxState.index - 1 + filteredMedia.length) % filteredMedia.length;
    const item = filteredMedia[prevIndex];
    setLightboxState({
      isOpen: true,
      mediaType: item.type,
      src: item.src,
      index: prevIndex,
    });
  };

  return (
    <div className="w-full bg-slate-50">
      
      {/* Banner / Header */}
      <section className="bg-brand-charcoal text-white py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/portfolio/project-12.jpeg"
            alt="Tiled wall close up"
            fill
            sizes="100vw"
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-brand-charcoal/80" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-4">Project Portfolio</h1>
          <p className="text-sm sm:text-lg text-brand-silver max-w-xl mx-auto leading-relaxed">
            Real photos and videos from tiling projects we've completed across Sydney.
          </p>
        </div>
      </section>

      {/* Work in Action — real scroll-autoplay reels from the client's job sites */}
      <ReelShowcase />

      {/* Filterable Media Grid */}
      <section className="py-24 border-t border-slate-100 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Filtering Links */}
          <div className="flex flex-wrap justify-center gap-2.5 mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide transition-all border ${
                  activeCategory === cat.id
                    ? "bg-brand-blue text-white border-brand-blue shadow-md shadow-brand-blue/15"
                    : "bg-white text-slate-600 border-slate-200 hover:border-slate-300"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Media Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredMedia.map((item, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={item.id}
                  onClick={() => openLightbox(idx)}
                  className="bg-white rounded-2xl overflow-hidden border border-slate-200/60 shadow-sm hover:shadow-lg hover:border-slate-300/80 transition-all cursor-pointer group flex flex-col h-full"
                >
                  {/* Media Visual Area */}
                  <div className="relative h-64 overflow-hidden bg-slate-900 flex items-center justify-center shrink-0 select-none">
                    {item.type === "image" ? (
                      <Image
                        src={item.src}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 400px"
                        className="object-cover group-hover:scale-103 transition-transform duration-500"
                      />
                    ) : (
                      <>
                        <GridVideo
                          src={item.src}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                        />
                        <div className="absolute bottom-3 left-3 z-10 flex items-center gap-1.5 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                          <Play size={10} className="fill-current" />
                          <span>Video</span>
                        </div>
                      </>
                    )}

                    {/* Overlay Action Icon */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-slate-800 shadow-md">
                        {item.type === "image" ? <Maximize2 size={16} /> : <Play size={16} className="fill-current text-brand-blue ml-0.5" />}
                      </div>
                    </div>
                  </div>

                  {/* Media Caption */}
                  <div className="p-5 flex-grow flex items-center justify-between border-t border-slate-100">
                    <span className="font-bold text-slate-800 text-sm tracking-wide leading-tight group-hover:text-brand-blue transition-colors">
                      {item.title}
                    </span>
                    <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 bg-slate-100 py-1 px-2.5 rounded-md shrink-0">
                      {item.category}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxState.isOpen}
        onClose={() => setLightboxState({ ...lightboxState, isOpen: false })}
        mediaType={lightboxState.mediaType}
        src={lightboxState.src}
        onNext={handleNext}
        onPrev={handlePrev}
        hasMultiple={filteredMedia.length > 1}
      />

    </div>
  );
}
