// src/components/ProductHighlight.tsx

type ProductHighlightProps = {
    title: string
    description: string
}

export function ProductHighlight(props: ProductHighlightProps) {
    return (
        <div className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm">
            <h3 className="text-base font-semibold text-zinc-900">{props.title}</h3>
            <p className="mt-1 text-sm text-zinc-600">{props.description}</p>
        </div>
    )
}