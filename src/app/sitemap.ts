import type { MetadataRoute } from "next";
import { getAllPages } from "./services/dbServices/dbService";

const BASE_URL = "https://portfolio.ortheyus.uk";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages = await getAllPages(); // expects rows with { path, updated_at }

  const dynamicPages: MetadataRoute.Sitemap = pages
    .filter((page) => page.path && page.path.toLowerCase() !== "home")
    .map((page) => ({
      url: `${BASE_URL}/${page.path}`,
      lastModified: page.updated_at
        ? new Date(page.updated_at).toISOString()
        : new Date().toISOString(),
      priority: ["projects/", "work/", "notes/"].some((prefix) =>
        page.path.toLowerCase().startsWith(prefix),
      )
        ? 0.5
        : 0.8,
      changeFrequency: "yearly" as const,
    }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date().toISOString(),
      priority: 1.0,
      changeFrequency: "yearly" as const,
    },
    ...dynamicPages,
  ];
}
