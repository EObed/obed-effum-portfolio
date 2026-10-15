import { siteConfig } from "@/lib/site"

const Footer = () => {
    return (
        <footer className="flex flex-wrap gap-x-8 gap-y-2 px-4 py-8 text-xs text-overlay2 sm:pl-16 lg:pl-20">
            <span className="text-overlay1">-- EOF --</span>
            <span>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</span>
            <span>built with next.js · set in JetBrains Mono</span>
        </footer>
    )
}

export default Footer
