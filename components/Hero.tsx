import logo from "@/public/images/logo.png";
import Image from "next/image";
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {FiMail} from "react-icons/fi";
import AnimatedHeader from "@/components/AnimatedHeader";

const Hero = () => {
    return (
        <section className="min-h-screen bg-gray-100 flex items-center justify-center px-6 py-16">
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
                    <h3>Full Stack Developer</h3>
                </div>


                <p className="text-lg md:text-xl text-gray-500 max-w-xl leading-relaxed">
                    Crafting beautiful, performant web experiences with modern technologies.
                    Passionate about clean code and elegant solutions.
                </p>

                <div className="flex gap-4 mt-2">
                    <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors">
                        View My Work
                    </button>
                    <button className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-200 transition-colors">
                        Get In Touch
                    </button>
                </div>

                <div className="flex gap-6 mt-2 text-gray-500">
                    <a href="#" className="hover:text-gray-900 transition-colors">
                        <FaGithub size={26} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="hover:text-gray-900 transition-colors">
                        <FaLinkedin size={26} strokeWidth={1.5} />
                    </a>
                    <a href="#" className="hover:text-gray-900 transition-colors">
                        <FiMail size={26} strokeWidth={1.5} />
                    </a>
                </div>

            </div>
        </section>
    )
}

export default Hero