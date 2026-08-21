import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://sontucode.dev/json-formatter",
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
    ];
}