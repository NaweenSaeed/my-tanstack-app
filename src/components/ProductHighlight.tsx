// src/components/ProductHighlight.tsx
export interface ProductHighlightProps {
    title: string
    description: string
    icon?: string
    emphasized?: boolean
    onSelect?: () => void
}

export function ProductHighlight({
    title,
    description,
    icon,
    emphasized = false,
    onSelect,
}: ProductHighlightProps) {
    return (
        <button
            type="button"
            onClick={onSelect}
            className={[
                "w-full text-left rounded-xl border p-4 transition",
                emphasized ? "ring-2 ring-offset-2" : "",
            ].join(" ")}
        >
            <div className="flex items-start gap-3">
                {icon ? (
                    <div className="text-2xl leading-none" aria-hidden="true">
                        {icon}
                    </div>
                ) : null}

                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-sm opacity-80">{description}</p>
                </div>
            </div>
        </button>
    )
}