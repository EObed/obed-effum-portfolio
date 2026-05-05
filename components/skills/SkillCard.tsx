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
            className="skill-card reveal-card group flex flex-col items-center text-center gap-5 p-8 bg-white border border-gray-200 rounded-2xl cursor-default transition-shadow duration-300 hover:shadow-xl"
            style={{ transitionDelay: `${delay}ms` }}
        >
            {/* Icon bubble */}
            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                <Icon size={28} strokeWidth={1.6} className="text-blue-600" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 leading-snug">{title}</h3>

            {/* Skills list */}
            <ul className="flex flex-col gap-2">
                {skills.map((skill) => (
                    <li key={skill} className="text-gray-500 text-sm md:text-base">
                        {skill}
                    </li>
                ))}
            </ul>
        </div>
    )
}