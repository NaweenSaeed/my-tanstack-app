// src/features/products/products.ts

export type Product = {
    id: string
    name: string
    description: string
    priceCents: number
    imageUrl: string
    tags: string[]
    inStock: boolean
}

export const PRODUCTS: Product[] = [
    {
        id: "p-espresso",
        name: "Espresso Beans",
        description: "Bold roast for espresso and moka pots.",
        priceCents: 1599,
        imageUrl: "https://picsum.photos/seed/espresso/800/600",
        tags: ["coffee", "best-seller"],
        inStock: true,
    },
    {
        id: "p-matcha",
        name: "Ceremonial Matcha",
        description: "Bright matcha for lattes or whisking.",
        priceCents: 2499,
        imageUrl: "https://picsum.photos/seed/matcha/800/600",
        tags: ["tea", "new"],
        inStock: true,
    },
    {
        id: "p-mug",
        name: "Stoneware Mug",
        description: "Comfort handle, everyday use.",
        priceCents: 1899,
        imageUrl: "https://picsum.photos/seed/mug/800/600",
        tags: ["gear"],
        inStock: false,
    },
    {
        id: "p-tote",
        name: "Everyday Tote",
        description: "Carry your essentials, simple and durable.",
        priceCents: 2999,
        imageUrl: "https://picsum.photos/seed/tote/800/600",
        tags: ["gear"],
        inStock: true,
    },
]

export function formatPrice(priceCents: number) {
    return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
    }).format(priceCents / 100)
}