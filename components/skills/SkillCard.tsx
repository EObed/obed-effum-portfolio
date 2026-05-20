"use client"

import { useEffect, useRef } from "react";
import type { LucideIcon } from "lucide-react";

interface SkillCardProps {
    icon: LucideIcon
    title: string
    skills: string[]
    delay?: number
}

export const SkillCard = ({ icon: Icon, title, skills, delay = 0 }: SkillCardProps) => {
    const cardRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view")
                    }
                })
            },
            { threshold: 0.15 }
        )
        if (cardRef.current) observer.observe(cardRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <div
            ref={cardRef}
            className="skill-card reveal-card group flex flex-col items-center text-center gap-5 p-8 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800
                        rounded-2xl cursor-default transition-all duration-300 hover:shadow-xl dark:hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] dark:hover:border-blue-500/40
                        dark:hover:-translate-y-1"
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="w-16 h-16 rounded-full bg-blue-100 dark:bg-blue-500/10 flex items-center justify-center shrink-0 transition-colors">
                <Icon
                    size={28}
                    strokeWidth={1.6}
                    className="text-blue-600 dark:text-blue-400"
                />
            </div>

            <h3 className="text-lg font-bold text-gray-900 dark:text-slate-100 leading-snug transition-colors">
                {title}
            </h3>

            <ul className="flex flex-col gap-2">
                {skills.map((skill, index) => (
                    <li
                        key={index}
                        className="text-gray-500 dark:text-slate-400 text-sm md:text-base transition-colors"
                    >
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}