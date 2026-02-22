// src/routes/index.tsx
import { useState } from "react"
import { HighlightsSection } from "../components/HighlightsSection"
import { ProductHighlight } from "../components/ProductHighlight"

type ViewMode = "list" | "grid"

const highlights = [
    {
        title: "Fast setup",
        description: "Start building in minutes with a clean starter structure.",
        icon: "⚡️",
        emphasized: true,
    },
    {
        title: "Typed components",
        description: "Props interfaces make your UI safer and easier to reuse.",
        icon: "✅",
        emphasized: false,
    },
    {
        title: "Reusable layout",
        description: "Use children for composition and clean page structure.",
        icon: "🧱",
        emphasized: false,
    },
]

export default function HomePage() {
    const [viewMode, setViewMode] = useState<ViewMode>("grid")

    return (
        <main>
            <div className="mx-auto max-w-5xl px-6 pt-10">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-3xl font-bold">Product Highlights</h1>

                    <div className="flex gap-2">
                        <button
                            className="rounded border px-3 py-2"
                            onClick={() => setViewMode("list")}
                            type="button"
                        >
                            List
                        </button>
                        <button
                            className="rounded border px-3 py-2"
                            onClick={() => setViewMode("grid")}
                            type="button"
                        >
                            Grid
                        </button>
                    </div>
                </div>

                <p className="mt-2 opacity-80">
                    Current view mode: <strong>{viewMode}</strong>
                </p>
            </div>

            <HighlightsSection
                heading="Why people like this"
                subheading="Props, children composition, and state toggle (list or grid)."
            >
                <div
                    className={[
                        viewMode === "grid" ? "grid sm:grid-cols-2 lg:grid-cols-3" : "grid",
                        "gap-4",
                    ].join(" ")}
                >
                    {highlights.map((h, idx) => (
                        <ProductHighlight
                            key={h.title}
                            title={h.title}
                            description={h.description}
                            icon={h.icon}
                            emphasized={h.emphasized}
                            onSelect={() => alert(`Selected #${idx + 1}: ${h.title}`)}
                        />
                    ))}
                </div>
            </HighlightsSection>
        </main>
    )
}