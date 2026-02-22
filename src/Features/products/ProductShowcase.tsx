// src/features/products/ProductShowcase.tsx

import * as React from "react"
import { PRODUCTS, type Product } from "./Products"
import { ProductCard, type ProductView } from "./ProductCard"
import { ViewToggle } from "./ViewToggle"

export function ProductShowcase() {
    // React state (not regular variables)
    const [view, setView] = React.useState<ProductView>("grid")
    const [selectedId, setSelectedId] = React.useState<string | null>(null)

    // Immutability demo: a selection list (array) updated with filter/spread
    const [selectedIds, setSelectedIds] = React.useState<string[]>([])

    function toggleSelected(id: string) {
        setSelectedIds((prev) => {
            if (prev.includes(id)) return prev.filter((x) => x !== id)
            return [...prev, id]
        })
    }

    const selectedProduct: Product | undefined = React.useMemo(() => {
        return PRODUCTS.find((p) => p.id === selectedId)
    }, [selectedId])

    const listClasses =
        view === "grid"
            ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            : "flex flex-col gap-3"

    return (
        <div className="mx-auto w-full max-w-6xl p-4 sm:p-6">
            <header className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-zinc-900">Sprint 3 Product Showcase</h1>
                    <p className="text-sm text-zinc-600">
                        Props, state, events, keys, grid/list toggle, and composition.
                    </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                    <ViewToggle value={view} onChange={setView} />
                    <button
                        type="button"
                        className="rounded-xl border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-700 hover:bg-zinc-50 disabled:opacity-50"
                        onClick={() => setSelectedId(null)}
                        disabled={selectedId === null}
                    >
                        Clear preview
                    </button>
                </div>
            </header>

            <p className="mt-4 text-sm text-zinc-700">
                Selected (immutable array): <span className="font-medium">{selectedIds.length}</span>
            </p>

            <main className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1fr_340px]">
                <section>
                    <div className={listClasses}>
                        {PRODUCTS.map((product) => (
                            <ProductCard
                                key={product.id} // keys
                                product={product}
                                view={view}
                                isSelected={product.id === selectedId}
                                isSelectedInList={selectedIds.includes(product.id)}
                                onSelect={(p) => {
                                    // event handling + state update
                                    setSelectedId(p.id)
                                    console.log("Preview selected:", p.id)
                                }}
                                onToggleSelected={(id) => {
                                    console.log("Toggle selected:", id)
                                    toggleSelected(id)
                                }}
                            />
                        ))}
                    </div>
                </section>

                <aside className="rounded-xl border border-zinc-200 bg-white p-4">
                    {selectedProduct ? (
                        <div className="flex flex-col gap-2">
                            <h2 className="text-lg font-semibold text-zinc-900">Preview</h2>
                            <p className="text-sm text-zinc-700">
                                <span className="font-medium">{selectedProduct.name}</span>
                            </p>
                            <p className="text-sm text-zinc-600">{selectedProduct.description}</p>
                            <p className="text-sm text-zinc-700">
                                <span className="font-medium">In stock:</span> {selectedProduct.inStock ? "Yes" : "No"}
                            </p>
                        </div>
                    ) : (
                        <div className="text-sm text-zinc-600">Click a card to preview details here.</div>
                    )}
                </aside>
            </main>
        </div>
    )
}