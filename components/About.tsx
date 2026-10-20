import Image from "next/image"
import { Download } from "lucide-react"
import logo from "@/public/images/logo.png"
import Buffer from "@/components/editor/Buffer"
import Heading from "@/components/editor/Heading"
import Reveal from "@/components/editor/Reveal"
import { sectionFiles } from "@/lib/editor"

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "PHP", "Node.js", "Express"]

const About = () => {
    const { id, name, lang } = sectionFiles.about

    return (
        <Buffer id={id} file={name} lang={lang}>
            <Reveal>
                <Heading>about</Heading>
            </Reveal>

            <div className="mt-8 grid gap-10 xl:grid-cols-[minmax(0,1fr)_15rem] xl:gap-16">
                <Reveal className="flex max-w-[68ch] flex-col gap-5 leading-7 text-subtext1">
                    <p>
                        I’m a full-stack developer who enjoys turning complex ideas into fast, reliable, and
                        intuitive digital products. My work spans both frontend and backend development, so I
                        build complete, end-to-end solutions that don’t just look good but also perform
                        efficiently under the hood.
                    </p>
                    <p>
                        I build scalable web applications with modern frontend technologies like Next.js, React,
                        TypeScript, and Tailwind CSS, alongside backend tools such as PHP and Laravel. I focus on
                        responsive, accessible interfaces and well-structured APIs — clean, maintainable code,
                        efficient data handling, and systems that are easy to scale and extend.
                    </p>

                    <Heading level={3} mark="##" className="mt-4">daily drivers</Heading>
                    <ul className="grid grid-cols-2 gap-x-6 sm:grid-cols-3">
                        {stack.map((tech) => (
                            <li key={tech}>
                                <span aria-hidden="true" className="mr-[1ch] text-green">-</span>
                                <span className="text-fg">{tech}</span>
                            </li>
                        ))}
                    </ul>

                    <a href="/Obed%20Effum-Resume.pdf" download="Obed_Effum_Resume.pdf" className="btn mt-2 self-start">
                        <Download size={13} aria-hidden /> download resume.pdf
                    </a>
                </Reveal>

                <Reveal delay={120}>
                    <figure className="max-w-60">
                        <div className="relative aspect-square border border-overlay0 bg-surface0">
                            <Image src={logo} alt="Obed Effum logo" fill sizes="15rem" className="object-contain p-6" />
                        </div>
                        <figcaption className="mt-2 text-xs text-overlay2">fig. 1 — logo.png</figcaption>
                    </figure>
                </Reveal>
            </div>
        </Buffer>
    )
}

export default About
