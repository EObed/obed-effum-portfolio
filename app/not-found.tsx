import Link from "next/link"
import Image from "next/image"
import logo from "@/public/images/logo.png"
import { Home, ArrowUpRight } from "lucide-react"
import Footer from "@/components/Footer"

// Minimal syntax highlighting for the snippet below
const kw = "text-violet-600 dark:text-violet-400"
const fn = "text-sky-600 dark:text-sky-400"
const str = "text-emerald-600 dark:text-emerald-400"
const dim = "text-slate-400 dark:text-slate-500"

const quickLinks = [
    { title: "About", href: "/#about" },
    { title: "Projects", href: "/#projects" },
    { title: "Skills", href: "/#skills" },
    { title: "Solutions", href: "/#solutions" },
    { title: "Contact", href: "/#contact" },
]

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 transition-colors">
            {/* Brand mark only — the section anchors live on the home page */}
            <header className="w-full px-6 md:px-8 py-3.5 border-b border-slate-200/70 dark:border-slate-800/70">
                <Link href="/" className="inline-flex items-center gap-2.5">
                    <span className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-slate-200 dark:ring-slate-700">
                        <Image src={logo} alt="" fill className="object-contain" sizes="32px" />
                    </span>
                    <span className="text-lg font-bold text-gradient">Obed Effum</span>
                </Link>
            </header>

            <main className="relative flex-1 flex items-center justify-center overflow-hidden px-6 py-20">
                <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_10%,transparent_75%)]" />
                <div
                    className="absolute top-[-12rem] left-1/2 -translate-x-1/2 w-[34rem] h-[34rem] rounded-full opacity-20 dark:opacity-25 blur-3xl"
                    style={{ background: "var(--accent-gradient)" }}
                />

                <div className="relative flex flex-col items-center text-center w-full max-w-xl mx-auto gap-6">
                    <h1
                        data-nf-rise
                        className="flex flex-col items-center gap-1"
                    >
                        <span className="text-8xl md:text-9xl font-black text-gradient leading-none tracking-tight">
                            404
                        </span>
                        <span className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-slate-100 transition-colors">
                            This route doesn&apos;t exist
                        </span>
                    </h1>

                    <p
                        data-nf-rise
                        style={{ "--nf-delay": "100ms" } as React.CSSProperties}
                        className="text-slate-500 dark:text-slate-400 text-base md:text-lg leading-relaxed transition-colors"
                    >
                        The page you&apos;re after was moved, renamed, or never shipped in the
                        first place. Good news: everything else still works.
                    </p>

                    {/* The joke lands better in a real editor chrome */}
                    <div
                        data-nf-rise
                        style={{ "--nf-delay": "200ms" } as React.CSSProperties}
                        className="w-full min-w-0 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden shadow-lg shadow-slate-200/50 dark:shadow-black/30"
                    >
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/60">
                            <span className="w-3 h-3 rounded-full bg-red-400" />
                            <span className="w-3 h-3 rounded-full bg-amber-400" />
                            <span className="w-3 h-3 rounded-full bg-emerald-400" />
                            <span className="ml-2 font-mono text-xs text-slate-400 dark:text-slate-500">
                                app/not-found.tsx
                            </span>
                        </div>

                        <pre className="px-5 py-4 text-left font-mono text-xs md:text-sm leading-relaxed overflow-x-auto text-slate-700 dark:text-slate-300">
                            <code>
                                <span className={kw}>import</span>{" { "}<span className={fn}>notFound</span>{" } "}<span className={kw}>from</span>{" "}<span className={str}>&apos;next/navigation&apos;</span>{"\n\n"}
                                <span className={kw}>export default function</span>{" "}<span className={fn}>Page</span>{"() {\n  "}
                                <span className={fn}>notFound</span>{"()"}<span className={dim}>{"  // ← you are here"}</span>{"\n}"}
                            </code>
                        </pre>
                    </div>

                    <div
                        data-nf-rise
                        style={{ "--nf-delay": "300ms" } as React.CSSProperties}
                        className="flex flex-wrap justify-center gap-4 mt-2"
                    >
                        <Link
                            href="/"
                            className="flex items-center gap-2 px-6 py-3 brand-gradient hover:opacity-90 text-white font-semibold rounded-xl transition-opacity"
                        >
                            <Home size={17} strokeWidth={1.8} />
                            Back Home
                        </Link>

                        <Link
                            href="/#projects"
                            className="flex items-center gap-2 px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
                        >
                            View My Work
                            <ArrowUpRight size={17} strokeWidth={1.8} />
                        </Link>
                    </div>

                    <nav
                        data-nf-rise
                        style={{ "--nf-delay": "400ms" } as React.CSSProperties}
                        aria-label="Site sections"
                        className="flex flex-wrap justify-center gap-x-5 gap-y-2 mt-2 text-sm"
                    >
                        {quickLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                            >
                                {link.title}
                            </Link>
                        ))}
                    </nav>
                </div>
            </main>

            <Footer />
        </div>
    )
}

export default NotFound
