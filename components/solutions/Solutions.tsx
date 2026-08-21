"use client";

import { useState } from "react"
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

const Solutions = () => {
    const { ref: titleRef, inView: titleInView } = useInView<HTMLDivElement>(0.2)
    const [activeIndex, setActiveIndex] = useState(0)

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

                <div
                    className="flex flex-row gap-3 md:gap-4 overflow-x-auto"
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
            </div>
        </section>
    )
}

export default Solutions
