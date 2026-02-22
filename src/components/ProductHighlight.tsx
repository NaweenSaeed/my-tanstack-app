import * as React from "react"

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
                "text-left rounded-xl border p-4 transition",
                featured ? "border-zinc-900 bg-zinc-50" : "border-zinc-200 bg-white hover:bg-zinc-50",
            ].join(" ")}
        >
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold text-zinc-900">{title}</h3>

                {badgeText ? (
                    <span className="rounded-full bg-zinc-900 px-2 py-1 text-xs font-medium text-white">
                        {badgeText}
                    </span>
                ) : null}
            </div>

            <p className="mt-2 text-sm text-zinc-600">{description}</p>

            {featured ? <p className="mt-3 text-xs font-medium text-zinc-700">Featured</p> : null}
        </button>
    )
}