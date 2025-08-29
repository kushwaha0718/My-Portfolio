import { useEffect, useState } from "react"
import {Moon, Sun} from "lucide-react"
import { cn } from "./lib/util";

export const ThemeToggle = ()=>{
    const [darkMode,setDarkMode] = useState(true);

    useEffect(()=>{
        const storedTheme  = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setDarkMode(true);
            document.documentElement.classList.add("dark");
        }else{
            localStorage.setItem("theme","light");
            setDarkMode(false);
        }
    },[])

    const toggleTheme = () => {
        if (darkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme","light");
            setDarkMode(false);
        }else{
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme","dark");
            setDarkMode(true);
        }
    }

    return(
        <button 
            onClick={toggleTheme}
            className={cn( " cursor-pointer fixed  top-5 right-5 z-50 p-2 rounded-full      transition-colors duration-300",
                "focus:outlin-hidden"
            )}
        >{darkMode? <Sun className="h-6 w-6 text-yellow-300"/> : <Moon className="h-6 w-6 text-blue-900"/>}</button>
    )
}