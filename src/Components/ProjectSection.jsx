import { ArrowRight, ExternalLinkIcon} from "lucide-react"
import { FaGithub } from "react-icons/fa"

const projects = [
    {
        id: 1,
        title: "Ayush's Portfolio",
        description: "A modern and responsive personal portfolio website built using React and Tailwind CSS, designed to showcase my skills, projects, and experience in web development. It features a clean UI, smooth animations, and a user-friendly layout, allowing visitors to explore my work and get in touch easily.",
        image: "/projects/portfolio_home.png",
        Tags: ["React JS", "Tailwind CSS"],
        demo: "#",
        repo_link: "#"
    },
    {
        id: 2,
        title: "Interactive TM",
        description: "Pariksha is a quiz and assessment application built with Spring Boot (backend) and React (frontend). It allows users to take subject-wise quizzes, track their performance, and get instant results with detailed feedback. The app is designed with a clean UI, secure authentication, and scalable backend APIs, making it a reliable platform for practice tests and exam preparation.",
        image: "/projects/pariksha.png",
        Tags: ["React JS", "Tailwind CSS", "Spring Boot", "MySql", "Docker", "REST Api"],
        demo: "#",
        repo_link: "https://github.com/kushwaha0718/Pariksha-ForTutions"
    },
    {
        id: 3,
        title: "Go Safe",
        description: "Go Safe is a safety-focused mobile/web application designed to help users travel securely and stay connected with trusted contacts. The app provides real-time location sharing, emergency alerts, and quick access to nearby help centers. Built with a clean and intuitive interface, Go Safe ensures users can navigate confidently while keeping their loved ones informed.",
        image: "/projects/go_safe.png",
        Tags: ["React JS", "Tailwind CSS", "Spring Boot", "MySql", "Docker", "REST Api"],
        demo: "#",
        repo_link: "https://github.com/kushwaha0718/Go-Safe"
    }
]


export const ProjectSection = () => {
    return (
        <section
            id="projects"
            className="py-24 px-4 relative"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center w-full border-t border-b border-gray-300 p-4 md:border-0">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="md:text-[1.3rem] text-[1.1rem] text-center text-muted-foreground mb-12 max-w-full mx-auto">
                    Here are some of my recent projects. Each project reflects my approach to learning through real-world applications, as I believe <i><span className="font-semibold text-primary">" practical experience is the best way to master a skill "</span></i>.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden 
                        shadow-[0_4px_10px_rgba(168,85,247,0.3)] hover:shadow-[0_6px_15px_rgba(168,85,247,0.5)] transition-shadow duration-300 card-hover">
                            <div className="h-48 overflow-hidden ">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.Tags.map((Tag) => (
                                        <span className="border border-primary/70 rounded-full px-2 py-1 text-xs font-medium text-secondary-foreground bg-primary/20">{Tag}</span>
                                    ))}
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2 text-left p-6">
                                {project.title}
                            </h3>
                            <p className="text-left text-sm p-6 mb-4 text-[1.05rem]">
                                {project.description}
                            </p>
                            <div className="flex justify-between items-center p-6">
                                    <div className="flex space-x-3 ">
                                        <a 
                                            target="_blank"
                                            href={project.demo} 
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                                        >
                                            Link<ExternalLinkIcon/>
                                        </a>
                                        <a 
                                            target="_blank"
                                            href={project.repo_link}
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300 flex items-center gap-1"
                                        >
                                            Code<FaGithub/>
                                        </a>
                                    </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="text-center mt-12 flex items-center justify-center">
                    <a 
                        target="_blank"
                        href="https://github.com/kushwaha0718"
                        className=" flex gap-1 items-center border border-primary/70 rounded-full px-10 py-2 font-medium text-secondary-foreground bg-primary/20 hover:bg-primary/30"
                    >GitHub <ArrowRight size={16}/></a>
            </div>
        </section>
    )
}
