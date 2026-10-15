"use client"

import { useEffect, useRef, useState } from "react"

const LINE_PX = 24

/**
 * Decorative line numbers down the left edge of a buffer. Absolutely
 * positioned so it never contributes to the height it measures.
 */
const LineGutter = () => {
    const ref = useRef<HTMLDivElement>(null)
    const [count, setCount] = useState(24)

    useEffect(() => {
        const parent = ref.current?.parentElement
        if (!parent) return
        const observer = new ResizeObserver(([entry]) => {
            setCount(Math.max(1, Math.floor(entry.contentRect.height / LINE_PX)))
        })
        observer.observe(parent)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={ref}
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-12 select-none overflow-hidden border-r border-surface0 pr-3 pt-8 text-right text-xs leading-6 text-overlay0 sm:block md:pt-12"
        >
            {Array.from({ length: count }, (_, i) => (
                <div key={i}>{i + 1}</div>
            ))}
        </div>
    )
}

export default LineGutter
