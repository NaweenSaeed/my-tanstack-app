// src/features/products/ProductCard.tsx

import type { Product } from "./Products"
import { formatPrice } from "./Products"

export type ProductView = "grid" | "list"

type ProductCardProps = {
    product: Product
    view: ProductView
    isSelected: boolean
    isSelectedInList: boolean
    onSelect: (product: Product) => void
    onToggleSelected: (id: string) => void
}

export function ProductCard({
    product,
    view,
    isSelected,
    isSelectedInList,
    onSelect,
    onToggleSelected,
}: ProductCardProps) {
    const layoutClasses =
        view === "grid" ? "flex flex-col" : "flex flex-col sm:flex-row sm:items-stretch"

    const imageClasses = view === "grid" ? "h-40 w-full" : "h-40 w-full sm:h-28 sm:w-40"

    return (
        <button
            type="button"
            onClick={() => onSelect(product)}
            className={
                "group w-full overflow-hidden rounded-xl border text-left transition " +
                "bg-white hover:bg-zinc-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900/30 " +
                (isSelected ? "border-zinc-900 bg-zinc-50" : "border-zinc-200")
            }
            aria-pressed={isSelected}
        >
            <div className={layoutClasses}>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={imageClasses + " object-cover transition group-hover:scale-[1.02]"}
                    loading="lazy"
                />

                <div className="flex flex-1 flex-col gap-2 p-4">
                    <div className="flex items-start justify-between gap-3">
                        <h3 className="text-base font-semibold text-zinc-900">{product.name}</h3>
                        <span className="shrink-0 text-sm font-medium text-zinc-900">
                            {formatPrice(product.priceCents)}
                        </span>
                    </div>

                    <p className="text-sm text-zinc-600">{product.description}</p>

                    <div className="mt-2 flex flex-wrap items-center gap-2">
                        {!product.inStock ? (
                            <span className="rounded-full bg-zinc-100 px-2 py-1 text-xs font-medium text-zinc-700">
                                Out of stock
                            </span>
                        ) : (
                            <span className="rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700">
                                In stock
                            </span>
                        )}

                        {product.tags.map((tag) => (
                            <span key={product.id + "-" + tag} className="rounded-full bg-zinc-100 px-2 py-1 text-xs text-zinc-700">
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-3 flex items-center justify-between gap-2">
                        <span className="text-xs text-zinc-500">
                            Click card to preview details
                        </span>

                        <button
                            type="button"
                            className={
                                "rounded-lg border px-3 py-1.5 text-sm font-medium " +
                                (isSelectedInList
                                    ? "border-zinc-900 bg-zinc-900 text-white"
                                    : "border-zinc-300 bg-white text-zinc-900 hover:bg-zinc-50")
                            }
                            onClick={(e) => {
                                e.stopPropagation()
                                onToggleSelected(product.id)
                            }}
                        >
                            {isSelectedInList ? "Selected" : "Select"}
                        </button>
                    </div>
                </div>
            </div>
        </button>
    )
}