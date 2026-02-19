import { formatFeatureCopy, formatPrice, getCtaLabel } from "../utils/landing"

export function LandingUtilitiesDemo() {
    const feature = formatFeatureCopy("  blazing fast setup  ")
    const feature2 = formatFeatureCopy("Works offline!")

    const cta = getCtaLabel("Get started", "Orbit")
    const ctaWithDefault = getCtaLabel("Learn more")

    const price1 = formatPrice(29.99, "USD")
    const price2 = formatPrice("1,299", "USD")
    const priceBad = formatPrice("free", "USD")

    return (
        <section className="mx-auto max-w-xl p-6 space-y-3">
            <h2 className="text-xl font-semibold">Landing Utilities Demo</h2>

            <p>{feature}</p>
            <p>{feature2}</p>

            <p>{cta}</p>
            <p>{ctaWithDefault}</p>

            <p>{price1}</p>
            <p>{price2}</p>
            <p>{priceBad}</p>
        </section>
    )
}
