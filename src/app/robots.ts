import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/admin/",
          "/*.json$",
        ],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        crawlDelay: 2,
      },
    ],
    sitemap: "https://zircondentalpune.com/sitemap.xml",
    host: "https://zircondentalpune.com",
  };
}