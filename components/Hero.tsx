import Link from "next/link"
import { ArrowUpRight, Download } from "lucide-react"
import AsciiMeadow from "@/components/AsciiMeadow"
import { BufferTab } from "@/components/editor/Buffer"
import LineGutter from "@/components/editor/LineGutter"
import { sectionFiles } from "@/lib/editor"
import { siteConfig } from "@/lib/site"

const links = [
    { label: "github", href: siteConfig.social.github },
    { label: "linkedin", href: siteConfig.social.linkedin },
]

const Hero = () => {
    return (
        <section
            id={sectionFiles.readme.id}
            className="flex min-h-[calc(100svh-4.25rem)] flex-col border-b border-surface1 lg:min-h-[calc(100svh-1.75rem)]"
        >
            <BufferTab file={sectionFiles.readme.name} lang={sectionFiles.readme.lang} />

            <div className="relative flex flex-1 flex-col overflow-hidden">
                <AsciiMeadow className="absolute inset-0" />
                <LineGutter />

                <div className="relative px-4 pb-[min(45svh,24rem)] pt-12 sm:pl-16 sm:pr-8 md:pt-20 lg:pl-20">
                    <p className="text-sm text-subtext0">
                        <span className="text-green">❯</span> whoami
                    </p>

                    <h1 className="mt-4">
                        <span className="block text-5xl font-bold leading-none tracking-tight text-fg sm:text-6xl md:text-7xl">
                            Obed Effum
                        </span>
                        <span className="mt-4 block text-lg text-green md:text-xl">
                            full stack developer<span className="caret" aria-hidden="true" />
                        </span>
                    </h1>

                    <p className="mt-6 max-w-xl leading-7 text-subtext1">
                        Building scalable, high-performance web applications with modern frontend and
                        backend technologies — clean architecture, maintainable code, and seamless
                        experiences from interface to API.
                    </p>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/#projects" className="btn">
                            <span aria-hidden="true">▸</span> view projects
                        </Link>
                        <a
                            href="/resume.pdf"
                            download="Obed_Effum_Resume.pdf"
                            className="btn"
                            style={{ "--btn": "var(--blue)" } as React.CSSProperties}
                        >
                            <Download size={13} aria-hidden /> resume.pdf
                        </a>
                        <Link href="/#contact" className="btn" style={{ "--btn": "var(--purple)" } as React.CSSProperties}>
                            <span aria-hidden="true">✉</span> get in touch
                        </Link>
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm text-subtext0">
                        {links.map((link) => (
                            <li key={link.label}>
                                <a
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-1 underline decoration-surface2 underline-offset-4 transition-colors hover:text-fg hover:decoration-green"
                                >
                                    {link.label}
                                    <ArrowUpRight size={12} aria-hidden />
                                </a>
                            </li>
                        ))}
                        <li>
                            <a
                                href={`mailto:${siteConfig.email}`}
                                className="underline decoration-surface2 underline-offset-4 transition-colors hover:text-fg hover:decoration-green"
                            >
                                {siteConfig.email}
                            </a>
                        </li>
                    </ul>
                </div>

                <p
                    aria-hidden="true"
                    className="pointer-events-none absolute right-4 top-4 hidden text-xs text-overlay2 [@media(hover:hover)]:block sm:right-8"
                >
                    ~ wander through the meadow ~
                </p>
            </div>
        </section>
    )
}

export default Hero
