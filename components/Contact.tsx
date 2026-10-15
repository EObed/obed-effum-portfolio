"use client";

import { useState } from "react";
import { toast } from "sonner";
import Buffer from "@/components/editor/Buffer";
import Heading from "@/components/editor/Heading";
import Reveal from "@/components/editor/Reveal";
import { sectionFiles } from "@/lib/editor";
import { siteConfig } from "@/lib/site";

export default function Contact() {
    const { id, name, lang } = sectionFiles.contact;
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const isValidEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const showSuccess = (message: string) => {
        toast.success("Message sent", { description: message, closeButton: true });
    };

    const showError = (message: string) => {
        toast.error("Couldn’t send that", { description: message, closeButton: true });
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (isSubmitting) return;

        if (!form.name.trim()) {
            return showError("Please tell me your name 🙂");
        }

        if (!form.email.trim()) {
            return showError("I’ll need your email to get back to you");
        }

        if (!isValidEmail(form.email)) {
            return showError("That email doesn’t look right. Mind checking it?");
        }

        if (!form.message.trim()) {
            return showError("Don’t forget to add a message about your project");
        }

        setIsSubmitting(true);

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                showSuccess("Thanks for reaching out — I’ll get back to you shortly.");
                setForm({ name: "", email: "", message: "" });
            } else {
                showError("I couldn’t send your message. Please try again in a moment.");
            }
        } catch (error) {
            console.error("Error:", error);
            showError("Looks like something broke on my end. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <Buffer id={id} file={name} lang={lang}>
            <Reveal>
                <Heading>contact</Heading>
                <p className="mt-4 max-w-[68ch] leading-7 text-subtext1">
                    Have a project in mind? Let&apos;s work together to bring your ideas to life.
                </p>
                <p className="mt-2 text-sm text-subtext0">
                    <span className="text-green">$</span> or email me directly at{" "}
                    <a
                        href={`mailto:${siteConfig.email}`}
                        className="text-blue underline decoration-surface2 underline-offset-4 hover:decoration-blue"
                    >
                        {siteConfig.email}
                    </a>
                </p>
            </Reveal>

            <Reveal delay={100}>
                <form onSubmit={handleSubmit} className="mt-10 flex max-w-2xl flex-col gap-6">
                    <label className="block">
                        <span className="mb-2 flex items-center gap-2 text-sm text-subtext0">
                            <span aria-hidden="true" className="text-green">❯</span> name
                        </span>
                        <input
                            type="text"
                            name="name"
                            autoComplete="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            className="field"
                            required
                        />
                    </label>

                    <label className="block">
                        <span className="mb-2 flex items-center gap-2 text-sm text-subtext0">
                            <span aria-hidden="true" className="text-green">❯</span> email
                        </span>
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            placeholder="your.email@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className="field"
                            required
                        />
                        {form.email.length >= 2 && !isValidEmail(form.email) && (
                            <span className="mt-1.5 block text-xs text-red">
                                <span aria-hidden="true">E: </span>Please enter a valid email — I’ll contact you via this email
                            </span>
                        )}
                    </label>

                    <label className="block">
                        <span className="mb-2 flex items-center gap-2 text-sm text-subtext0">
                            <span aria-hidden="true" className="text-green">❯</span> message
                        </span>
                        <textarea
                            name="message"
                            placeholder="Tell me about your project..."
                            value={form.message}
                            onChange={handleChange}
                            rows={5}
                            className="field resize-y"
                            required
                        />
                    </label>

                    <button type="submit" disabled={isSubmitting} className="btn self-start">
                        {isSubmitting ? "sending…" : <><span aria-hidden="true">⏎</span> send message</>}
                    </button>
                </form>
            </Reveal>
        </Buffer>
    );
}
