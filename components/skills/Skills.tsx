"use client";
import { useEffect, useRef } from "react";
import {SkillCard} from "@/components/skills/SkillCard";
import { Code2, Server, Wrench } from "lucide-react"


const Skills = () => {
    const titleRef = useRef<HTMLDivElement>(null);

    const skillsData = [
        {
            icon: Code2,
            title: "Frontend Development",
            skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
        },
        {
            icon: Server,
            title: "Backend Development",
            skills: ["PhP", "Laravel", "MySQL"],
        },
        {
            icon: Wrench,
            title: "Tools & Workflow",
            skills: ["Git & GitHub", "AI-Assisted Development", "Postman"],
        },
    ]

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) entry.target.classList.add("in-view")
                })
            },
            { threshold: 0.2 }
        )
        if (titleRef.current) observer.observe(titleRef.current)
        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
                .reveal-title {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s ease, transform 0.6s ease;
                }
                .reveal-title.in-view {
                    opacity: 1;
                    transform: translateY(0);
                }
                .reveal-card {
                    opacity: 0;
                    transform: scale(0.93) translateY(36px);
                    filter: blur(4px);
                    transition:
                        opacity 0.65s ease,
                        transform 0.65s ease,
                        filter 0.65s ease,
                        box-shadow 0.3s ease;
                }
                .reveal-card.in-view {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                    filter: blur(0);
                }
            `}</style>

            <section
                id="skills"
                className="w-full bg-gray-50 dark:bg-slate-950 px-6 py-20 md:py-28 transition-colors dark:border-y"
            >
                <div className="max-w-6xl mx-auto flex flex-col gap-12">
                    <div ref={titleRef} className="reveal-title text-center flex flex-col gap-3">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-slate-100 transition-colors">
                            Skills & Expertise
                        </h2>

                        <p className="text-gray-500 dark:text-slate-400 text-base md:text-lg transition-colors">
                            Technologies and tools I utilize
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
                        {skillsData.map((item, i) => (
                            <SkillCard
                                key={item.title}
                                icon={item.icon}
                                title={item.title}
                                skills={item.skills}
                                delay={i * 100}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Skills