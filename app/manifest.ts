import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Praxis Elena Weiner",
    short_name: "Praxis Weiner",
    description:
      "Hausärztliche Versorgung und psychosomatische Grundversorgung im Frankfurter Ostend.",
    start_url: "/",
    display: "standalone",
    background_color: "#f4f0e7",
    theme_color: "#17342d",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
