import * as React from "react"
import { useState } from "react"
import { ProductCard } from "./ProductCard"
import { ViewToggle } from "./ViewToggle"
import { products, type ViewMode } from "./products"

export function ProductShowcase() {
    const [view, setView] = useState<ViewMode>("grid")
    const [selectedId, setSelectedId] = useState<string | null>(null)

    function handleSelect(id: string) {
        setSelectedId((prev) => (prev === id ? null : id))
    }

    return (
        <section className="rounded-2xl border border-zinc-200 bg-white p-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-xl font-bold text-zinc-900">Product Showcase</h2>
                    <p className="mt-1 text-sm text-zinc-600">
                        useState controls view mode and selected card, updates are immutable.
                    </p>
                </div>

                <ViewToggle value={view} onChange={setView} />
            </div>

            <div className={view === "grid" ? "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" : "mt-6 flex flex-col gap-4"}>
                {products.map((p) => (
                    <ProductCard
                        key={p.id}
                        product={p}
                        view={view}
                        selected={p.id === selectedId}
                        onSelect={handleSelect}
                    />
                ))}
            </div>
        </section>
    )
}