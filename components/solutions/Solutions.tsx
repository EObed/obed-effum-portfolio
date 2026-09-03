"use client";

import { useCallback, useEffect, useRef, useState } from "react"
import { SolutionCard } from "@/components/solutions/SolutionCard";
import { AppWindow, CreditCard, Workflow, FileCheck2, LayoutDashboard, Headset } from "lucide-react"
import { useInView } from "@/hooks/useInView"

const solutionsData: {
    number: string
    icon: typeof AppWindow
    title: string
    description: string
    image: string
}[] = [
    {
        number: "01",
        icon: AppWindow,
        title: "Business Web Applications",
        description: "Custom apps built around how your team works.",
        image: "/images/business-app.png",
    },
    {
        number: "02",
        icon: CreditCard,
        title: "Payment Solutions",
        description: "Collect, disburse and track payments in one place.",
        image: "/images/payment-solutions.png",
    },
    {
        number: "03",
        icon: Workflow,
        title: "Business Process Automation",
        description: "Trade spreadsheets for software that runs itself.",
        image: "/images/automation.png",
    },
    {
        number: "04",
        icon: FileCheck2,
        title: "KYC & Document Management",
        description: "Faster onboarding, verification and approvals.",
        image: "/images/kyc.png",
    },
    {
        number: "05",
        icon: LayoutDashboard,
        title: "Dashboards & Reporting",
        description: "Real-time visibility into the numbers that matter.",
        image: "/images/dashboard.png",
    },
    {
        number: "06",
        icon: Headset,
        title: "IT Support & Consultancy",
        description: "Ongoing support and guidance to keep systems running.",
        image: "/images/it-support.png",
    },
]

const AUTOPLAY_MS = 3800

const Solutions = () => {
    const { ref: titleRef, inView: titleInView } = useInView<HTMLDivElement>(0.2)

    // Desktop: hover to expand a card
    const [activeIndex, setActiveIndex] = useState(0)

    // Mobile: auto-advancing carousel
    const [slide, setSlide] = useState(0)
    const trackRef = useRef<HTMLDivElement>(null)
    const pausedRef = useRef(false)
    const { ref: carouselRef, inView: carouselInView } = useInView<HTMLDivElement>(0.2)

    const scrollToIndex = useCallback((index: number) => {
        const track = trackRef.current
        if (!track) return
        const count = solutionsData.length
        const next = ((index % count) + count) % count
        const child = track.children[next] as HTMLElement | undefined
        if (child) {
            const left = child.offsetLeft - (track.clientWidth - child.clientWidth) / 2
            track.scrollTo({ left, behavior: "smooth" })
        }
        setSlide(next)
    }, [])

    useEffect(() => {
        if (!carouselInView) return
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

        const id = window.setInterval(() => {
            if (pausedRef.current || document.hidden) return
            setSlide((current) => {
                const next = (current + 1) % solutionsData.length
                const track = trackRef.current
                const child = track?.children[next] as HTMLElement | undefined
                if (track && child) {
                    const left = child.offsetLeft - (track.clientWidth - child.clientWidth) / 2
                    track.scrollTo({ left, behavior: "smooth" })
                }
                return next
            })
        }, AUTOPLAY_MS)

        return () => window.clearInterval(id)
    }, [carouselInView])

    const handleScroll = () => {
        const track = trackRef.current
        if (!track) return
        const center = track.scrollLeft + track.clientWidth / 2
        let closest = 0
        let min = Infinity
        Array.from(track.children).forEach((child, i) => {
            const el = child as HTMLElement
            const elCenter = el.offsetLeft + el.clientWidth / 2
            const distance = Math.abs(elCenter - center)
            if (distance < min) {
                min = distance
                closest = i
            }
        })
        setSlide(closest)
    }

    const pause = () => {
        pausedRef.current = true
    }
    const resume = () => {
        pausedRef.current = false
    }

    return (
        <section
            id="solutions"
            className="w-full bg-slate-50 dark:bg-slate-950 px-6 py-20 md:py-28 transition-colors"
        >
            <div className="max-w-6xl mx-auto flex flex-col gap-12">
                <div
                    ref={titleRef}
                    data-reveal
                    data-inview={titleInView}
                    className="text-center flex flex-col gap-3"
                >
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 transition-colors">
                        Solutions
                    </h2>

                    <p className="text-slate-500 dark:text-slate-400 text-base md:text-lg transition-colors">
                        Ways I can help businesses build and run better software
                    </p>
                </div>

                {/* Desktop: expanding cards */}
                <div
                    className="hidden md:flex flex-row gap-4 overflow-x-auto"
                    onMouseLeave={() => setActiveIndex(0)}
                >
                    {solutionsData.map((item, i) => (
                        <SolutionCard
                            key={item.title}
                            number={item.number}
                            icon={item.icon}
                            title={item.title}
                            description={item.description}
                            image={item.image}
                            isOpen={activeIndex === i}
                            onActivate={() => setActiveIndex(i)}
                            delay={i * 80}
                        />
                    ))}
                </div>

                {/* Mobile: auto-advancing carousel */}
                <div ref={carouselRef} className="md:hidden flex flex-col gap-5">
                    <div
                        ref={trackRef}
                        onScroll={handleScroll}
                        onPointerDown={pause}
                        onPointerUp={resume}
                        onPointerCancel={resume}
                        onTouchStart={pause}
                        onTouchEnd={resume}
                        className="relative flex gap-4 overflow-x-auto snap-x snap-mandatory no-scrollbar -mx-6 px-6"
                    >
                        {solutionsData.map((item) => (
                            <div
                                key={item.title}
                                className="snap-center shrink-0 w-[80vw] max-w-[300px]"
                            >
                                <SolutionCard
                                    number={item.number}
                                    icon={item.icon}
                                    title={item.title}
                                    description={item.description}
                                    image={item.image}
                                    isOpen
                                    onActivate={() => {}}
                                />
                            </div>
                        ))}
                    </div>

                    {/* Progress dots */}
                    <div className="flex justify-center gap-2">
                        {solutionsData.map((item, i) => (
                            <button
                                key={item.title}
                                type="button"
                                aria-label={`Show ${item.title}`}
                                aria-current={slide === i}
                                onClick={() => scrollToIndex(i)}
                                className={`h-1.5 rounded-full transition-all duration-300 ${
                                    slide === i
                                        ? "w-6 bg-indigo-500 dark:bg-indigo-400"
                                        : "w-1.5 bg-slate-300 dark:bg-slate-700"
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Solutions
