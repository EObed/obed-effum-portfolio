"use client"

import { useRef } from "react"
import { Download } from "lucide-react"
import {FaCode} from "react-icons/fa6";

const About = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const leftRef = useRef<HTMLDivElement>(null)
    const rightRef = useRef<HTMLDivElement>(null)
    const titleRef = useRef<HTMLHeadingElement>(null)

    return (
        <>
            <section
                ref={sectionRef}
                id="about"
                className="w-full bg-white px-6 py-20 md:py-28"
            >
                <div className="max-w-5xl mx-auto flex flex-col gap-12">
                    <h2
                        ref={titleRef}
                        className="reveal text-4xl md:text-5xl font-bold text-gray-900 text-center"
                    >
                        About Me
                    </h2>

                    <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

                        <div ref={leftRef} className="reveal-left flex flex-col gap-5 md:w-1/2">
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                I&apos;m a passionate full-stack developer with over 3 years of experience
                                building web applications. I specialize in React, TypeScript, and Node.js,
                                and I love creating intuitive user interfaces and scalable backend systems.
                            </p>
                            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                                When I&apos;m not coding, you&apos;ll find me contributing to open-source projects,
                                writing technical blog posts, or exploring new technologies. I believe in
                                continuous learning and staying up-to-date with the latest industry trends.
                            </p>
                            <button className="self-start flex items-center gap-2 px-5 py-3 border border-gray-300 rounded-xl text-gray-800 font-medium text-sm hover:bg-gray-50 transition-colors mt-2">
                                <Download size={16} strokeWidth={1.8} />
                                Download Resume
                            </button>
                        </div>

                        <div
                            ref={rightRef}
                            className="reveal-right md:w-1/2 w-full rounded-2xl flex items-center justify-center py-16 md:py-24"
                            style={{
                                background: "linear-gradient(135deg, #5b73f5 0%, #8b5cf6 50%, #a855f7 100%)"
                            }}
                        >
                            <span
                                className="text-white font-mono font-bold select-none"
                                style={{ fontSize: "clamp(3rem, 8vw, 5.5rem)", letterSpacing: "-0.02em" }}
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