"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Maximize2 } from "lucide-react";
import ScrollVideo from "./ScrollVideo";
import Lightbox from "./Lightbox";

type ShowcaseItem =
  | { type: "video"; src: string; poster: string; caption: string }
  | { type: "photo"; src: string; caption: string };

/**
 * Real NJ Pro Tiling project media (downloaded from the client's Facebook).
 * Captions are based on the visible work — edit freely to match each job.
 */
const items: ShowcaseItem[] = [
  { type: "video", src: "/showcase/01_video.mp4", poster: "/showcase/01_video_poster.jpg", caption: "Bathroom Wall Tiling" },
  { type: "video", src: "/showcase/03_video.mp4", poster: "/showcase/03_video_poster.jpg", caption: "Epoxy Regrouting" },
  { type: "photo", src: "/showcase/04_photo.jpg", caption: "Finished Feature Wall" },
  { type: "video", src: "/showcase/05_video.mp4", poster: "/showcase/05_video_poster.jpg", caption: "Shower Niche & Wall Tiling" },
  { type: "video", src: "/showcase/06_video.mp4", poster: "/showcase/06_video_poster.jpg", caption: "Bathroom Tile Installation" },
  { type: "video", src: "/showcase/07_video.mp4", poster: "/showcase/07_video_poster.jpg", caption: "Large-Format Stone Tiling" },
  { type: "video", src: "/showcase/08_video.mp4", poster: "/showcase/08_video_poster.jpg", caption: "Subway Wall Tiling" },
  { type: "video", src: "/showcase/09_video.mp4", poster: "/showcase/09_video_poster.jpg", caption: "Precision Wall Tiling" },
  { type: "video", src: "/showcase/10_video.mp4", poster: "/showcase/10_video_poster.jpg", caption: "Floor Tiling over Waterproofing" },
  { type: "video", src: "/showcase/11_video.mp4", poster: "/showcase/11_video_poster.jpg", caption: "Shower Base & Waterproofing" },
  { type: "photo", src: "/showcase/12_photo.jpg", caption: "Wall Tiling In Progress" },
];

// photos get their own index list for the lightbox
const photos = items.filter((i) => i.type === "photo") as Extract<ShowcaseItem, { type: "photo" }>[];

export default function ReelShowcase() {
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  const openPhoto = (src: string) => {
    const index = photos.findIndex((p) => p.src === src);
    setLightbox({ open: true, index: Math.max(0, index) });
  };
  const next = () => setLightbox((s) => ({ ...s, index: (s.index + 1) % photos.length }));
  const prev = () => setLightbox((s) => ({ ...s, index: (s.index - 1 + photos.length) % photos.length }));

  return (
    <section className="bg-brand-charcoal py-24 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-2xl text-center">
          <h2 className="mb-3 text-xs font-extrabold uppercase tracking-widest text-brand-blue">
            Work in Action
          </h2>
          <h3 className="text-2xl font-black tracking-tight sm:text-4xl">
            Real Reels From Real Job Sites
          </h3>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-brand-silver">
            Straight from our projects — wall &amp; floor tiling, waterproofing, regrouting and
            finishing. Videos play as you scroll; tap any clip for sound.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-3 lg:grid-cols-4">
          {items.map((item, idx) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (idx % 4) * 0.05 }}
            >
              {item.type === "video" ? (
                <ScrollVideo
                  src={item.src}
                  poster={item.poster}
                  caption={item.caption}
                  className="shadow-lg ring-1 ring-white/10"
                />
              ) : (
                <button
                  onClick={() => openPhoto(item.src)}
                  className="group relative block aspect-[9/16] w-full overflow-hidden rounded-2xl bg-slate-900 shadow-lg ring-1 ring-white/10"
                  aria-label={`${item.caption} — open full screen`}
                >
                  <Image
                    src={item.src}
                    alt={item.caption}
                    fill
                    sizes="(max-width: 768px) 50vw, 320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur-sm transition-opacity group-hover:opacity-100">
                    <Maximize2 size={16} />
                  </span>
                  <span className="absolute inset-x-0 bottom-0 p-3.5 text-left text-sm font-semibold tracking-wide text-white drop-shadow">
                    {item.caption}
                  </span>
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <Lightbox
        isOpen={lightbox.open}
        onClose={() => setLightbox((s) => ({ ...s, open: false }))}
        mediaType="image"
        src={photos[lightbox.index]?.src ?? ""}
        onNext={next}
        onPrev={prev}
        hasMultiple={photos.length > 1}
      />
    </section>
  );
}
