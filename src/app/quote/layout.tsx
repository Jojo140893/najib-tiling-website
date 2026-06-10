import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Tiling Quote — NJ Pro Tiling Melbourne",
  description:
    "Request a free, obligation-free tiling quote from NJ Pro Tiling. Tell us about your bathroom, floor, wall or waterproofing project anywhere in Melbourne.",
  alternates: { canonical: "/quote" },
  openGraph: {
    title: "Free Tiling Quote | NJ Pro Tiling Melbourne",
    description:
      "Request a free, obligation-free tiling quote for your Melbourne bathroom, floor, wall or waterproofing project.",
    url: "https://njprotiling.com/quote",
  },
};

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return children;
}
