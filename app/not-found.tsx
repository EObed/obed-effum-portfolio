import Link from "next/link"
import EditorShell from "@/components/editor/EditorShell"
import Buffer from "@/components/editor/Buffer"
import Heading from "@/components/editor/Heading"
import Footer from "@/components/Footer"

const notFoundFile = { id: "not-found", name: "404.md", lang: "markdown" }

const NotFound = () => {
    return (
        <EditorShell fallbackFile={notFoundFile}>
            <main id="main">
                <Buffer id={notFoundFile.id} file={notFoundFile.name} lang={notFoundFile.lang} className="min-h-[70svh]">
                    <p className="text-sm text-red">E484: Can&apos;t open file</p>

                    <Heading level={1} className="mt-4">404 — this route doesn&apos;t exist</Heading>

                    <p className="mt-6 max-w-[60ch] leading-7 text-subtext1">
                        The page you&apos;re after was moved, renamed, or never shipped in the first place.
                        Good news: everything else still works.
                    </p>

                    <pre className="mt-8 overflow-x-auto border border-surface2 bg-mantle p-4 text-sm leading-6">
                        <code>
                            <span className="text-red">import</span> <span className="text-subtext0">{"{"}</span> <span className="text-green">notFound</span> <span className="text-subtext0">{"}"}</span> <span className="text-red">from</span> <span className="text-lime">&quot;next/navigation&quot;</span>
                            {"\n\n"}
                            <span className="text-red">export default function</span> <span className="text-green">Page</span><span className="text-subtext0">() {"{"}</span>
                            {"\n  "}
                            <span className="text-green">notFound</span><span className="text-subtext0">()</span>
                            <span className="italic text-overlay2">{"  // ← you are here"}</span>
                            {"\n"}
                            <span className="text-subtext0">{"}"}</span>
                        </code>
                    </pre>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <Link href="/" className="btn">
                            <span aria-hidden="true">:e</span> ~/README.md
                        </Link>
                        <Link href="/#projects" className="btn" style={{ "--btn": "var(--blue)" } as React.CSSProperties}>
                            <span aria-hidden="true">▸</span> view projects
                        </Link>
                    </div>
                </Buffer>
            </main>
            <Footer />
        </EditorShell>
    )
}

export default NotFound
