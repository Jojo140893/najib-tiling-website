"use client";

import Link from "next/link";
import Image from "next/image";

export function LogoMark({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Metallic Silver/Grey Gradient for letter 'N' */}
        <linearGradient id="silverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#64748b" />
          <stop offset="25%" stopColor="#cbd5e1" />
          <stop offset="50%" stopColor="#ffffff" />
          <stop offset="75%" stopColor="#94a3b8" />
          <stop offset="100%" stopColor="#475569" />
        </linearGradient>

        {/* Electric Blue Gradient for letter 'J' and Diamond highlight */}
        <linearGradient id="blueGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#003b99" />
          <stop offset="50%" stopColor="#0066FF" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        {/* Slate Tile Gradient */}
        <linearGradient id="darkTileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>

        {/* White Marble Tile Gradient */}
        <linearGradient id="whiteTileGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f8fafc" />
          <stop offset="50%" stopColor="#f1f5f9" />
          <stop offset="100%" stopColor="#cbd5e1" />
        </linearGradient>

        {/* Professional drop shadow filter */}
        <filter id="shadow" x="-10%" y="-10%" width="130%" height="130%">
          <feDropShadow dx="2" dy="4" stdDeviation="3" floodOpacity="0.6" floodColor="#000000" />
        </filter>
      </defs>

      {/* 1. Background Diamond Shape */}
      <path
        d="M 100,12 L 188,100 L 100,188 L 12,100 Z"
        fill="#0b0f19"
        stroke="url(#blueGrad)"
        strokeWidth="6"
        filter="url(#shadow)"
      />

      {/* 2. Rotated 2x2 Tiling Grid inside top-half of the diamond */}
      {/* Top Tile (Dark Slate Marble) */}
      <path
        d="M 100,24 L 122,46 L 100,68 L 78,46 Z"
        fill="url(#darkTileGrad)"
        stroke="#0b0f19"
        strokeWidth="1.5"
      />
      {/* Top Tile Veining */}
      <path d="M 94,32 Q 102,44 98,48 T 108,58" stroke="#ffffff" strokeWidth="0.6" fill="none" opacity="0.25" />
      <path d="M 104,36 Q 99,41 102,50" stroke="#ffffff" strokeWidth="0.6" fill="none" opacity="0.2" />

      {/* Right Tile (Dark Slate Marble) */}
      <path
        d="M 122,46 L 144,68 L 122,90 L 100,68 Z"
        fill="url(#darkTileGrad)"
        stroke="#0b0f19"
        strokeWidth="1.5"
      />
      {/* Right Tile Veining */}
      <path d="M 116,56 Q 128,68 122,76 T 134,82" stroke="#ffffff" strokeWidth="0.6" fill="none" opacity="0.2" />

      {/* Left Tile (White Marble) */}
      <path
        d="M 78,46 L 100,68 L 78,90 L 56,68 Z"
        fill="url(#whiteTileGrad)"
        stroke="#0b0f19"
        strokeWidth="1.5"
      />
      {/* Left Tile Veining */}
      <path d="M 64,62 Q 72,56 68,68 T 80,80" stroke="#64748b" strokeWidth="0.8" fill="none" opacity="0.4" />
      <path d="M 76,56 Q 70,66 82,72" stroke="#64748b" strokeWidth="0.6" fill="none" opacity="0.3" />

      {/* Bottom Tile (Dark Slate Marble) */}
      <path
        d="M 100,68 L 122,90 L 100,112 L 78,90 Z"
        fill="url(#darkTileGrad)"
        stroke="#0b0f19"
        strokeWidth="1.5"
      />
      {/* Bottom Tile Veining */}
      <path d="M 92,80 Q 104,92 100,98 T 110,106" stroke="#ffffff" strokeWidth="0.6" fill="none" opacity="0.2" />

      {/* 3. Letter 'N' (Metallic Silver) */}
      <path
        d="M 50,150 L 50,60 L 72,60 L 115,125 L 115,60 L 137,60 L 137,150 L 115,150 L 72,85 L 72,150 Z"
        fill="url(#silverGrad)"
        filter="url(#shadow)"
      />

      {/* 4. Letter 'J' (Electric Blue, Overlaps N) */}
      <path
        d="M 130,85 L 155,85 L 155,130 C 155,160 135,175 100,175 C 65,175 60,155 60,135 L 85,135 C 85,145 90,155 100,155 C 115,155 130,150 130,130 Z"
        fill="url(#blueGrad)"
        filter="url(#shadow)"
      />
    </svg>
  );
}

// Horizontal combined header Logo
export default function Logo() {
  return (
    <div className="flex items-center gap-3 group">
      <span className="relative inline-block w-10 h-10 shrink-0 overflow-hidden rounded-lg ring-1 ring-white/10">
        <Image
          src="/logo-emblem.png"
          alt="NJ Pro Tiling logo"
          fill
          sizes="60px"
          className="object-cover"
        />
      </span>
      <div className="flex flex-col">
        <span className="font-extrabold text-xl tracking-wider leading-none text-white group-hover:text-brand-blue transition-colors">
          NJ PRO TILING
        </span>
        <span className="text-[9px] tracking-widest text-brand-silver font-semibold mt-0.5">
          QUALITY TILING • PROFESSIONAL FINISH
        </span>
      </div>
    </div>
  );
}

// Vertical combined larger Logo (matches the provided graphic layout)
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
