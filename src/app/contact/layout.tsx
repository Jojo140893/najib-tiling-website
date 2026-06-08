import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact NJ Pro Tiling — Free Tiling Quote in Melbourne",
  description:
    "Get in touch with NJ Pro Tiling for a free, no-obligation tiling quote in Melbourne. Call 0468 372 835 or send us your project details today.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
