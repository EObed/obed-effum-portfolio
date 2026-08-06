"use client"

import type { LucideIcon } from "lucide-react";
import { useInView } from "@/hooks/useInView"

interface SkillCardProps {
    icon: LucideIcon
    title: string
    skills: string[]
    delay?: number
}

export const SkillCard = ({ icon: Icon, title, skills, delay = 0 }: SkillCardProps) => {
    const { ref: cardRef, inView: cardInView } = useInView<HTMLDivElement>(0.15)

    return (
        <div
            ref={cardRef}
            data-reveal="scale"
            data-inview={cardInView}
            className="group flex flex-col items-center text-center gap-5 p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800
                        rounded-2xl cursor-default transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(139,92,246,0.35)] dark:hover:border-indigo-500/40
                        hover:-translate-y-1"
            style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
        >
            <div className="w-16 h-16 rounded-full brand-gradient flex items-center justify-center shrink-0">
                <Icon
                    size={28}
                    strokeWidth={1.6}
                    className="text-white"
                />
            </div>

            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 leading-snug transition-colors">
                {title}
            </h3>

            <ul className="flex flex-col gap-2">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="text-slate-500 dark:text-slate-400 text-sm md:text-base transition-colors"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}
