"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MoonStar, SunDim } from "lucide-react"

export function ThemeToggleManual() {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Initialize theme based on user preferences or localStorage
  useEffect(() => {
    // Check if there's a saved preference
    const savedTheme = localStorage.getItem("theme")

    if (savedTheme === "dark") {
      setIsDarkMode(true)
      document.documentElement.classList.add("dark")
    } else if (savedTheme === "light") {
      setIsDarkMode(false)
      document.documentElement.classList.remove("dark")
    } else {
      // If no saved preference, use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDark)
      if (prefersDark) {
        document.documentElement.classList.add("dark")
      }
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    } else {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    }
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="flex items-center justify-center">
      <Button
        variant="outline"
        onClick={toggleTheme}
        className="w-9 h-9 p-0 border-black/30 dark:border-white/30 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-all duration-200 flex items-center justify-center"
      >
        {isDarkMode ? (
          <SunDim className="h-[1.2rem] w-[1.2rem] text-white" />
        ) : (
          <MoonStar className="h-[1.2rem] w-[1.2rem] text-black" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </div>
  )
}

