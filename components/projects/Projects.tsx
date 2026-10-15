"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Images } from "lucide-react"
import Buffer from "@/components/editor/Buffer"
import Heading from "@/components/editor/Heading"
import Reveal from "@/components/editor/Reveal"
import ImageViewer from "@/components/projects/ImageViewer"
import { sectionFiles } from "@/lib/editor"
import { projects } from "@/lib/projects"
import type IProject from "@/types/IProject"

type ViewerState = { project: IProject; index: number } | null

const Projects = () => {
    const { id, name, lang } = sectionFiles.projects
    const [viewer, setViewer] = useState<ViewerState>(null)

    const close = useCallback(() => setViewer(null), [])
    const step = useCallback((delta: number) => {
        setViewer((v) => {
            if (!v) return v
            const n = v.project.images.length
            return { ...v, index: (v.index + delta + n) % n }
        })
    }, [])

    return (
        <Buffer id={id} file={name} lang={lang}>
            <Reveal>
                <Heading>projects</Heading>
                <p className="mt-4 max-w-[68ch] leading-7 text-subtext1">
                    Recent work — payment platforms, dashboards and the internal tools that keep businesses
                    running.
                </p>
            </Reveal>

            <div className="mt-12 grid gap-x-10 gap-y-16 lg:grid-cols-2">
                {projects.map((project, i) => (
                    <Reveal key={project.slug} delay={(i % 2) * 100}>
                        <article id={`project-${project.slug}`} className="flex flex-col">
                            <p className="text-xs text-overlay2">{`// ${String(i + 1).padStart(2, "0")}`}</p>
                            <Heading level={3} mark="##" className="mt-1 text-blue">
                                {project.title}
                            </Heading>

                            <button
                                type="button"
                                onClick={() => setViewer({ project, index: 0 })}
                                aria-label={`View ${project.title} screenshots`}
                                className="group relative mt-4 aspect-[16/10] w-full overflow-hidden border border-overlay0 bg-surface0 outline-none transition-colors hover:border-green focus-visible:border-green"
                            >
                                <Image
                                    src={project.images[0]}
                                    alt=""
                                    fill
                                    sizes="(max-width: 1024px) 100vw, 40vw"
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
                                />
                                <span className="absolute bottom-0 left-0 flex items-center gap-1.5 border-r border-t border-overlay0 bg-base/90 px-2 text-xs leading-6 text-subtext1 transition-colors group-hover:text-green">
                                    <Images size={12} aria-hidden />
                                    {project.images.length} screenshots
                                </span>
                            </button>

                            <p className="mt-4 text-sm leading-6 text-subtext1">{project.description}</p>

                            <p className="mt-3 text-sm leading-6">
                                <span className="text-red">const</span>{" "}
                                <span className="text-fg">stack</span>{" "}
                                <span className="text-subtext0">= [</span>
                                {project.techStack.map((tech, t) => (
                                    <span key={tech}>
                                        <span className="text-lime">&quot;{tech}&quot;</span>
                                        {t < project.techStack.length - 1 && <span className="text-subtext0">, </span>}
                                    </span>
                                ))}
                                <span className="text-subtext0">]</span>
                            </p>

                            <div className="mt-5 flex flex-wrap gap-3">
                                <button type="button" className="btn" onClick={() => setViewer({ project, index: 0 })}>
                                    <span aria-hidden="true">▸</span> screenshots
                                </button>
                                {project.link && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn"
                                        style={{ "--btn": "var(--blue)" } as React.CSSProperties}
                                    >
                                        live site <ArrowUpRight size={13} aria-hidden />
                                    </a>
                                )}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>

            {viewer && (
                <ImageViewer project={viewer.project} index={viewer.index} onStep={step} onClose={close} />
            )}
        </Buffer>
    )
}

export default Projects
