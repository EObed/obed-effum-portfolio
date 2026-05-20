"use client"

import { useEffect, useRef } from "react"
import { Download } from "lucide-react"
import { FaCode } from "react-icons/fa6"

const About = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view")
                    }
                })
            },
            { threshold: 0.15 }
        )

        const elements = [titleRef.current, leftRef.current, rightRef.current]
        elements.forEach((el) => el && observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
                .reveal {
                    opacity: 0;
                    transform: scale(0.92) translateY(40px);
                    filter: blur(6px);
                    transition: opacity 0.7s ease, transform 0.7s ease, filter 0.7s ease;
                }

                .reveal.in-view {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                    filter: blur(0px);
                }

                .reveal-left {
                    opacity: 0;
                    transform: scale(0.94) translateX(-40px);
                    filter: blur(4px);
                    transition: opacity 0.75s ease 0.15s, transform 0.75s ease 0.15s, filter 0.75s ease 0.15s;
                }

                .reveal-left.in-view {
                    opacity: 1;
                    transform: scale(1) translateX(0);
                    filter: blur(0px);
                }

                .reveal-right {
                    opacity: 0;
                    transform: scale(0.94) translateX(40px);
                    filter: blur(4px);
                    transition: opacity 0.75s ease 0.3s, transform 0.75s ease 0.3s, filter 0.75s ease 0.3s;
                }

                .reveal-right.in-view {
                    opacity: 1;
                    transform: scale(1) translateX(0);
                    filter: blur(0px);
                }
            `}</style>

            <section
                ref={sectionRef}
                id="about"
                className="w-full bg-white dark:bg-slate-950 px-6 py-20 md:py-28 transition-colors dark:border-y "
            >
                <div className="max-w-5xl mx-auto flex flex-col gap-12">

                    <h2
                        ref={titleRef}
                        className="reveal text-4xl md:text-5xl font-bold text-gray-900 dark:text-slate-100 text-center transition-colors"
                    >
                        About Me
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        <div
                            ref={leftRef}
                            className="reveal-left flex flex-col gap-5 md:w-1/2"
                        >
                            <p className="text-gray-600 dark:text-slate-400 text-base md:text-lg leading-relaxed transition-colors">
                                I’m a full-stack developer who enjoys turning complex ideas into fast, reliable, and intuitive digital products.
                                My work spans both frontend and backend development, allowing me to build complete, end-to-end solutions that don’t just look good but also perform efficiently under the hood.
                                I build scalable, end-to-end web applications using modern frontend technologies like Next.js, React, TypeScript, and Tailwind CSS, alongside backend tools such as PHP and Laravel.
                                I focus on creating responsive, accessible interfaces and well-structured APIs, with an emphasis on clean, maintainable code, efficient data handling, and systems that are easy to scale and extend.
                            </p>

                            <a
                                href="/resume.pdf"
                                download="Obed_Effum_Resume.pdf"
                                className="self-start flex items-center gap-2 px-5 py-3 border border-gray-300 dark:border-slate-700 rounded-xl text-gray-800 dark:text-slate-200 font-medium text-sm hover:bg-gray-50 dark:hover:bg-slate-900 transition-colors mt-2"
                            >
                                <Download size={16} strokeWidth={1.8} />
                                Download Resume
                            </a>
                        </div>

                        <div
                            ref={rightRef}
                            className="reveal-right md:w-1/2 w-full rounded-2xl flex items-center justify-center py-16 md:py-24 shadow-lg dark:shadow-slate-900/40"
                            style={{
                                background:
                                    "linear-gradient(135deg, #5b73f5 0%, #8b5cf6 50%, #a855f7 100%)",
                            }}
                        >
                            <span
                                className="text-white font-mono font-bold select-none"
                                style={{
                                    fontSize: "clamp(3rem, 8vw, 5.5rem)",
                                    letterSpacing: "-0.02em",
                                }}
                            >
                                <FaCode />
                            </span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About