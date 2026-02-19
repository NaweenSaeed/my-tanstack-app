// src/utils/landing.ts

/**
 * Formats short landing-page feature copy.
 */
export function formatFeatureCopy(copy: string): string {
    const trimmed = copy.trim()

    if (trimmed.length === 0) {
        return ""
    }

    const lastChar = trimmed[trimmed.length - 1]
    const endsWithPunctuation =
        lastChar === "." || lastChar === "!" || lastChar === "?"

    return endsWithPunctuation ? trimmed : `${trimmed}.`
}

/**
 * Builds a consistent CTA label.
 */
export const getCtaLabel = (
    action: string,
    productName: string = "Acme"
): string => {
    const trimmedAction = action.trim()

    if (trimmedAction.length === 0) {
        return `Get started with ${productName}`
    }

    const alreadyMentionsProduct = trimmedAction
        .toLowerCase()
        .includes(productName.toLowerCase())

    return alreadyMentionsProduct
        ? trimmedAction
        : `${trimmedAction} with ${productName}`
}

/**
 * Formats a price for display.
 */
export function formatPrice(
    amount: number | string,
    currency: "USD" | "EUR" = "USD"
): string {
    let numericAmount: number

    if (typeof amount === "number") {
        numericAmount = amount
    } else {
        const cleaned = amount.trim().replace(/,/g, "")
        const parsed = Number(cleaned)

        if (Number.isNaN(parsed)) {
            return "—"
        }

        numericAmount = parsed
    }

    if (numericAmount < 0) {
        return "—"
    }

    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 2,
    }).format(numericAmount)
}

/* ===== Learning: void and never ===== */

function assertUnreachable(value: never): never {
    throw new Error(`Unhandled case: ${String(value)}`)
}

type BillingInterval = "month" | "year"

function intervalLabel(interval: BillingInterval): string {
    switch (interval) {
        case "month":
            return "per month"
        case "year":
            return "per year"
        default:
            return assertUnreachable(interval)
    }
}

function logCtaClick(label: string): void {
    console.log(`CTA clicked: ${label}`)
}

void intervalLabel
void logCtaClick
