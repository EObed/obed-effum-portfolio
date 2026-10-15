"use client"

import type { ReactNode } from "react"
import { useInView } from "@/hooks/useInView"

/** Fades its children up once they scroll into view. */
const Reveal = ({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) => {
    const { ref, inView } = useInView<HTMLDivElement>(0.1)

    return (
        <div
            ref={ref}
            data-reveal
            data-inview={inView}
            className={className}
            style={delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
        >
            {children}
        </div>
    )
}

export default Reveal
