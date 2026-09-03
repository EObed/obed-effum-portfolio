import { absoluteUrl, siteConfig } from "@/lib/site"

/**
 * Schema.org JSON-LD describing the site and its owner.
 *
 * Rendered as a plain <script> tag (not next/script) because this is data, not
 * executable code. `<` is escaped to its unicode form to avoid breaking out of
 * the script element.
 */
const StructuredData = () => {
    const personId = absoluteUrl("/#person")
    const siteId = absoluteUrl("/#website")

    const graph = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": personId,
                name: siteConfig.name,
                url: siteConfig.url,
                image: absoluteUrl("/images/logo.png"),
                email: `mailto:${siteConfig.email}`,
                jobTitle: siteConfig.role,
                description: siteConfig.description,
                knowsAbout: [...siteConfig.knowsAbout],
                sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
            },
            {
                "@type": "WebSite",
                "@id": siteId,
                url: siteConfig.url,
                name: `${siteConfig.name} — ${siteConfig.role}`,
                description: siteConfig.description,
                inLanguage: "en",
                publisher: { "@id": personId },
            },
            {
                "@type": "ProfilePage",
                "@id": absoluteUrl("/#webpage"),
                url: siteConfig.url,
                name: siteConfig.title,
                description: siteConfig.description,
                isPartOf: { "@id": siteId },
                about: { "@id": personId },
                mainEntity: { "@id": personId },
            },
        ],
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(graph).replace(/</g, "\\u003c"),
            }}
        />
    )
}

export default StructuredData
