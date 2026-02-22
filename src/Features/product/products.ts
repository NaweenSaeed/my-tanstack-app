export type ViewMode = "grid" | "list"

export type Product = {
    id: string
    name: string
    description: string
    price: number
    tags: string[]
    featured?: boolean
}

export const products: Product[] = [
    {
        id: "starter-kit",
        name: "Starter Kit",
        description: "Everything you need to get going fast.",
        price: 29,
        tags: ["popular", "fast"],
        featured: true,
    },
    {
        id: "pro-kit",
        name: "Pro Kit",
        description: "More power, more options, better workflow.",
        price: 59,
        tags: ["pro"],
    },
    {
        id: "team-kit",
        name: "Team Kit",
        description: "Built for teams who ship together.",
        price: 99,
        tags: ["team", "new"],
    },
]