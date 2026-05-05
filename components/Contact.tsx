"use client";

import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
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
        toast("Message sent 🎉", {
            description: <span style={{ color: "#067C3C" }}>{message}</span>,
            style: {
                borderColor: "#067C3C1A",
                color: "#067C3C",
            },
            duration: 5000,
            closeButton: true
        });
    };

    const showError = (message: string) => {
        toast("Error 🙁", {
            description: <span style={{ color: "#e53e3e" }}>{message}</span>,
            style: {
                borderColor: "#FF3B301A",
                color: "#FF3B30",
            },
            duration: 5000,
            closeButton: true
        });
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
        <section id="contact" className="py-16 px-4 bg-[#f5f7fb]">
            <div className="max-w-3xl mx-auto text-center mb-10">
                <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                <p className="text-gray-600 text-lg">
                    Have a project in mind? Let&apos;s work together to bring your ideas to life
                </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 sm:p-8 border">
                <h3 className="text-xl font-semibold mb-2">Send Me a Message</h3>
                <p className="text-gray-500 mb-6">
                    Fill out the form below and I&apos;ll get back to you as soon as possible
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                        <label className="block mb-2 font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Your name"
                            value={form.name}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="your.email@example.com"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />

                        {form.email.length >= 2 && !isValidEmail(form.email) && (
                            <p className="text-sm text-red-500 mt-1">
                                Please enter a valid email — I’ll contact you via this email
                            </p>
                        )}
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">Message</label>
                        <textarea
                            name="message"
                            placeholder="Tell me about your project..."
                            value={form.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full rounded-lg bg-gray-100 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-blue-600 text-white py-3 rounded-lg font-medium transition ${
                            isSubmitting
                                ? "opacity-70 cursor-not-allowed"
                                : "hover:bg-blue-700"
                        }`}
                    >
                        {isSubmitting ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
}