import * as React from "react"
import { createRoute, createFileRoute } from "@tanstack/react-router"
import { rootRoute } from "./__root"
import { HighlightsSection } from "../components/HighlightsSection"
import { ProductHighlight } from "../components/ProductHighlight"
import { ProductShowcase } from "../features/product/ProductShowcase"

type Highlight = {
    id: string
    title: string
    description: string
    badgeText?: string
    featured?: boolean
}

const highlights: Highlight[] = [
    {
        id: "fast-shipping",
        title: "Fast shipping",
        description: "Get your order in 2–3 business days with tracking.",
        badgeText: "Popular",
        featured: true,
    },
    {
        id: "quality",
        title: "Built to last",
        description: "Durable materials and a 2-year warranty included.",
    },
    {
        id: "support",
        title: "Human support",
        description: "Chat with a real person in under 2 minutes.",
        badgeText: "New",
    },
]

function HomePage() {
    return (
        <main className="mx-auto max-w-6xl p-6">
            <h1 className="text-3xl font-bold text-zinc-900">Sprint 3 React Components</h1>
            <p className="mt-2 text-zinc-600">
                This page demonstrates props, typed props, children composition, state, events, immutability, and keys.
            </p>

            <HighlightsSection
                heading="Product Highlights"
                subheading="Highlights are passed from a parent array into reusable child components."
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    {highlights.map((h) => (
                        <ProductHighlight
                            key={h.id}
                            title={h.title}
                            description={h.description}
                            badgeText={h.badgeText}
                            featured={h.featured}
                            onSelect={() => console.log("Highlight selected:", h.id)}
                        />
                    ))}
                </div>
            </HighlightsSection>

            <div className="mt-10">
                <ProductShowcase />
            </div>
        </main>
    )
}

export const Route = createRoute("/")({
    getParentRoute: () => rootRoute,
    path: "/",
    component: HomePage,
})