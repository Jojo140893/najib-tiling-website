"use client";

// NJ Pro Tiling logo components — use the real diamond logo artwork.

// Emblem only (the diamond mark, no wordmark) — used in the hero, etc.
export function LogoMark({ className = "w-12 h-12" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-mark.png"
      alt="NJ Pro Tiling emblem"
      className={`object-contain ${className}`}
    />
  );
}

// Logo: "wordmark" = just the PRO TILING wordmark (nav bar); "full" = full lockup (footer)
export default function Logo({ variant = "full" }: { variant?: "full" | "wordmark" }) {
  if (variant === "wordmark") {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src="/logo-wordmark.png"
        alt="NJ Pro Tiling"
        className="h-8 w-auto"
      />
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo.svg"
      alt="NJ Pro Tiling — Quality Tiling, Professional Finish"
      className="h-14 w-auto"
    />
  );
}

// Vertical lockup (emblem + wordmark + phone) — available for large hero use
export function LogoVertical() {
  return (
    <div className="flex flex-col items-center text-center">
      <LogoMark className="w-48 h-48 drop-shadow-2xl" />

      <div className="mt-6">
        <h2 className="text-4xl sm:text-5xl font-black tracking-wider leading-none select-none flex items-center justify-center gap-1.5">
          <span className="bg-gradient-to-r from-brand-blue to-cyan-400 bg-clip-text text-transparent">PRO</span>
          <span className="text-white">TILING</span>
        </h2>

        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-brand-blue to-transparent my-3.5" />

        <p className="text-xs sm:text-sm tracking-widest text-brand-silver font-extrabold uppercase mb-2">
          Quality Tiling. Professional Finish.
        </p>

        <div className="flex items-center justify-center gap-2 text-white/90 text-sm sm:text-base font-bold bg-brand-charcoal/40 px-4 py-2 rounded-full border border-white/5 shadow-inner">
          <svg className="w-4 h-4 text-brand-blue fill-current" viewBox="0 0 24 24">
            <path d="M6.62 10.79a15.15 15.15 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.27c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.26 1.02l-2.2 2.2z" />
          </svg>
          <span className="tracking-wide">0468 372 835</span>
        </div>
      </div>
    </div>
  );
}
