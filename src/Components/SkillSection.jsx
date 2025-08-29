import { useState } from "react";
import { cn } from "./lib/util";

const skills = [
    // Frontend
    { name: "React", level: 70, category: "frontend", icon: "/icons/react.png" },
    { name: "Tailwind CSS", level: 83, category: "frontend", icon: "/icons/tailwind.png" },

    // Backend
    { name: "Spring Boot", level: 90, category: "backend", icon: "/icons/springboot.png" },
    { name: "MySQL", level: 85, category: "backend", icon: "/icons/mysql.png" },
    { name: "Docker", level: 70, category: "tools", icon: "/icons/docker.png" },
    { name: "Eclipse", level: 90, category: "tools", icon: "/icons/eclipse.png" },
    { name: "IntelliJ", level: 75, category: "tools", icon: "/icons/intellij.png" },
    { name: "HTML/CSS", level: 95, category: "frontend", icon: "/icons/html.png" },
    { name: "JavaScript", level: 75, category: "frontend", icon: "/icons/javascript.png" },

    // Tools
    { name: "Git/GitHub", level: 90, category: "tools", icon: "/icons/github.png" },
    
    { name: "MongoDB", level: 40, category: "backend", icon: "/icons/mongodb.png" },
    { name: "Postman", level: 80, category: "tools", icon: "/icons/postman.png" },
    { name: "VS Code", level: 95, category: "tools", icon: "/icons/vscode.png" },
];

const categories=["all","frontend","backend","tools"]

export const SkillSection = () => {

    const [activeCat,setActiveCat] = useState("all");

    const filteredSkills = skills.filter((skill)=> activeCat === "all" || skill.category === activeCat);

    return (
        <section id="skills"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center w-full border-t border-b border-gray-300 p-4 md:border-0">
                    My <span className="text-primary">Skills</span>
                </h2>
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((categ,key)=>(
                        <button 
                            key={key} 
                            onClick={()=> setActiveCat(categ)}
                            className={cn("px-5 py-2 border-2 rounded-full border-primary/40 transition-colors duration-300 capitalize ",
                                activeCat === categ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}>{categ}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4 flex items-center gap-5">
                                {skill.icon ? (<img src={skill.icon} alt={skill.name} className="max-h-[50px] max-w-[50px] min-h-[50px] min-w-[50px]" />) : (<h3 className="font-semibold">{skill.name}</h3>)}
                                <h3 className="font-semibold">{skill.name}</h3>
                            </div>
                            <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                    style={{
                                        width:skill.level + "%"
                                    }}
                                />
                            </div>
                            <div className="text-right mt-1"
                            style={{
                                        width:skill.level + "%"
                                    }}> 
                                <span className="text-sm text-muted-foreground"
                                    
                                >{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}