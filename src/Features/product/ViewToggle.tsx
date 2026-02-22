import * as React from "react"
import type { ViewMode } from "./products"

export interface ViewToggleProps {
    value: ViewMode
    onChange: (next: ViewMode) => void
}

export function ViewToggle({ value, onChange }: ViewToggleProps) {
    const base =
        "rounded-lg px-3 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-zinc-900"

    return (
        <div className="inline-flex rounded-xl border border-zinc-200 bg-white p-1">
            <button
                type="button"
                className={`${base} ${value === "grid" ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-50"}`}
                onClick={() => onChange("grid")}
                aria-pressed={value === "grid"}
            >
                Grid
            </button>

            <button
                type="button"
                className={`${base} ${value === "list" ? "bg-zinc-900 text-white" : "text-zinc-700 hover:bg-zinc-50"}`}
                onClick={() => onChange("list")}
                aria-pressed={value === "list"}
            >
                List
            </button>
        </div>
    )
}