/**
 * Single source of truth for site-wide SEO values.
 *
 * `NEXT_PUBLIC_SITE_URL` should be set to the production origin (no trailing
 * slash) in the deployment environment. The fallback matches the default
 * Vercel subdomain for this repo so canonical URLs stay correct if it isn't set.
 */
const rawUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://obed-effum.vercel.app"

export const siteConfig = {
    url: rawUrl.replace(/\/$/, ""),
    name: "Obed Effum",
    role: "Full Stack Developer",
    /** Used for <title> on the home page and as the og:title. */
    title: "Obed Effum — Full Stack Developer",
    /** ~155 chars: what Google renders under the title. */
    description:
        "Full stack developer building scalable web applications with Next.js, React, TypeScript, Laravel and PHP — from payment systems and dashboards to KYC and business process automation.",
    /** Shorter, punchier line for social cards. */
    tagline: "Building scalable web apps with Next.js, React, TypeScript and Laravel.",
    locale: "en_US",
    email: "obedeffum10@gmail.com",
    social: {
        github: "https://github.com/EObed",
        linkedin: "https://www.linkedin.com/in/obed-effum-b74244194",
    },
    /** Technologies to surface in Person.knowsAbout structured data. */
    knowsAbout: [
        "Full Stack Development",
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Laravel",
        "PHP",
        "MySQL",
        "REST API Design",
        "Payment Systems",
        "Business Process Automation",
    ],
} as const

export const absoluteUrl = (path = "") =>
    `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`
