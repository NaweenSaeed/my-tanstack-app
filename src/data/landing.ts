import type { CompanyInfo, Feature } from "../types/landing"

export const companyInfo: CompanyInfo = {
    name: "Acme Launch",
    tagline: "Launch pages that ship fast, without data chaos.",
    foundedYear: 2024,
    websiteUrl: "https://acmelaunch.example",
}

export const features: Feature[] = [
    {
        id: "feature_1",
        title: "Fast setup",
        description: "Get from idea to landing page in minutes with reusable components.",
        badge: "New",
    },
    {
        id: "feature_2",
        title: "Type-safe data",
        description: "Interfaces keep your feature cards consistent across the whole app.",
    },
    {
        id: "feature_3",
        title: "Reusable UI",
        description: "Typed props make components easier to reuse and harder to break.",
        badge: "Popular",
    },
]
