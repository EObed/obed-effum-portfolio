import { AppWindow, CreditCard, FileCheck2, Headset, LayoutDashboard, Workflow, type LucideIcon } from "lucide-react"
import Buffer from "@/components/editor/Buffer"
import Heading from "@/components/editor/Heading"
import Reveal from "@/components/editor/Reveal"
import { sectionFiles } from "@/lib/editor"

const solutionsData: { icon: LucideIcon; color: string; title: string; description: string }[] = [
    {
        icon: AppWindow,
        color: "text-green",
        title: "Business Web Applications",
        description: "Custom apps built around how your team works.",
    },
    {
        icon: CreditCard,
        color: "text-blue",
        title: "Payment Solutions",
        description: "Collect, disburse and track payments in one place.",
    },
    {
        icon: Workflow,
        color: "text-purple",
        title: "Business Process Automation",
        description: "Trade spreadsheets for software that runs itself.",
    },
    {
        icon: FileCheck2,
        color: "text-yellow",
        title: "KYC & Document Management",
        description: "Faster onboarding, verification and approvals.",
    },
    {
        icon: LayoutDashboard,
        color: "text-aqua",
        title: "Dashboards & Reporting",
        description: "Real-time visibility into the numbers that matter.",
    },
    {
        icon: Headset,
        color: "text-pink",
        title: "IT Support & Consultancy",
        description: "Ongoing support and guidance to keep systems running.",
    },
]

const Solutions = () => {
    const { id, name, lang } = sectionFiles.solutions

    return (
        <Buffer id={id} file={name} lang={lang}>
            <Reveal>
                <Heading>solutions</Heading>
                <p className="mt-4 max-w-[68ch] leading-7 text-subtext1">
                    Ways I can help businesses build and run better software.
                </p>
            </Reveal>

            <Reveal delay={100}>
                {/* gap-px over a coloured background draws the 1px table rules */}
                <ol className="mt-10 grid gap-px border border-surface1 bg-surface1 sm:grid-cols-2 2xl:grid-cols-3">
                    {solutionsData.map(({ icon: Icon, color, title, description }, i) => (
                        <li key={title} className="group flex flex-col gap-3 bg-base p-5 transition-colors hover:bg-surface0 md:p-6">
                            <div className="flex items-center justify-between">
                                <span className="text-xs tabular-nums text-overlay2">{String(i + 1).padStart(2, "0")}</span>
                                <Icon size={18} strokeWidth={1.6} aria-hidden className={`${color} transition-transform group-hover:-translate-y-0.5`} />
                            </div>
                            <h3 className="font-bold text-fg">{title}</h3>
                            <p className="text-sm leading-6 text-subtext1">{description}</p>
                        </li>
                    ))}
                </ol>
            </Reveal>
        </Buffer>
    )
}

export default Solutions
