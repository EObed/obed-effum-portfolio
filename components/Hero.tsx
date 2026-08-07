import logo from "@/public/images/logo.png";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimatedHeader from "@/components/AnimatedHeader";

const Hero = () => {
    return (
        <section className="relative min-h-screen overflow-hidden bg-slate-50 dark:bg-slate-950 flex items-center justify-center px-6 py-24 transition-colors">
            <div className="absolute inset-0 bg-dot-grid [mask-image:radial-gradient(ellipse_60%_60%_at_50%_35%,#000_10%,transparent_75%)]" />
            <div
                className="absolute top-[-10rem] left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full opacity-20 dark:opacity-25 blur-3xl"
                style={{ background: "var(--accent-gradient)" }}
            />

            <div className="relative flex flex-col items-center text-center max-w-3xl mx-auto gap-6">

                <div className="relative w-24 h-24 md:w-28 md:h-28 rounded-full p-1 brand-gradient shadow-lg shadow-indigo-500/20">
                    <div className="relative w-full h-full rounded-full overflow-hidden bg-white dark:bg-slate-950">
                        <Image
                            src={logo}
                            alt="Logo"
                            fill
                            className="object-contain rounded-full"
                            sizes="(max-width: 768px) 96px, 112px"
                        />
                    </div>
                </div>

                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 text-sm font-medium text-slate-600 dark:text-slate-300">
                    <span className="w-2 h-2 rounded-full brand-gradient" />
                    Full Stack Developer
                </div>

                <AnimatedHeader />

                <p className="text-lg md:text-xl text-slate-500 dark:text-slate-400 max-w-xl leading-relaxed transition-colors">
                    Building scalable, high-performance web applications with modern frontend and backend technologies.
                    Focused on clean architecture, maintainable code, and seamless user experiences from interface to API.
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-2">
                    <a
                        href={"#projects"}
                        className="px-6 py-3 brand-gradient hover:opacity-90 text-white font-semibold rounded-xl  transition-opacity"
                    >
                        View My Work
                    </a>

                    <a
                        href={"#contact"}
                        className="px-6 py-3 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-900 dark:text-slate-100 font-semibold rounded-xl border border-slate-200 dark:border-slate-700 transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>

                <div className="flex gap-6 mt-2 text-slate-500 dark:text-slate-400 transition-colors">
                    <a
                        href="https://github.com/EObed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <FaGithub size={26} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/obed-effum-b74244194"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <FaLinkedin size={26} />
                    </a>

                    <a
                        href="mailto:obedeffum10@gmail.com"
                        className="hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                        <FaEnvelope size={26} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;
