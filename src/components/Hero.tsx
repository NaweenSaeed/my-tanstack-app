// src/components/Hero.tsx
import type { CompanyInfo } from "../types/landing"

type HeroProps = {
    company: CompanyInfo
    primaryCta: { label: string; href: string }
    secondaryCta?: { label: string; href: string }
}

export function Hero({ company, primaryCta, secondaryCta }: HeroProps) {
    return (
        <section className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-8 sm:p-10">
            <p className="text-sm font-semibold tracking-wide text-indigo-600">
                Sprint 2
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {company.name}
            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
                {company.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                    href={primaryCta.href}
                    className="inline-flex justify-center rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white hover:bg-slate-800"
                >
                    {primaryCta.label}
                </a>

                {secondaryCta ? (
                    <a
                        href={secondaryCta.href}
                        className="inline-flex justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-50"
                    >
                        {secondaryCta.label}
                    </a>
                ) : null}
            </div>
        </section>
    )
}
