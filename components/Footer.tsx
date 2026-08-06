import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="relative w-full bg-slate-950 px-6 py-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px brand-gradient" />

            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between md:items-center">

                    <div className="text-center md:text-left">
                        <span className="text-lg font-bold text-gradient">Obed Effum</span>
                        <p className="text-slate-400 text-sm mt-1">Full Stack Developer</p>
                    </div>

                    <div className="flex gap-6 text-slate-400">
                        <a
                            href="https://github.com/EObed"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaGithub size={22} />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/obed-effum-b74244194"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-white transition-colors"
                        >
                            <FaLinkedin size={22} />
                        </a>

                        <a
                            href="mailto:obedeffum10@gmail.com"
                            className="hover:text-white transition-colors"
                        >
                            <FaEnvelope size={22} />
                        </a>
                    </div>
                </div>

                <p className="text-center md:text-left text-slate-500 text-xs mt-8">
                    © {new Date().getFullYear()} Obed Effum. All rights reserved.
                </p>
            </div>
        </footer>
    )
}

export default Footer
