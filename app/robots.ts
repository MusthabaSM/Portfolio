import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://musthaba.tech/sitemap.xml",
    host: "https://musthaba.tech",
  };
}
