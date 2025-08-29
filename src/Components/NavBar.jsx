import { useEffect, useState } from "react"
import { cn } from "./lib/util"
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
    {name : "Home",href:"#hero"},
    {name : "About",href:"#about"},
    {name : "Skills",href:"#skills"},
    {name : "Projects",href:"#projects"},
    {name : "Contact",href:"#contact"}

]

export const NavBar = ()=>{

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        const handleScroll = () =>{
            setIsScrolled(window.scrollY > 10)
        }

        window.addEventListener("scroll",handleScroll);

        return () => window.removeEventListener("scroll",handleScroll);
    },[])

    return(
       <nav className={cn("fixed w-full z-40 transition-all duration-300",
       isScrolled ? "py-5 bg-background/80 backdrop-blur-md shadow-md":"py-5" )}>  
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Ayush's</span> Portfolio
                    </span>
                </a>

                {/* desktop  */}

                    <div className="hidden md:flex space-x-8"> 
                        {navItems.map((item,key)=>(
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold">
                                {item.name}
                            </a>
                        ))}
                    </div>

                {/* mobile */}
                    <button 
                        onClick={()=> setIsMobile((prev) => !prev)}         className="md:hidden p-2 text-foreground z-50 mr-[20px]"
                        aria-label={isMobile?"Close Menu":"Open Menu"}
                    >
                        {isMobile?<X size={24}/> : <Menu size={24}/> }
                    </button>

                    <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-xs z-40 flex flex-col items-center justify-center",
                        "transition-all duration-300 md:hidden",
                        isMobile ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    )}>
                        <div className="flex flex-col space-y-8 text-xl"> 
                            {navItems.map((item,key)=>(
                                <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300 font-bold"
                                onClick={() => setIsMobile(false)}
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </div>
            </div>
       </nav>
    )
}