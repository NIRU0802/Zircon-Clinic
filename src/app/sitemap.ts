import type { MetadataRoute } from "next";
import { treatments } from "@/data/treatments";

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

  const staticUrls: MetadataRoute.Sitemap = staticPages.map((page) => ({
    url: page ? `${SITE_URL}/${page}` : SITE_URL,
    lastModified: now,
    changeFrequency: page === "blog" ? "weekly" : "monthly",
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

  const treatmentUrls: MetadataRoute.Sitemap = treatments.map(
    (treatment) => ({
      url: `${SITE_URL}/treatments/${treatment.slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    })
  );

  return [...staticUrls, ...treatmentUrls];
}