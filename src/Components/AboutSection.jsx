export const AboutSection = ()=>{
    return (
        <section id="about" className="py-24 px-4 relative flex justofu"> 
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center w-full border-t border-b border-gray-300 p-4 md:border-0">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center sm:flex-col-reverse">
                    <div className="space-y-6 order-2 md:order-1">
                        <h3 className="font-semibold text-xl md:text-2xl text-primary">I’m Ayush Kushwaha, a passionate full-stack developer.</h3>
                        <p className="text-foreground">
                            I have a strong focus on building scalable and user-friendly web applications. Skilled in <span className="font-semibold text-primary">Java, Spring Boot, REST Apis, React JS, Tailwind CSS and SQL Database </span> and many more latest techs.
                        </p>
                        <p className="text-foreground">
                            I enjoy turning complex problems into clean, efficient solutions. I love exploring new technologies, learning continuously, and applying modern best practices to deliver impactful digital experiences.
                        </p>
                        <p className="text-foreground"> 
                            I actively practice <span className="font-semibold text-primary">Data Structures and Algorithms</span> on LeetCode, where I have solved over <span className="font-semibold text-primary">100</span> problems across Easy, Medium, and Hard levels. Along the way, I’ve completed more than <span className="font-semibold text-primary">100 days</span> and earned multiple achievement badges that highlight my dedication to continuous learning and improvement.
                        </p>


                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">Get in Touch</a>
                            <a  
                                href="/Ayush_Kushwaha.pdf" 
                                download="Ayush-Kushwaha-Resume.pdf"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 
                                            transition-transform duration-300 hover:scale-105"
                                >
                                My Resume
                            </a>
                        </div>
                    </div>
                    <div className=" order-1 md:order-2 flex items-center justify-center bg-primary/15 p-[10px] rounded-3xl backdrop-blur-xs h-full">
                        <img src="/coder.png" alt="" className="drop-shadow-glow"/>
                    </div>
                </div>
            </div>
        </section>
    )
}