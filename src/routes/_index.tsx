import { createFileRoute } from "@tanstack/react-router"
import { HighlightsSection } from "../components/HighlightsSection"
import { ProductHighlight } from "../components/ProductHighlight"
import { ProductShowcase } from "../features/products/ProductShowcase"

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
        description: "2–3 business days with tracking.",
        badgeText: "Popular",
        featured: true,
    },
    {
        id: "quality",
        title: "Built to last",
        description: "Durable materials and 2-year warranty.",
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
            <h1 className="text-3xl font-bold text-zinc-900">
                Sprint 3 React Components
            </h1>

            <p className="mt-2 text-zinc-600">
                Props, children, state, events, immutability, and grid/list toggle.
            </p>

            <HighlightsSection
                heading="Product Highlights"
                subheading="Reusable wrapper using children prop"
            >
                <div className="grid gap-4 sm:grid-cols-2">
                    {highlights.map((h) => (
                        <ProductHighlight
                            key={h.id}
                            title={h.title}
                            description={h.description}
                            badgeText={h.badgeText}
                            featured={h.featured}
                            onSelect={() => console.log("Selected:", h.id)}
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

export const Route = createFileRoute("/")({
    component: HomePage,
})