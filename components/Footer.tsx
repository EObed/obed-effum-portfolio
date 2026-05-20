import {FaEnvelope, FaGithub, FaLinkedin} from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-full bg-[#0f172a] px-6 py-10">
            <div className="max-w-6xl mx-auto">

                <div className="flex flex-col items-center gap-3 md:flex-row md:justify-between md:items-start">

                    <div className="text-center md:text-left">
                        <h3 className="text-white font-bold text-lg">Obed Effum</h3>
                        <p className="text-slate-400 text-sm mt-1">Full Stack Developer</p>
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
            </div>
        </footer>
    )
}

export default Footer