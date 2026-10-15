"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { ArrowUpRight, ChevronLeft, ChevronRight, X } from "lucide-react"
import type IProject from "@/types/IProject"

interface ImageViewerProps {
    project: IProject
    index: number
    /** Must be stable: the keyboard listener is bound once. */
    onStep: (delta: number) => void
    onClose: () => void
}

/** Screenshot viewer styled as a floating editor window. */
const ImageViewer = ({ project, index, onStep, onClose }: ImageViewerProps) => {
    const closeRef = useRef<HTMLButtonElement>(null)
    const count = project.images.length

    useEffect(() => {
        const opener = document.activeElement as HTMLElement | null
        closeRef.current?.focus()

        const previousOverflow = document.body.style.overflow
        document.body.style.overflow = "hidden"

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
            else if (e.key === "ArrowRight" || e.key === "l") onStep(1)
            else if (e.key === "ArrowLeft" || e.key === "h") onStep(-1)
        }
        window.addEventListener("keydown", onKey)

        return () => {
            window.removeEventListener("keydown", onKey)
            document.body.style.overflow = previousOverflow
            opener?.focus()
        }
    }, [onClose, onStep])

    return (
        <div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-crust/80 p-3 backdrop-blur-[2px] animate-in fade-in-0 duration-150 sm:p-6"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-label={`${project.title} screenshots`}
                onClick={(e) => e.stopPropagation()}
                className="flex max-h-full w-full max-w-5xl flex-col border border-overlay0 bg-base shadow-2xl animate-in zoom-in-95 duration-150"
            >
                <div className="flex h-8 shrink-0 items-center gap-3 border-b border-surface1 bg-mantle pl-3 text-xs">
                    <span className="truncate text-subtext1">
                        ~/projects/{project.slug}/screenshot-{index + 1}.png
                    </span>
                    <span className="ml-auto shrink-0 tabular-nums text-overlay2">
                        {index + 1}/{count}
                    </span>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        aria-label="Close"
                        className="flex h-full w-9 shrink-0 items-center justify-center text-subtext0 transition-colors hover:bg-red hover:text-base focus-visible:bg-red focus-visible:text-base outline-none"
                    >
                        <X size={14} aria-hidden />
                    </button>
                </div>

                <div className="relative aspect-[16/10] max-h-[72svh] w-full bg-crust">
                    <Image
                        key={project.images[index]}
                        src={project.images[index]}
                        alt={`${project.title} — screenshot ${index + 1} of ${count}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 1024px"
                        className="object-contain animate-in fade-in-0 duration-200"
                    />
                </div>

                <div className="flex shrink-0 flex-wrap items-center gap-3 border-t border-surface1 p-3">
                    {count > 1 && (
                        <>
                            <button type="button" className="btn" onClick={() => onStep(-1)}>
                                <ChevronLeft size={14} aria-hidden /> prev
                            </button>
                            <button type="button" className="btn" onClick={() => onStep(1)}>
                                next <ChevronRight size={14} aria-hidden />
                            </button>
                            <span className="hidden text-xs text-overlay2 sm:inline">← → / h l · esc to close</span>
                        </>
                    )}
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn ml-auto"
                            style={{ "--btn": "var(--blue)" } as React.CSSProperties}
                        >
                            open live site <ArrowUpRight size={13} aria-hidden />
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ImageViewer
