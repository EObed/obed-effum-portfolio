"use client"

import { Download } from "lucide-react"
import { FaCode } from "react-icons/fa6"
import { useInView } from "@/hooks/useInView"

const stack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Laravel", "PHP"]

const About = () => {
    const { ref: titleRef, inView: titleInView } = useInView<HTMLHeadingElement>(0.15)
    const { ref: leftRef, inView: leftInView } = useInView<HTMLDivElement>(0.15)
    const { ref: rightRef, inView: rightInView } = useInView<HTMLDivElement>(0.15)

    return (
        <section
            id="about"
            className="w-full bg-slate-50 dark:bg-slate-950 px-6 py-20 md:py-28 transition-colors"
        >
            <div className="max-w-5xl mx-auto flex flex-col gap-12">

                <h2
                    ref={titleRef}
                    data-reveal
                    data-inview={titleInView}
                    className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-slate-100 text-center transition-colors"
                >
                    About Me
                </h2>

                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                    <div
                        ref={leftRef}
                        data-reveal="left"
                        data-inview={leftInView}
                        className="flex flex-col gap-5 md:w-1/2"
                    >
                        <p className="text-slate-600 dark:text-slate-400 text-base md:text-lg leading-relaxed transition-colors">
                            I’m a full-stack developer who enjoys turning complex ideas into fast, reliable, and intuitive digital products.
                            My work spans both frontend and backend development, allowing me to build complete, end-to-end solutions that don’t just look good but also perform efficiently under the hood.
                            I build scalable, end-to-end web applications using modern frontend technologies like Next.js, React, TypeScript, and Tailwind CSS, alongside backend tools such as PHP and Laravel.
                            I focus on creating responsive, accessible interfaces and well-structured APIs, with an emphasis on clean, maintainable code, efficient data handling, and systems that are easy to scale and extend.
                        </p>

                        <a
                            href="/resume.pdf"
                            download="Obed_Effum_Resume.pdf"
                            className="self-start flex items-center gap-2 px-5 py-3 border border-slate-300 dark:border-slate-700 rounded-xl text-slate-800 dark:text-slate-200 font-medium text-sm hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors mt-2"
                        >
                            <Download size={16} strokeWidth={1.8} />
                            Download Resume
                        </a>
                    </div>

                    <div
                        ref={rightRef}
                        data-reveal="right"
                        data-inview={rightInView}
                        className="relative md:w-1/2 w-full rounded-3xl flex flex-col items-center justify-center gap-8 py-14 md:py-20 px-8 shadow-lg dark:shadow-slate-900/40 overflow-hidden brand-gradient"
                    >
                        <div className="absolute inset-0 bg-dot-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000,transparent)]" />

                        <span className="relative text-white text-6xl md:text-7xl select-none drop-shadow-sm">
                            <FaCode />
                        </span>

                        <div className="relative flex flex-wrap justify-center gap-2 max-w-xs">
                            {stack.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-sm text-white text-xs font-medium border border-white/20"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
