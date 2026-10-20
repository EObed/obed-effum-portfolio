"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { ArrowUpRight, ChevronDown, ChevronRight, Folder, FolderOpen, Mail } from "lucide-react"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import FileIcon from "@/components/editor/FileIcon"
import { projectFiles, sectionFiles, type EditorFile } from "@/lib/editor"
import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

interface SidebarProps {
    activeId: string | null
    open: boolean
    onClose: () => void
}

const rowClass = "flex w-full items-center gap-2 h-6 pr-3 whitespace-nowrap text-left transition-colors hover:bg-surface1 focus-visible:bg-surface1 outline-none"

const TreeFile = ({ file, label, depth, active, onNavigate }: {
    file: EditorFile
    label: string
    depth: number
    active: boolean
    onNavigate: () => void
}) => (
    <li>
        <Link
            href={`/#${file.id}`}
            onClick={onNavigate}
            aria-current={active ? "location" : undefined}
            className={cn(rowClass, active && "bg-green text-base hover:bg-green focus-visible:bg-green")}
            style={{ paddingLeft: `${0.75 + depth * 1.25}rem` }}
        >
            <FileIcon name={file.name} className={active ? "text-base" : undefined} />
            <span className="truncate">{label}</span>
        </Link>
    </li>
)

const Sidebar = ({ activeId, open, onClose }: SidebarProps) => {
    const [projectsOpen, setProjectsOpen] = useState(true)

    useEffect(() => {
        if (!open) return
        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose()
        }
        window.addEventListener("keydown", onKey)
        return () => window.removeEventListener("keydown", onKey)
    }, [open, onClose])

    const fileProps = (file: EditorFile, label: string, depth = 0) => ({
        file,
        label,
        depth,
        active: activeId === file.id,
        onNavigate: onClose,
    })

    return (
        <>
            <div
                aria-hidden="true"
                onClick={onClose}
                className={cn(
                    "fixed inset-0 z-40 bg-crust/70 transition-opacity lg:hidden",
                    open ? "opacity-100" : "pointer-events-none opacity-0"
                )}
            />

            <aside
                className={cn(
                    "fixed inset-y-0 left-0 z-50 flex w-[min(18rem,85vw)] flex-col border-r border-surface1 bg-mantle text-[13px] select-none",
                    "transition-[transform,visibility] duration-200",
                    "lg:sticky lg:top-0 lg:z-auto lg:h-svh lg:w-auto lg:translate-x-0 lg:visible",
                    open ? "translate-x-0" : "-translate-x-full max-lg:invisible"
                )}
            >
                <Link
                    href="/#readme"
                    onClick={onClose}
                    className="flex h-8 shrink-0 items-center gap-2 border-b border-surface0 px-3 text-purple hover:bg-surface1"
                    aria-label={`${siteConfig.name} — home`}
                >
                    <FolderOpen size={14} strokeWidth={1.8} aria-hidden />
                    ~/obed-effum
                </Link>

                <nav aria-label="Site sections" className="flex-1 overflow-y-auto py-1">
                    <ul>
                        <TreeFile {...fileProps(sectionFiles.readme, "README.md")} />
                        <TreeFile {...fileProps(sectionFiles.about, "about.md")} />

                        <li>
                            <button
                                type="button"
                                onClick={() => setProjectsOpen((v) => !v)}
                                aria-expanded={projectsOpen}
                                className={cn(rowClass, "pl-3 text-blue")}
                            >
                                {projectsOpen
                                    ? <ChevronDown size={12} aria-hidden className="-ml-0.5 text-overlay2" />
                                    : <ChevronRight size={12} aria-hidden className="-ml-0.5 text-overlay2" />}
                                {projectsOpen
                                    ? <FolderOpen size={14} strokeWidth={1.8} aria-hidden />
                                    : <Folder size={14} strokeWidth={1.8} aria-hidden />}
                                projects/
                            </button>

                            {projectsOpen && (
                                <ul className="relative before:absolute before:inset-y-0 before:left-[1.2rem] before:w-px before:bg-surface2">
                                    <TreeFile {...fileProps(sectionFiles.projects, "index.md", 1)} />
                                    {projectFiles.map((file) => (
                                        <TreeFile
                                            key={file.id}
                                            {...fileProps(file, file.name.replace("projects/", ""), 1)}
                                        />
                                    ))}
                                </ul>
                            )}
                        </li>

                        <TreeFile {...fileProps(sectionFiles.skills, "skills.ts")} />
                        <TreeFile {...fileProps(sectionFiles.solutions, "solutions.md")} />
                        <TreeFile {...fileProps(sectionFiles.contact, "contact.sh")} />
                    </ul>

                    <div className="mx-3 my-2 border-t border-dashed border-surface2" />

                    <ul className="text-subtext1">
                        <li>
                            <a href="/Obed%20Effum-Resume.pdf" download="Obed_Effum_Resume.pdf" className={cn(rowClass, "pl-3")}>
                                <FileIcon name="resume.pdf" />
                                resume.pdf
                            </a>
                        </li>
                        <li>
                            <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className={cn(rowClass, "pl-3")}>
                                <FaGithub size={13} aria-hidden className="shrink-0" />
                                github
                                <ArrowUpRight size={12} aria-hidden className="ml-auto text-overlay2" />
                            </a>
                        </li>
                        <li>
                            <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className={cn(rowClass, "pl-3")}>
                                <FaLinkedin size={13} aria-hidden className="shrink-0" />
                                linkedin
                                <ArrowUpRight size={12} aria-hidden className="ml-auto text-overlay2" />
                            </a>
                        </li>
                        <li>
                            <a href={`mailto:${siteConfig.email}`} className={cn(rowClass, "pl-3")}>
                                <Mail size={13} aria-hidden className="shrink-0" />
                                email
                            </a>
                        </li>
                    </ul>
                </nav>

                <p className="shrink-0 border-t border-surface0 px-3 py-1.5 text-[11px] text-overlay2">
                    {projectFiles.length + 6} files · 1 folder
                </p>
            </aside>
        </>
    )
}

export default Sidebar
