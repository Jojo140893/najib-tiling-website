import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiling Services in Melbourne — Floor, Wall, Bathroom & Waterproofing",
  description:
    "Professional tiling services across Melbourne: floor & wall tiling, bathroom renovations, kitchen splashbacks, outdoor & patio tiling, waterproofing (AS 3740) and tile repairs.",
  alternates: { canonical: "/services" },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
