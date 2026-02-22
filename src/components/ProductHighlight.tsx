// src/components/ProductHighlight.tsx
export interface ProductHighlightProps {
    title: string
    description: string
    badgeText?: string
    featured?: boolean
    onSelect?: () => void
}

export function ProductHighlight({
    title,
    description,
    badgeText,
    featured = false,
    onSelect,
}: ProductHighlightProps) {
    return (
        <button
            type="button"
            onClick={onSelect}
            className={[
                "w-full rounded-xl border p-4 text-left transition",
                featured ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 bg-white",
                onSelect ? "hover:bg-zinc-50" : "",
            ].join(" ")}
        >
            <div className="flex items-start justify-between gap-3">
                <div>
                    <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
                    <p className="mt-1 text-sm text-zinc-600">{description}</p>
                </div>

                {badgeText ? (
                    <span className="shrink-0 rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                        {badgeText}
                    </span>
                ) : null}
            </div>

            {featured ? (
                <p className="mt-3 text-xs font-medium text-zinc-700">Featured</p>
            ) : null}
        </button>
    )
}