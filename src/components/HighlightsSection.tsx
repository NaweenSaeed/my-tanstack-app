// src/components/HighlightsSection.tsx
type HighlightsSectionProps = {
    heading: string
    subheading?: string
    children: React.ReactNode
}

export function HighlightsSection({ heading, subheading, children }: HighlightsSectionProps) {
    return (
        <section className="mx-auto max-w-5xl px-6 py-10">
            <h2 className="text-2xl font-bold text-zinc-900">{heading}</h2>
            {subheading ? <p className="mt-2 text-zinc-600">{subheading}</p> : null}
            <div className="mt-6 grid gap-4 md:grid-cols-3">{children}</div>
        </section>
    )
}