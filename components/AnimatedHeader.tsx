"use client";
import { useEffect, useRef } from "react";
import { animate, stagger, splitText } from "animejs";

export default function AnimatedHeader() {
    const headerRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (headerRef.current) {
            const { chars } = splitText(headerRef.current, { words: false, chars: true });

            animate(chars, {
                y: [
                    { to: "-5rem", ease: "outExpo", duration: 600 },
                    { to: 0, ease: "outBounce", duration: 800, delay: 100 }
                ],
                rotate: {
                    from: "-1turn",
                    delay: 0
                },
                delay: stagger(60),
                ease: "inOutCirc",
                loopDelay: 1500,
                loop: true
            });
        }
    }, []);

    return (
        <h1
            ref={headerRef}
            className="animated-text text-4xl md:text-7xl font-black text-gray-900 dark:text-white leading-tight tracking-tight"
        >
            Obed Effum
        </h1>
    );
}