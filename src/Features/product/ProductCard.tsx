import * as React from "react"
import type { Product } from "./products"

export interface ProductCardProps {
    product: Product
    view: "grid" | "list"
    selected: boolean
    onSelect: (id: string) => void
}

export function ProductCard({ product, view, selected, onSelect }: ProductCardProps) {
    const wrapper =
        view === "grid"
            ? "rounded-xl border p-4"
            : "rounded-xl border p-4 flex items-start justify-between gap-4"

    return (
        <button
            type="button"
            onClick={() => onSelect(product.id)}
            className={[
                wrapper,
                "text-left transition",
                selected ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 bg-white hover:bg-zinc-50",
            ].join(" ")}
        >
            <div>
                <div className="flex items-center gap-2">
                    <h3 className="text-lg font-semibold text-zinc-900">{product.name}</h3>
                    {product.featured ? (
                        <span className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-medium text-white">Featured</span>
                    ) : null}
                </div>

                <p className="mt-2 text-sm text-zinc-600">{product.description}</p>

                <div className="mt-3 flex flex-wrap gap-2">
                    {product.tags.map((tag: string) => (
                        <span key={tag} className="rounded-full border border-zinc-200 px-2 py-1 text-xs text-zinc-700">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-3 text-sm font-semibold text-zinc-900">${product.price}</div>
        </button>
    )
}