"use client"

import { useEffect, useRef } from "react"
import { cn } from "@/lib/utils"

const FONT_PX = 14
const CELL_H = 16
const FRAME_MS = 1000 / 30
const PUSH_RADIUS = 110
const FLOWERS = ["*", "@", "o", "&", "%"]
const MAX_MOTES = 60

type Blade = { x: number; h: number; phase: number; stiffness: number; flower: number }
type Mote = { x: number; y: number; vx: number; vy: number; life: number }
type Palette = { stem: string; mid: string; tip: string; ground: string; mote: string; flowers: string[] }

/** Small seeded PRNG so each column keeps the same blade across resizes. */
const seeded = (seed: number) => {
    let a = seed * 2654435761
    return () => {
        a |= 0
        a = (a + 0x6d2b79f5) | 0
        let t = Math.imul(a ^ (a >>> 15), 1 | a)
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296
    }
}

const readPalette = (): Palette => {
    const s = getComputedStyle(document.documentElement)
    const v = (name: string) => s.getPropertyValue(name).trim()
    return {
        stem: v("--overlay1"),
        mid: v("--green"),
        tip: v("--lime"),
        ground: v("--surface2"),
        mote: v("--yellow"),
        flowers: [v("--pink"), v("--yellow"), v("--purple"), v("--orange"), v("--blue")],
    }
}

/** Pick a glyph for a blade segment from how far it leans relative to the one below. */
const glyphFor = (slope: number, isTip: boolean) => {
    if (slope > 0.55) return "/"
    if (slope < -0.55) return "\\"
    if (isTip) return slope > 0.2 ? "'" : slope < -0.2 ? "`" : "'"
    if (slope > 0.2) return ")"
    if (slope < -0.2) return "("
    return "|"
}

/**
 * A field of ASCII grass drawn to canvas. Blades sway in a travelling wind and
 * part around the pointer, which also shakes loose a little pollen.
 */
const AsciiMeadow = ({ className }: { className?: string }) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const host = canvas?.parentElement
        const ctx = canvas?.getContext("2d")
        if (!canvas || !host || !ctx) return

        const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

        let width = 0
        let height = 0
        let cellW = 8.4
        let rows = 0
        let blades: Blade[] = []
        const motes: Mote[] = []
        let palette = readPalette()
        const pointer = { x: -1e4, y: -1e4, lastX: -1e4 }

        let raf = 0
        let last = 0
        let onScreen = true

        const layout = () => {
            const rect = canvas.getBoundingClientRect()
            width = rect.width
            height = rect.height
            const dpr = Math.min(window.devicePixelRatio || 1, 2)
            canvas.width = Math.round(width * dpr)
            canvas.height = Math.round(height * dpr)
            ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
            ctx.font = `${FONT_PX}px ${getComputedStyle(canvas).fontFamily}`
            ctx.textBaseline = "top"
            cellW = ctx.measureText("M").width || 8.4

            const cols = Math.ceil(width / cellW) + 2
            rows = Math.ceil(height / CELL_H)
            const fieldRows = Math.min(Math.floor(rows * 0.5), 24)

            blades = []
            for (let x = -1; x < cols; x++) {
                const rand = seeded(x + 1000)
                if (rand() < 0.1) continue
                // Rolling hills: a slow wave sets how tall each stretch of field grows
                const hill = 0.55 + 0.3 * Math.sin(x * 0.035) + 0.15 * Math.sin(x * 0.11 + 1.3)
                blades.push({
                    x,
                    h: Math.max(2, Math.round(fieldRows * hill * (0.35 + 0.65 * Math.pow(rand(), 1.4)))),
                    phase: rand() * Math.PI * 2,
                    stiffness: 0.7 + rand() * 0.8,
                    flower: rand() < 0.09 ? Math.floor(rand() * FLOWERS.length) : -1,
                })
            }
        }

        const draw = (t: number) => {
            ctx.clearRect(0, 0, width, height)
            const groundRow = rows - 1

            ctx.fillStyle = palette.ground
            for (let x = 0; x * cellW < width; x += 1) {
                ctx.fillText(x % 7 === 3 ? "." : "_", x * cellW, groundRow * CELL_H)
            }

            for (const b of blades) {
                const bx = b.x * cellW
                const gust =
                    Math.sin(t * 0.8 + b.x * 0.05) * 1.1 +
                    Math.sin(t * 2.1 + b.x * 0.17 + b.phase) * 0.35

                let push = 0
                const top = (groundRow - b.h) * CELL_H
                if (pointer.y > top - 30) {
                    const dx = bx - pointer.x
                    const dist = Math.abs(dx)
                    if (dist < PUSH_RADIUS) push = Math.sign(dx || 1) * (1 - dist / PUSH_RADIUS) * 4.5
                }

                const lean = (gust + push) / b.stiffness
                let prev = 0
                let color = ""
                for (let k = 0; k < b.h; k++) {
                    const f = (k + 1) / b.h
                    const offset = lean * f * f
                    const isTip = k === b.h - 1
                    const isFlower = isTip && b.flower >= 0

                    const next = isFlower
                        ? palette.flowers[(b.x + b.flower) % palette.flowers.length]
                        : f > 0.85 ? palette.tip : f > 0.4 ? palette.mid : palette.stem
                    if (next !== color) {
                        color = next
                        ctx.fillStyle = color
                    }

                    const ch = isFlower ? FLOWERS[b.flower] : glyphFor(offset - prev, isTip)
                    ctx.fillText(ch, (b.x + Math.round(offset)) * cellW, (groundRow - 1 - k) * CELL_H)
                    prev = offset
                }
            }

            if (motes.length) {
                ctx.fillStyle = palette.mote
                for (let i = motes.length - 1; i >= 0; i--) {
                    const m = motes[i]
                    m.x += m.vx + Math.sin(t * 3 + i) * 0.3
                    m.y += m.vy
                    m.life -= 0.012
                    if (m.life <= 0) {
                        motes.splice(i, 1)
                        continue
                    }
                    ctx.globalAlpha = Math.min(1, m.life * 1.5)
                    ctx.fillText(m.life > 0.5 ? "*" : ".", m.x, m.y)
                }
                ctx.globalAlpha = 1
            }
        }

        const loop = (now: number) => {
            raf = requestAnimationFrame(loop)
            if (now - last < FRAME_MS) return
            last = now
            draw(now / 1000)
        }

        const start = () => {
            if (reducedMotion || raf || !onScreen || document.hidden) return
            raf = requestAnimationFrame(loop)
        }

        const stop = () => {
            cancelAnimationFrame(raf)
            raf = 0
        }

        const redrawStatic = () => {
            if (reducedMotion) draw(0)
        }

        const onPointerMove = (e: PointerEvent) => {
            const rect = canvas.getBoundingClientRect()
            pointer.x = e.clientX - rect.left
            pointer.y = e.clientY - rect.top
            const speed = Math.abs(pointer.x - pointer.lastX)
            pointer.lastX = pointer.x

            const fieldTop = height - Math.min(Math.floor(rows * 0.5), 24) * CELL_H
            if (!reducedMotion && pointer.y > fieldTop && speed > 4 && motes.length < MAX_MOTES && Math.random() < 0.5) {
                motes.push({
                    x: pointer.x,
                    y: pointer.y,
                    vx: (Math.random() - 0.5) * 1.2,
                    vy: -0.4 - Math.random() * 0.8,
                    life: 1,
                })
            }
        }

        const onPointerLeave = () => {
            pointer.x = -1e4
            pointer.y = -1e4
        }

        const onVisibility = () => (document.hidden ? stop() : start())

        const resizeObserver = new ResizeObserver(() => {
            layout()
            redrawStatic()
        })
        resizeObserver.observe(canvas)

        const intersection = new IntersectionObserver(([entry]) => {
            onScreen = entry.isIntersecting
            if (onScreen) start()
            else stop()
        })
        intersection.observe(canvas)

        // Colours come from CSS variables, so re-read them when the theme class flips
        const themeObserver = new MutationObserver(() => {
            palette = readPalette()
            redrawStatic()
        })
        themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] })

        host.addEventListener("pointermove", onPointerMove)
        host.addEventListener("pointerleave", onPointerLeave)
        document.addEventListener("visibilitychange", onVisibility)

        // Glyph width depends on the web font; measure again once it has loaded
        document.fonts?.ready.then(() => {
            layout()
            redrawStatic()
        })

        layout()
        redrawStatic()
        start()

        return () => {
            stop()
            resizeObserver.disconnect()
            intersection.disconnect()
            themeObserver.disconnect()
            host.removeEventListener("pointermove", onPointerMove)
            host.removeEventListener("pointerleave", onPointerLeave)
            document.removeEventListener("visibilitychange", onVisibility)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            aria-hidden="true"
            className={cn("pointer-events-none block h-full w-full font-mono", className)}
        />
    )
}

export default AsciiMeadow
