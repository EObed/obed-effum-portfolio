import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface HeadingProps {
    children: ReactNode
    /** Comment / markdown marker in the file's own syntax: "#", "//", "##"… */
    mark?: string
    level?: 1 | 2 | 3
    className?: string
}

const sizes = {
    1: "text-3xl md:text-4xl",
    2: "text-2xl md:text-3xl",
    3: "text-base md:text-lg",
}

const Heading = ({ children, mark = "#", level = 2, className }: HeadingProps) => {
    const Tag = `h${level}` as const
    return (
        <Tag className={cn("font-bold leading-tight tracking-tight text-fg", sizes[level], className)}>
            <span aria-hidden="true" className="mr-[1ch] font-normal text-purple">{mark}</span>
            {children}
        </Tag>
    )
}

export default Heading
