import type { MetadataRoute } from "next";

const SITE_URL = "https://zircondentalpune.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/private/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}