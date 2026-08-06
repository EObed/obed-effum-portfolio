"use client"

import { useCallback, useEffect, useState } from "react"

export function useInView<T extends HTMLElement>(threshold = 0.15) {
    const [node, setNode] = useState<T | null>(null)
    const [inView, setInView] = useState(false)

    const ref = useCallback((el: T | null) => {
        setNode(el)
    }, [])

    useEffect(() => {
        if (!node) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setInView(true)
                        observer.disconnect()
                    }
                })
            },
            { threshold }
        )

        observer.observe(node)
        return () => observer.disconnect()
    }, [node, threshold])

    return { ref, inView }
}
