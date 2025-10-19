"use client"

import { useState } from "react"
import Experience from "./components/Experience"
import Hobbies from "./components/Hobbie"
import Presentation from "./components/Presentation"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { AppSidebar } from "./components/AppSidebar"
import Footer from "./components/Footer"
import Contact from "./components/Contact"

const sectionKeys = [
  "presentation",
  "experience",
  // "skills",
  "projects",
  "hobbies",
  "contact",
] as const

type SectionKey = (typeof sectionKeys)[number]

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("presentation")
  const [sidebarOpen, setSidebarOpen] = useState(true)

  const sections: Record<SectionKey, JSX.Element> = {
    presentation: <Presentation />,
    experience: <Experience sidebarOpen={sidebarOpen} />,
    // skills: <Skills sidebarOpen={sidebarOpen} />,
    projects: <Projects sidebarOpen={sidebarOpen} />,
    hobbies: <Hobbies sidebarOpen={sidebarOpen} />,
    contact: <Contact sidebarOpen={sidebarOpen} />,
  }

  return (
    <div className="flex min-h-screen w-full max-w-[1920px] mx-auto">
      <AppSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <div
        className={`flex flex-col flex-1 transition-all duration-300 ${
          sidebarOpen ? "lg:ml-68" : ""
        }`}
      >
        <div className="flex-1" style={{ height: "calc(100vh - 70px)" }}>
          {sections[activeSection]}
        </div>
        <Footer />
      </div>
    </div>
  )
}
