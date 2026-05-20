import logo from "@/public/images/logo.png";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimatedHeader from "@/components/AnimatedHeader";

const Hero = () => {
    return (
        <section className="min-h-screen bg-gray-100 dark:bg-slate-950 flex items-center justify-center px-6 py-16 transition-colors">
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-6">

                <div className="relative w-24 h-24 md:w-32 md:h-32">
                    <Image
                        src={logo}
                        alt="Logo"
                        fill
                        className="object-contain rounded-full"
                        sizes="(max-width: 768px) 96px, 128px"
                    />
                </div>

                <div>
                    <AnimatedHeader />

                    <h3 className="text-slate-700 dark:text-slate-300 transition-colors">
                        Full Stack Developer
                    </h3>
                </div>

                <p className="text-lg md:text-xl text-gray-500 dark:text-slate-400 max-w-xl leading-relaxed transition-colors">
                    Building scalable, high-performance web applications with modern frontend and backend technologies.
                    Focused on clean architecture, maintainable code, and seamless user experiences from interface to API.
                </p>

                <div className="flex gap-4 mt-2">
                    <a
                        href={"#projects"}
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
                    >
                        View My Work
                    </a>

                    <a
                        href={"#contact"}
                        className="px-6 py-3 bg-white dark:bg-slate-900 hover:bg-gray-50 dark:hover:bg-slate-800 text-gray-900 dark:text-slate-100 font-semibold rounded-xl border border-gray-200 dark:border-slate-700 transition-colors"
                    >
                        Get In Touch
                    </a>
                </div>

                <div className="flex gap-6 mt-2 text-gray-500 dark:text-slate-400 transition-colors">
                    <a
                        href="https://github.com/EObed"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <FaGithub size={26} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/obed-effum-b74244194"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <FaLinkedin size={26} />
                    </a>

                    <a
                        href="mailto:obedeffum10@gmail.com"
                        className="hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                        <FaEnvelope size={26} />
                    </a>
                </div>

            </div>
        </section>
    );
};

export default Hero;