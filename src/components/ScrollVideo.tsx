"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Volume2, VolumeX, Play } from "lucide-react";

interface ScrollVideoProps {
  src: string;
  poster?: string;
  caption?: string;
  /** Tailwind aspect ratio class, defaults to vertical reel 9:16 */
  aspectClass?: string;
  className?: string;
}

/**
 * Autoplaying, scroll-aware video for the work showcase.
 *  - plays (muted) automatically when it scrolls into view
 *  - pauses automatically when it scrolls out of view
 *  - muted by default; user can tap the speaker (or the video) to unmute
 *  - only ONE video plays sound at a time (others auto-mute)
 *  - respects prefers-reduced-motion (shows a manual play button instead)
 */
export default function ScrollVideo({
  src,
  poster,
  caption,
  aspectClass = "aspect-[9/16]",
  className = "",
}: ScrollVideoProps) {
  const id = useId();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  // keep the underlying element's muted prop in sync with state
  useEffect(() => {
    if (videoRef.current) videoRef.current.muted = isMuted;
  }, [isMuted]);

  // detect reduced-motion preference
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // only one video may have sound at a time
  useEffect(() => {
    const onSound = (e: Event) => {
      const detail = (e as CustomEvent<string>).detail;
      if (detail !== id) setIsMuted(true);
    };
    window.addEventListener("njpro:sound", onSound as EventListener);
    return () => window.removeEventListener("njpro:sound", onSound as EventListener);
  }, [id]);

  // scroll-driven play / pause
  useEffect(() => {
    const el = containerRef.current;
    const vid = videoRef.current;
    if (!el || !vid) return;
    if (reducedMotion) return; // no autoplay when reduced motion is requested

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          vid.play()
            .then(() => setIsPlaying(true))
            .catch(() => setIsPlaying(false));
        } else {
          vid.pause();
          setIsPlaying(false);
          // reset to muted when it leaves the screen so audio never lingers
          setIsMuted(true);
        }
      },
      { threshold: [0, 0.5, 1] }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [reducedMotion]);

  const toggleMute = () => {
    const next = !isMuted;
    setIsMuted(next);
    if (!next) {
      // tell every other ScrollVideo to mute itself
      window.dispatchEvent(new CustomEvent<string>("njpro:sound", { detail: id }));
      videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const manualPlay = () => {
    videoRef.current?.play().then(() => setIsPlaying(true)).catch(() => {});
  };

  return (
    <div
      ref={containerRef}
      className={`group relative overflow-hidden rounded-2xl bg-slate-900 ${aspectClass} ${className}`}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        loop
        muted
        playsInline
        preload="metadata"
        onClick={toggleMute}
        className="h-full w-full cursor-pointer object-cover"
        aria-label={caption ? `${caption} — tap to ${isMuted ? "unmute" : "mute"}` : "Project video"}
      />

      {/* soft gradient for caption legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/70 to-transparent" />

      {/* manual play button (reduced motion or autoplay blocked) */}
      {!isPlaying && (
        <button
          onClick={manualPlay}
          aria-label="Play video"
          className="absolute inset-0 z-10 flex items-center justify-center"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue text-white shadow-lg shadow-brand-blue/40 transition-transform group-hover:scale-105">
            <Play size={22} className="ml-1 fill-current" />
          </span>
        </button>
      )}

      {/* mute / unmute toggle */}
      <button
        onClick={toggleMute}
        aria-label={isMuted ? "Unmute video" : "Mute video"}
        className="absolute right-3 top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/45 text-white backdrop-blur-sm transition-all hover:bg-black/65"
      >
        {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
      </button>

      {/* caption */}
      {caption && (
        <div className="absolute inset-x-0 bottom-0 z-10 p-3.5">
          <span className="text-sm font-semibold tracking-wide text-white drop-shadow">
            {caption}
          </span>
        </div>
      )}
    </div>
  );
}
