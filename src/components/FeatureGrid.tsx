// src/components/FeatureGrid.tsx
import type { Feature } from "../types/landing"

type FeatureGridProps = {
    title: string
    subtitle?: string
    features: Feature[]
}

export function FeatureGrid({ title, subtitle, features }: FeatureGridProps) {
    return (
        <section id="features" className="py-2">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {title}
            </h2>

            {subtitle ? (
                <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                    {subtitle}
                </p>
            ) : null}

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((f) => (
                    <article
                        key={f.id}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
                    >
                        <div className="flex items-center gap-2">
                            <h3 className="text-base font-semibold text-slate-900">{f.title}</h3>
                            {f.badge ? (
                                <span className="rounded-full bg-slate-900 px-2 py-0.5 text-xs font-semibold text-white">
                                    {f.badge}
                                </span>
                            ) : null}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-slate-600">{f.description}</p>
                    </article>
                ))}
            </div>
        </section>
    )
}
