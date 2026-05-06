"use client"

import { useEffect, useRef } from "react"
import { ProjectCard } from "@/components/projects/ProjectCard"
import IProject from "@/types/IProject";

const projectsData: IProject[] = [
    {
        title: "TrendiPay API Portal",
        images: ["/images/projects/portal1.png", "/images/projects/portal2.png", "/images/projects/portal3.png", "/images/projects/portal4.png"],
        description:
            "A web app for users of the TrendiPay API to monitor their transactions and receive real-time analytics. The app also allows these users to revoke and regenerate API keys. The app also allows TrendiPay admins to view transactions and analytics on all their users. The app is also able" +
            " to detect suspected fraudulent transactions and display them to admins in an intuitive way to aid admins to take the necessary actions",
        techStack: ["Next.js", "Socket.io", "Tailwind", "Tanstack Query"]

    },
    {
        title: "Dispursa",
        images: ["/images/projects/dispursa1.png", "/images/projects/dispursa2.png", "/images/projects/dispursa3.png", "/images/projects/dispursa4.png"],
        description:
            "A web app for making bulk disbursements powered by the TrendiPay API. Users can choose to either enter account details of multiple " +
            "recipients or upload a CSV file containing the account details of the recipients and disburse fund to these recipients. Users can also choose to schedule payments," +
            "a feature ideal for businesses who would want a simple and seamless solution to handle salary payment to staff among other use cases.",
        techStack: ["Next.js", "Axios", "Socket.io", "Tailwind", "Zustand"],
        link: "https://dispursa.com"
    },
    {
        title: "TrendiCheckout",
        images: ["/images/projects/checkout1.png", "/images/projects/checkout2.png", "/images/projects/checkout3.png", "/images/projects/checkout4.png"],
        description:
            "A checkout system for businesses and individuals who want to receive payments via mobile money, bank or cards. Users are given terminals that can be accessed via links or custom QR codes that they can share with customers to facilitate payments." +
            " Ideal for e-commerce platforms, restaurants, clubs and any other businesses that receive payments",
        techStack: ["Next.js", "Fetch API", "Socket.io", "Tailwind", "Tanstack Query"],
        link: "https://checkout.trendipay.com",
    },
    {
        title: "Merchant Profiling System",
        images: ["/images/projects/mps1.png", "/images/projects/mps2.png", "/images/projects/mps3.png", "/images/projects/mps4.png"],
        description:
            "A web app for handling onboarding and KYC processes for individuals and businesses that want to use the TrendiPay API. This app allows various departments of" +
            " TrendiPay Admins (such as finance, support and legal) to review KYC documentation submitted by partners, configure fees to charge each partner per transaction performed, manage the various payment methods available on the TrendiPay API and other administrative tasks.",
        techStack: ["Next.js", "Fetch API", "Tanstack Query", "Tailwind"],
    },
    {
        title: "Cardii",
        images: ["/images/projects/cardii4.png", "/images/projects/cardii1.png", "/images/projects/cardii2.png", "/images/projects/cardii3.png"],
        description:
            "A solution for a car rental company to gather information from prospective clients. Users can sign up for various services provided by Cardii such as rentals, defensive driving lessons, etc. There is also an admin portal where admins can log in to view information collected from users, create SMS campaigns, etc,",
        techStack: ["Next.js", "Fetch API", "Tanstack Query", "Tailwind"],
        link: "https://www.cardii.net"
    },
]

const Projects = () => {
    const titleRef = useRef<HTMLDivElement>(null)
    const cardsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in-view")
                        entry.target.querySelectorAll(".reveal-card").forEach((card) => {
                            card.classList.add("in-view")
                        })
                    }
                })
            },
            { threshold: 0.1 }
        )

        if (titleRef.current) observer.observe(titleRef.current)
        if (cardsRef.current) observer.observe(cardsRef.current)

        return () => observer.disconnect()
    }, [])

    return (
        <>
            <style>{`
                .reveal-title {
                    opacity: 0;
                    transform: translateY(30px);
                    transition: opacity 0.6s ease, transform 0.6s ease;
                }
                .reveal-title.in-view {
                    opacity: 1;
                    transform: translateY(0);
                }
                .reveal-card {
                    opacity: 0;
                    transform: scale(0.93) translateY(36px);
                    filter: blur(4px);
                    transition:
                        opacity 0.65s ease,
                        transform 0.65s ease,
                        filter 0.65s ease,
                        box-shadow 0.3s ease;
                }
                .reveal-card.in-view {
                    opacity: 1;
                    transform: scale(1) translateY(0);
                    filter: blur(0);
                }
            `}</style>

            <section id="projects" className="w-full bg-gray-50 px-6 py-20 md:py-28">
                <div className="max-w-6xl mx-auto flex flex-col gap-12">

                    <div ref={titleRef} className="reveal-title text-center flex flex-col gap-3">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                            Featured Projects
                        </h2>
                        <p className="text-gray-500 text-base md:text-lg">
                            Here are some of my recent works that showcase my skills and expertise
                        </p>
                    </div>

                    <div
                        ref={cardsRef}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    >
                        {projectsData.map((project, i) => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                                delay={i * 120}
                            />
                        ))}
                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects