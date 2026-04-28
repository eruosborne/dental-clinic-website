import type { MetadataRoute } from "next";

const BASE_URL = "https://smiledental.clinic";

const pages = [
  { path: "", priority: 1.0, changeFreq: "weekly" },
  { path: "/services", priority: 0.9, changeFreq: "weekly" },
  { path: "/services/implants", priority: 0.9, changeFreq: "monthly" },
  { path: "/services/cosmetic", priority: 0.9, changeFreq: "monthly" },
  { path: "/services/general", priority: 0.8, changeFreq: "monthly" },
  { path: "/pricing", priority: 0.9, changeFreq: "weekly" },
  { path: "/about", priority: 0.7, changeFreq: "monthly" },
  { path: "/contact", priority: 0.7, changeFreq: "monthly" },
  { path: "/book", priority: 1.0, changeFreq: "weekly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const enPages = pages.map((p) => ({
    url: `${BASE_URL}${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFreq as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: p.priority,
    alternates: {
      languages: {
        en: `${BASE_URL}${p.path}`,
        vi: `${BASE_URL}/vi${p.path}`,
      },
    },
  }));

  const viPages = pages.map((p) => ({
    url: `${BASE_URL}/vi${p.path}`,
    lastModified: new Date(),
    changeFrequency: p.changeFreq as MetadataRoute.Sitemap[0]["changeFrequency"],
    priority: p.priority * 0.9,
  }));

  return [...enPages, ...viPages];
}
