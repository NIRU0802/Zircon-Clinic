import type { MetadataRoute } from "next";

const SITE_URL = "https://zircondentalpune.com";

const staticPages = [
  "",
  "about",
  "treatments",
  "blog",
  "gallery",
  "pricing",
  "contact",
  "privacy",
  "terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return staticPages.map((page) => ({
    url: page ? `${SITE_URL}/${page}` : SITE_URL,
    lastModified: now,
    changeFrequency:
      page === "blog" ? "weekly" : "monthly",
    priority:
      page === ""
        ? 1
        : page === "treatments"
          ? 0.95
          : page === "contact"
            ? 0.9
            : page === "about"
              ? 0.8
              : 0.6,
  }));
}