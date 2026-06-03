import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://al-ihmid.vercel.app";
  const langs = ["fr", "en"] as const;
  const routes = ["", "/projects", "/about", "/contact"];

  return langs.flatMap((lang) =>
    routes.map((route) => ({
      url: `${baseUrl}/${lang}${route}`,
      lastModified: new Date(),
      changeFrequency: route === "/projects" ? "weekly" : "monthly",
      priority: route === "" ? 1 : route === "/projects" ? 0.8 : 0.5,
      alternates: {
        languages: Object.fromEntries(
          langs.map((l) => [l, `${baseUrl}/${l}${route}`]),
        ),
      },
    })),
  );
}
