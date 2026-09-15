"use client"

import { useEffect, useState } from "react"
import Experience from "./components/Experience"
import Presentation from "./components/Presentation"
import Projects from "./components/Projects"
import EngineeringMindset from "./components/EngineeringMindset"
import Education from "./components/Education"
import { AppSidebar, type SectionKey } from "./components/AppSidebar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("presentation")
  const [isDesktop, setIsDesktop] = useState<boolean | undefined>(undefined)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)")
    const updateLayout = () => {
      setIsDesktop(media.matches)
      setSidebarOpen(media.matches)
    }
    updateLayout()
    media.addEventListener("change", updateLayout)
    return () => media.removeEventListener("change", updateLayout)
  }, [])

  if (isDesktop === undefined) return null

  const sections: Record<SectionKey, JSX.Element> = {
    presentation: <Presentation />,
    experience: <Experience sidebarOpen={sidebarOpen} />,
    education: <Education sidebarOpen={sidebarOpen} />,
    projects: <Projects sidebarOpen={sidebarOpen} />,
    mindset: <EngineeringMindset sidebarOpen={sidebarOpen} />,
    contact: <Contact sidebarOpen={sidebarOpen} />,
  }

  return (
    <div className="flex min-h-screen w-full max-w-[1920px] mx-auto">
      <AppSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
        isDesktop={isDesktop}
      />
      <div
        className={`flex min-w-0 flex-col flex-1 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-66" : ""
        }`}
      >
        <main className="flex-1">
          {sections[activeSection]}
        </main>
        <Footer />
      </div>
    </div>
  )
}
