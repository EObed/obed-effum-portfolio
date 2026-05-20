"use client"

import { useState } from "react"
import Image from "next/image"
import { ExternalLink, X, ChevronLeft, ChevronRight } from "lucide-react"
import IProject from "@/types/IProject";

interface ProjectCardProps {
    project: IProject
    delay?: number
}

export const ProjectCard = ({ project, delay = 0 }: ProjectCardProps) => {
    const [modalOpen, setModalOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)

    const prevImage = () => setCurrentImage((i) => (i === 0 ? project.images.length - 1 : i - 1))
    const nextImage = () => setCurrentImage((i) => (i === project.images.length - 1 ? 0 : i + 1))

    return (
        <>
            <div
                className="reveal-card group flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-slate-800 transition-shadow duration-300 hover:shadow-xl cursor-pointer"                style={{ transitionDelay: `${delay}ms` }}
                onClick={() => setModalOpen(true)}
            >
                <div className="relative w-full h-52 overflow-hidden">
                    <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, 33vw"
                    />
                </div>

                <div className="flex flex-col gap-4 p-5">
                    <div>
                        <h3 className="font-bold text-gray-900 dark:text-slate-100 text-lg">
                            {project.title}
                        </h3>

                        <p className="text-gray-500 dark:text-slate-400 text-sm mt-1 leading-relaxed line-clamp-3">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, index) => (
                            <span key={index}
                                  className=" px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 text-sm font-medium rounded-full">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <button
                        onClick={(e) => { e.stopPropagation(); setModalOpen(true) }}
                        className="mt-auto flex items-center justify-center gap-2 w-full py-3 border border-gray-200 dark:border-slate-700 rounded-xl text-gray-800 dark:text-slate-200 text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors"                    >
                        View Project <ExternalLink size={14} strokeWidth={1.8} />
                    </button>
                </div>
            </div>

            {modalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 dark:bg-black/70 backdrop-blur-sm p-4"
                    onClick={() => setModalOpen(false)}
                >
                    <div
                        className="relative bg-white dark:bg-slate-900 rounded-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            onClick={() => setModalOpen(false)}
                            className="absolute top-4 right-4 z-10 p-1.5 bg-white dark:bg-slate-800 rounded-full shadow hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                        >
                            <X size={18} />
                        </button>

                        <div className="relative w-full h-64 md:h-80 bg-gray-100 rounded-t-2xl overflow-hidden">
                            <Image
                                src={project.images[currentImage]}
                                alt={`${project.title} ${currentImage + 1}`}
                                fill
                                className="object-cover transition-opacity duration-300"
                                sizes="(max-width: 768px) 100vw, 672px"
                            />
                            {project.images.length > 1 && (
                                <>
                                    <button
                                        onClick={prevImage}
                                        className="absolute left-3 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 rounded-full shadow hover:bg-white transition-colors"
                                    >
                                        <ChevronLeft size={18} />
                                    </button>
                                    <button
                                        onClick={nextImage}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 p-1.5 bg-white/80 rounded-full shadow hover:bg-white transition-colors"
                                    >
                                        <ChevronRight size={18} />
                                    </button>
                                    <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                                        {project.images.map((_, i) => (
                                            <button
                                                key={i}
                                                onClick={() => setCurrentImage(i)}
                                                className={`w-2 h-2 rounded-full transition-colors ${i === currentImage ? "bg-white" : "bg-white/50"}`}
                                            />
                                        ))}
                                    </div>
                                </>
                            )}
                        </div>

                        <div className="flex flex-col gap-5 p-6">
                            <h2 className="text-2xl font-black text-gray-900 dark:text-slate-100">
                                {project.title}
                            </h2>

                            <p className="text-gray-600 dark:text-slate-400 leading-relaxed">
                                {project.description}
                            </p>

                            <div>
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-slate-300 mb-2">
                                    Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, index) => (
                                        <span
                                            key={index}
                                            className=" px-3 py-1 bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-200 text-sm font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {project.link && (
                                <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-2 w-full py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-semibold rounded-xl transition-colors"                                >
                                View Live Project <ExternalLink size={15} strokeWidth={1.8} />
                                </a>
                                )}
                        </div>
                    </div>
                </div>
            )}
        </>
)
}