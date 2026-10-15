"use client"

import { useSyncExternalStore } from "react"
import { GitBranch, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import type { EditorFile } from "@/lib/editor"
import { cn } from "@/lib/utils"

const noopSubscribe = () => () => {}

const subscribeScroll = (cb: () => void) => {
    window.addEventListener("scroll", cb, { passive: true })
    window.addEventListener("resize", cb)
    return () => {
        window.removeEventListener("scroll", cb)
        window.removeEventListener("resize", cb)
    }
}

/** Vim's ruler: Top / Bot / NN% */
const getScrollLabel = () => {
    const max = document.documentElement.scrollHeight - window.innerHeight
    if (max <= 0 || window.scrollY <= 4) return "Top"
    if (window.scrollY >= max - 4) return "Bot"
    return `${Math.round((window.scrollY / max) * 100)}%`
}

const subscribeFocus = (cb: () => void) => {
    document.addEventListener("focusin", cb)
    document.addEventListener("focusout", cb)
    return () => {
        document.removeEventListener("focusin", cb)
        document.removeEventListener("focusout", cb)
    }
}

/** Typing in the contact form flips the editor into INSERT mode. */
const getMode = () => {
    const el = document.activeElement
    return el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement ? "INSERT" : "NORMAL"
}

const StatusBar = ({ file }: { file: EditorFile }) => {
    const scroll = useSyncExternalStore(subscribeScroll, getScrollLabel, () => "Top")
    const mode = useSyncExternalStore(subscribeFocus, getMode, () => "NORMAL")
    const mounted = useSyncExternalStore(noopSubscribe, () => true, () => false)
    const { resolvedTheme, setTheme } = useTheme()
    const isDark = !mounted || resolvedTheme !== "light"

    return (
        <div className="fixed inset-x-0 bottom-0 z-30 flex h-7 items-stretch border-t border-surface1 bg-mantle text-xs">
            <span
                className={cn(
                    "flex items-center px-3 font-bold tracking-wide text-base transition-colors",
                    mode === "INSERT" ? "bg-yellow" : "bg-green"
                )}
            >
                {mode}
            </span>
            <span className="hidden items-center gap-1.5 bg-surface1 px-3 text-subtext2 sm:flex">
                <GitBranch size={12} aria-hidden />
                main
            </span>
            <span className="flex min-w-0 items-center px-3 text-subtext1">
                <span className="truncate">~/obed-effum/{file.name}</span>
            </span>

            <span className="ml-auto hidden items-center px-3 text-subtext0 md:flex">{file.lang}</span>
            <span className="hidden items-center px-3 text-subtext0 md:flex">utf-8</span>
            <button
                type="button"
                onClick={() => setTheme(isDark ? "light" : "dark")}
                aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
                className="ml-auto flex items-center gap-1.5 px-3 text-subtext1 transition-colors hover:bg-surface1 hover:text-fg md:ml-0"
            >
                {isDark ? <Moon size={12} aria-hidden /> : <Sun size={12} aria-hidden />}
                {isDark ? "dark" : "light"}
            </button>
            <span className="flex w-14 items-center justify-center bg-surface1 tabular-nums text-subtext2">
                {scroll}
            </span>
        </div>
    )
}

export default StatusBar
