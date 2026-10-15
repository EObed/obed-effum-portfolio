"use client"

import { useCallback, useState, type ReactNode } from "react"
import { Menu } from "lucide-react"
import Sidebar from "@/components/editor/Sidebar"
import StatusBar from "@/components/editor/StatusBar"
import FileIcon from "@/components/editor/FileIcon"
import { useActiveSection } from "@/hooks/useActiveSection"
import { allFileIds, allFiles, sectionFiles, type EditorFile } from "@/lib/editor"

interface EditorShellProps {
    children: ReactNode
    /** Shown in the status bar when no tracked section is on screen (e.g. the 404 page). */
    fallbackFile?: EditorFile
}

/** Sidebar file tree + status bar around the page content. */
const EditorShell = ({ children, fallbackFile = sectionFiles.readme }: EditorShellProps) => {
    const activeId = useActiveSection(allFileIds)
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = useCallback(() => setMenuOpen(false), [])

    const activeFile = allFiles.find((f) => f.id === activeId) ?? fallbackFile

    return (
        <div className="min-h-svh lg:grid lg:grid-cols-[17rem_minmax(0,1fr)]">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:bg-green focus:px-3 focus:py-1 focus:text-base"
            >
                Skip to content
            </a>

            <Sidebar activeId={activeId} open={menuOpen} onClose={closeMenu} />

            <div className="min-w-0 pb-7">
                <div className="sticky top-0 z-30 flex h-10 items-center gap-3 border-b border-surface1 bg-mantle px-2 lg:hidden">
                    <button
                        type="button"
                        onClick={() => setMenuOpen(true)}
                        aria-expanded={menuOpen}
                        className="btn"
                    >
                        <Menu size={14} aria-hidden />
                        menu
                    </button>
                    <span className="flex min-w-0 items-center gap-1.5 text-xs text-subtext1">
                        <FileIcon name={activeFile.name} />
                        <span className="truncate">{activeFile.name}</span>
                    </span>
                </div>

                {children}
            </div>

            <StatusBar file={activeFile} />
        </div>
    )
}

export default EditorShell
