// src/components/CTASection.tsx
type CTASectionProps = {
    id?: string
    headline: string
    body: string
    primaryCta: { label: string; href: string }
}

export function CTASection({
    id = "get-started",
    headline,
    body,
    primaryCta,
}: CTASectionProps) {
    return (
        <section
            id={id}
            className="rounded-3xl border border-slate-200 bg-slate-900 p-8 sm:p-10"
        >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                        {headline}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base">
                        {body}
                    </p>
                </div>

                <a
                    href={primaryCta.href}
                    className="inline-flex justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
                >
                    {primaryCta.label}
                </a>
            </div>
        </section>
    )
}
