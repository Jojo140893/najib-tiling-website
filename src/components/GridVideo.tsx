"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Lightweight autoplay-on-scroll video for the portfolio grid cards.
 * Plays (muted, looping) while it is in view and pauses when it leaves.
 * Has no click handler of its own, so the parent card's click still opens
 * the lightbox (where the video plays full-screen with sound + controls).
 */
export default function GridVideo({
  src,
  poster,
  className = "",
}: {
  src: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const v = ref.current;
    if (!v || reduced) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.4) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      },
      { threshold: [0, 0.4, 1] }
    );
    observer.observe(v);
    return () => observer.disconnect();
  }, [reduced]);

  return (
    <video
      ref={ref}
      src={src}
      poster={poster}
      muted
      loop
      playsInline
      preload="metadata"
      className={className}
    />
  );
}
