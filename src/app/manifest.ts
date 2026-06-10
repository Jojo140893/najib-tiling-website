import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NJ Pro Tiling — Melbourne Tilers",
    short_name: "NJ Pro Tiling",
    description: "Premium wall & floor tiling, waterproofing and bathroom renovations in Melbourne.",
    start_url: "/",
    display: "standalone",
    background_color: "#0f172a",
    theme_color: "#0f172a",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
