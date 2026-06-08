import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiling FAQ — Pricing, Timelines, Waterproofing & Warranty",
  description:
    "Answers to common tiling questions: service areas, licensing, free quotes, bathroom timelines, waterproofing (AS 3740), materials and our workmanship guarantee.",
  alternates: { canonical: "/faq" },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
