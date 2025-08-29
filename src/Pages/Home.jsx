import { ThemeToggle } from "../Components/ThemeToggle"
import { StarBg } from "../Components/StarBg"
import { NavBar } from "../Components/NavBar"
import { HeroSection } from "../Components/HeroSection"
import { AboutSection } from "../Components/AboutSection"
import { SkillSection } from "../Components/SkillSection"
import { ProjectSection } from "../Components/ProjectSection"
import { ContactSection } from "../Components/ContactSection"

export const Home = ()=>{
    return(
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme toggle */}
            <ThemeToggle/>
            
            {/* bg effect */}
            <StarBg/>

            {/* Navbar */}

            <NavBar/>

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutSection />
                <SkillSection/>
                <ProjectSection/>
                <ContactSection/>
            </main>

            {/* Footer */}


        </div>
    )
}