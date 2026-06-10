import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tiling FAQ — Pricing, Timelines, Waterproofing & Warranty",
  description:
    "Answers to common tiling questions: service areas, licensing, free quotes, bathroom timelines, waterproofing (AS 3740), materials and our workmanship guarantee.",
  alternates: { canonical: "/faq" },
  openGraph: {
    title: "Tiling FAQ | NJ Pro Tiling Melbourne",
    description:
      "Pricing, timelines, waterproofing, materials and warranty — common Melbourne tiling questions answered.",
    url: "https://njprotiling.com/faq",
  },
};

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return children;
}
