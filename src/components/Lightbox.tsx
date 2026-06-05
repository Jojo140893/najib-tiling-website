"use client";

import { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  mediaType: "image" | "video";
  src: string;
  onPrev?: () => void;
  onNext?: () => void;
  hasMultiple?: boolean;
}

export default function Lightbox({
  isOpen,
  onClose,
  mediaType,
  src,
  onPrev,
  onNext,
  hasMultiple = false,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8 animate-fade-in">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-50 p-2 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all"
        aria-label="Close lightbox"
      >
        <X size={28} />
      </button>

      {/* Navigation - Prev */}
      {hasMultiple && onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 p-2 md:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all z-40 bg-black/20"
          aria-label="Previous media"
        >
          <ChevronLeft size={36} />
        </button>
      )}

      {/* Media Wrapper */}
      <div
        className="relative max-w-5xl max-h-[85vh] w-full h-full flex items-center justify-center animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {mediaType === "image" ? (
          <div className="relative w-full h-full">
            <Image
              src={src}
              alt="Project portfolio fullscreen"
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </div>
        ) : (
          <div className="w-full h-full max-w-4xl max-h-[80vh] flex items-center justify-center">
            <video
              src={src}
              controls
              autoPlay
              className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/10"
              poster="/images/video-poster.jpg"
            />
          </div>
        )}
      </div>

      {/* Navigation - Next */}
      {hasMultiple && onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 p-2 md:p-3 text-white/80 hover:text-white hover:bg-white/10 rounded-full transition-all z-40 bg-black/20"
          aria-label="Next media"
        >
          <ChevronRight size={36} />
        </button>
      )}
    </div>
  );
}
