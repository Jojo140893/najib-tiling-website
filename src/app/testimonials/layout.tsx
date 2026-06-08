import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reviews & Testimonials — NJ Pro Tiling Melbourne",
  description:
    "Read what Melbourne homeowners say about NJ Pro Tiling — punctual, professional tilers known for flawless levelling and clean, long-lasting finishes.",
  alternates: { canonical: "/testimonials" },
};

export default function TestimonialsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
