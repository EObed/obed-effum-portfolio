"use client"

import { useEffect, useState } from "react"

/**
 * Tracks which of the given element ids sits in a thin band across the middle
 * of the viewport. `ids` must be a stable reference (e.g. a module constant).
 */
export function useActiveSection(ids: readonly string[]) {
    const [active, setActive] = useState<string | null>(null)

    useEffect(() => {
        const els = ids
            .map((id) => document.getElementById(id))
            .filter((el): el is HTMLElement => el !== null)
        if (els.length === 0) return

        const visible = new Set<string>()
        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) visible.add(entry.target.id)
                    else visible.delete(entry.target.id)
                }
                const current = ids.findLast((id) => visible.has(id))
                if (current) setActive(current)
            },
            { rootMargin: "-40% 0px -55% 0px" }
        )

        els.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [ids])

    return active
}
