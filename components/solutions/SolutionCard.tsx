"use client"

import type { LucideIcon } from "lucide-react"
import Image from "next/image"
import { useInView } from "@/hooks/useInView"

interface SolutionCardProps {
    number: string
    icon: LucideIcon
    title: string
    description: string
    image: string
    isOpen: boolean
    onActivate: () => void
    delay?: number
}

export const SolutionCard = ({ number, icon: Icon, title, description, image, isOpen, onActivate, delay = 0 }: SolutionCardProps) => {
    const { ref: cardRef, inView: cardInView } = useInView<HTMLDivElement>(0.15)

    return (
        <div
            ref={cardRef}
            data-reveal="scale"
            data-inview={cardInView}
            onMouseEnter={onActivate}
            onFocus={onActivate}
            onClick={onActivate}
            tabIndex={0}
            style={{
                "--reveal-delay": `${delay}ms`,
                flexGrow: isOpen ? 5 : 1,
            } as React.CSSProperties}
            className={`relative flex-shrink-0 basis-0 min-w-[76px] h-[380px] md:h-[440px] rounded-2xl border cursor-pointer overflow-hidden
                transition-[flex-grow,border-color,box-shadow] duration-500 ease-in-out outline-none
                ${isOpen
                    ? "bg-white dark:bg-slate-900 border-indigo-200 dark:border-indigo-500/40 shadow-xl dark:shadow-[0_0_30px_rgba(139,92,246,0.25)] min-w-[240px]"
                    : "bg-white/60 dark:bg-slate-900/60 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
        >
            {/* Collapsed content */}
            <div
                className={`absolute inset-0 flex flex-col items-center py-6 gap-6 transition-opacity duration-300 ${
                    isOpen ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                <span className="text-sm font-bold tabular-nums text-slate-400 dark:text-slate-600">
                    {number}
                </span>

                <div className="w-11 h-11 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center shrink-0">
                    <Icon size={20} strokeWidth={1.8} className="text-slate-500 dark:text-slate-400" />
                </div>

                <span
                    className="flex-1 font-bold text-sm tracking-wide text-slate-500 dark:text-slate-400 whitespace-nowrap"
                    style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                >
                    {title}
                </span>
            </div>

            {/* Open content */}
            <div
                className={`absolute inset-0 flex flex-col p-6 transition-opacity duration-300 ${
                    isOpen ? "opacity-100 delay-150" : "opacity-0 pointer-events-none"
                }`}
            >
                <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full brand-gradient flex items-center justify-center shrink-0">
                        <Icon size={20} strokeWidth={1.8} className="text-white" />
                    </div>
                    <span className="text-sm font-bold tabular-nums text-indigo-500 dark:text-indigo-400">
                        {number}
                    </span>
                </div>

                <div className="relative flex-1 min-h-0 my-2">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        className="object-contain p-3"
                        sizes="(max-width: 768px) 60vw, 320px"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-lg md:text-xl text-slate-900 dark:text-slate-100">
                        {title}
                    </h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    )
}
