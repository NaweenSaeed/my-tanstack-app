// src/components/HighlightsSection.tsx
import type { ReactNode } from "react"

export interface HighlightsSectionProps {
    heading: string
    subheading?: string
    children: ReactNode
}

export function HighlightsSection({
    heading,
    subheading,
    children,
}: HighlightsSectionProps) {
    return (
        <section className="mx-auto max-w-5xl px-6 py-10">
            <div className="mb-6">
                <h2 className="text-2xl font-bold">{heading}</h2>
                {subheading ? <p className="opacity-80">{subheading}</p> : null}
            </div>

            <div className="grid gap-4">{children}</div>
        </section>
    )
}