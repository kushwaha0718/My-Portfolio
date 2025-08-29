import { FaJava, FaReact, FaArrowDown } from "react-icons/fa";
import { SiSpringboot, SiMysql, SiTailwindcss } from "react-icons/si";


export const HeroSection = () => {

    const scrollToAbout = () => {
        const section = document.getElementById("about");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-4"
        >
            <div
                className="container max-w-4xl mx-auto text-center z-10"
            >
                <div
                    className="space-y-6"
                >
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in-delay-1">Hello, I'm</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-2">Ayush</span>
                        <span className="text-gradient ml-2  opacity-0 animate-fade-in-delay-3">Kushwaha</span>
                    </h1>
                    <span className="animate-fade-in-delay-4 text-primary text-3xl md:text-5xl font-bold tracking-tight opacity-0 ">&lt;Full - Stack Developer/&gt;</span>
                    <div className="text-lg md:text-xl font-medium flex flex-col items-center gap-3 leading-relaxed py-[20px] animate-fade-in-delay-4 opacity-0">
                        I loves building modern, efficient, and user-friendly web applications. My core skills are,
                        <div className="flex gap-3 flex-wrap">
                            <span className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm font-medium">
                                <FaJava className="text-orange-600" /> Java
                            </span>

                            <span className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm font-medium">
                                <SiSpringboot className="text-green-600" /> Spring Boot
                            </span>

                            <span className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm font-medium">
                                <FaReact className="text-sky-400" /> React
                            </span>

                            <span className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm font-medium">
                                <SiTailwindcss className="text-cyan-500" /> Tailwind CSS
                            </span>

                            <span className="flex items-center gap-2 border border-gray-300 rounded-full px-3 py-1 text-sm font-medium">
                                <SiMysql className="text-blue-500" /> MySQL
                            </span>
                            <a href="#skills" className="text-gray-600 flex items-center gap-1.5">more <FaArrowDown className="text-foreground/80 " /> </a>
                        </div>

                        Always curious, always learning, and driven to turn ideas into impactful solutions.
                    </div>
                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a
                            href="#projects"
                            className="cosmic-button"
                        >My Works</a>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-fade-in-delay-4 opacity-0">
                <span onClick={scrollToAbout} className="animate-bounce flex items-center justify-center w-10 h-10 border border-gray-400 rounded-full cursor-pointer hover:bg-primary transition">
                    <FaArrowDown className="text-foreground/80 " />
                </span>
            </div>
        </section>
    )
}