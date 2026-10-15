import Buffer from "@/components/editor/Buffer"
import Heading from "@/components/editor/Heading"
import Reveal from "@/components/editor/Reveal"
import { sectionFiles } from "@/lib/editor"

const skillsData = [
    { key: "frontend", title: "Frontend Development", skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"] },
    { key: "backend", title: "Backend Development", skills: ["PHP", "Laravel", "Node.js", "Express", "MySQL"] },
    { key: "tooling", title: "Tools & Workflow", skills: ["Git & GitHub", "Artificial Intelligence", "Postman", "Figma", "Adobe XD"] },
]

const p = (s: string) => <span className="text-subtext0">{s}</span>

/** Rendered as a syntax-highlighted TypeScript module. */
const Skills = () => {
    const { id, name, lang } = sectionFiles.skills

    return (
        <Buffer id={id} file={name} lang={lang}>
            <Reveal>
                <Heading mark="//">skills &amp; expertise</Heading>
                <p className="mt-4 max-w-[68ch] leading-7 text-subtext1">Technologies and tools I reach for.</p>
            </Reveal>

            <Reveal delay={100}>
                <pre className="mt-10 overflow-x-auto text-sm leading-6">
                    <code>
                        <span className="text-red">export const</span> <span className="text-fg">skills</span> {p("= {")}
                        {"\n"}
                        {skillsData.map((group) => (
                            <span key={group.key}>
                                {"  "}<span className="italic text-overlay2">{`// ${group.title}`}</span>{"\n"}
                                {"  "}<span className="text-green">{group.key}</span>{p(": [")}{"\n"}
                                {group.skills.map((skill) => (
                                    <span key={skill}>
                                        {"    "}<span className="text-lime">&quot;{skill}&quot;</span>{p(",")}{"\n"}
                                    </span>
                                ))}
                                {"  "}{p("],")}{"\n"}
                            </span>
                        ))}
                        {p("}")} <span className="text-red">as const</span>
                    </code>
                </pre>
            </Reveal>
        </Buffer>
    )
}

export default Skills
