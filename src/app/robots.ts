import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://al-ihmid.vercel.app";
  return {
    rules: { userAgent: "*", allow: "/", disallow: [] },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
