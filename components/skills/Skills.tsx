"use client";

import { SkillCard } from "@/components/skills/SkillCard";
import { Code2, Server, Wrench } from "lucide-react"
import { useInView } from "@/hooks/useInView"

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

const Skills = () => {
    const { ref: titleRef, inView: titleInView } = useInView<HTMLDivElement>(0.2)

    return (
        <section
            id="skills"
            className="w-full bg-slate-50 dark:bg-slate-950 px-6 py-20 md:py-28 transition-colors"
        >
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                <div
                    ref={titleRef}
                    data-reveal
                    data-inview={titleInView}
                    className="text-center flex flex-col gap-3"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 transition-colors">
                        Skills & Expertise
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg transition-colors">
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
    )
}

export default Skills
