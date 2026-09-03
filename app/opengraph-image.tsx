import { ImageResponse } from "next/og"
import { siteConfig } from "@/lib/site"

export const alt = `${siteConfig.name} — ${siteConfig.role}`
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

const stack = ["Next.js", "React", "TypeScript", "Laravel", "PHP"]

export default function OpenGraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    padding: "80px",
                    backgroundColor: "#020617",
                    color: "#f8fafc",
                    position: "relative",
                }}
            >
                {/* Brand glow — radial gradient, since Satori has no blur filter */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        backgroundImage:
                            "radial-gradient(circle at 78% 8%, rgba(139, 92, 246, 0.45) 0%, rgba(99, 102, 241, 0.14) 38%, rgba(2, 6, 23, 0) 68%)",
                    }}
                />

                {/* Top accent bar */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 10,
                        backgroundImage:
                            "linear-gradient(90deg, #6366f1 0%, #8b5cf6 50%, #a855f7 100%)",
                    }}
                />

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        fontSize: 26,
                        fontWeight: 600,
                        letterSpacing: 2,
                        textTransform: "uppercase",
                        color: "#a5b4fc",
                    }}
                >
                    {siteConfig.role}
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: 104,
                        fontWeight: 800,
                        marginTop: 18,
                        lineHeight: 1.05,
                    }}
                >
                    {siteConfig.name}
                </div>

                <div
                    style={{
                        display: "flex",
                        fontSize: 34,
                        color: "#94a3b8",
                        marginTop: 26,
                        maxWidth: 900,
                        lineHeight: 1.4,
                    }}
                >
                    {siteConfig.tagline}
                </div>

                <div style={{ display: "flex", marginTop: 52 }}>
                    {stack.map((tech) => (
                        <div
                            key={tech}
                            style={{
                                display: "flex",
                                fontSize: 24,
                                fontWeight: 500,
                                color: "#cbd5e1",
                                border: "1px solid #334155",
                                borderRadius: 9999,
                                padding: "10px 24px",
                                marginRight: 14,
                            }}
                        >
                            {tech}
                        </div>
                    ))}
                </div>
            </div>
        ),
        size
    )
}
