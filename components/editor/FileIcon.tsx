import { FileCode2, FileDown, FileText, SquareTerminal } from "lucide-react"
import { cn } from "@/lib/utils"

/** Icon + colour per extension, the way an editor's file tree would show it. */
const FileIcon = ({ name, className }: { name: string; className?: string }) => {
    const ext = name.split(".").pop()
    const props = { size: 14, strokeWidth: 1.8, "aria-hidden": true as const }

    switch (ext) {
        case "ts":
        case "tsx":
            return <FileCode2 {...props} className={cn("shrink-0 text-blue", className)} />
        case "sh":
            return <SquareTerminal {...props} className={cn("shrink-0 text-green", className)} />
        case "pdf":
            return <FileDown {...props} className={cn("shrink-0 text-red", className)} />
        default:
            return <FileText {...props} className={cn("shrink-0 text-subtext1", className)} />
    }
}

export default FileIcon
