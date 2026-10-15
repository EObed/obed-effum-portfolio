import type { ReactNode } from "react"
import FileIcon from "@/components/editor/FileIcon"
import LineGutter from "@/components/editor/LineGutter"
import { cn } from "@/lib/utils"

interface BufferProps {
    id: string
    file: string
    lang: string
    children: ReactNode
    className?: string
}

/** The file's tab row, as an editor shows it above an open buffer. */
export const BufferTab = ({ file, lang }: { file: string; lang: string }) => (
    <div className="flex h-8 items-stretch border-b border-surface1 bg-mantle text-xs">
        <span className="flex items-center gap-2 border-r border-surface1 border-t-2 border-t-green bg-base px-3 text-fg">
            <FileIcon name={file} />
            {file}
        </span>
        <span className="ml-auto flex items-center px-3 text-overlay2">{lang}</span>
    </div>
)

/** A page section presented as an open file: tab row, line gutter, content. */
const Buffer = ({ id, file, lang, children, className }: BufferProps) => (
    <section id={id} className="border-b border-surface1">
        <BufferTab file={file} lang={lang} />
        <div className="relative">
            <LineGutter />
            <div className={cn("px-4 py-8 sm:pl-16 sm:pr-8 md:py-12 lg:pl-20 lg:pr-12", className)}>
                {children}
            </div>
        </div>
    </section>
)

export default Buffer
