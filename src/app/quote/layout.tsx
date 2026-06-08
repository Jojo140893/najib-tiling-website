import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Tiling Quote — NJ Pro Tiling Sydney",
  description:
    "Request a free, obligation-free tiling quote from NJ Pro Tiling. Tell us about your bathroom, floor, wall or waterproofing project anywhere in Sydney.",
  alternates: { canonical: "/quote" },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
