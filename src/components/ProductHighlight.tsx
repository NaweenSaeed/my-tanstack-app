// src/components/ProductHighlight.tsx

export interface ProductHighlightProps {
    title: string
    description: string
    badgeText?: string
}

export function ProductHighlight({ title, description, badgeText }: ProductHighlightProps) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between gap-3">
                <h3 className="text-base font-semibold text-zinc-900">{title}</h3>
                {badgeText ? (
                    <span className="rounded-full bg-zinc-900 px-2 py-0.5 text-xs font-medium text-white">
                        {badgeText}
                    </span>
                ) : null}
            </div>
            <p className="mt-1 text-sm text-zinc-600">{description}</p>
        </div>
    )
}