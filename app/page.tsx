"use client"

import { useState } from "react"
import Experience from "./components/Experience"
import Hobbies from "./components/Hobbie"
import Presentation from "./components/Presentation"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import { AppSidebar } from "./components/AppSidebar"
import Footer from "./components/Footer"

const sectionKeys = [
  "presentation",
  "experience",
  "skills",
  "hobbies",
  "projects",
] as const

type SectionKey = (typeof sectionKeys)[number]

const sections: Record<SectionKey, JSX.Element> = {
  presentation: <Presentation />,
  experience: <Experience />,
  skills: <Skills />,
  hobbies: <Hobbies />,
  projects: <Projects />,
}

export default function Home() {
  const [activeSection, setActiveSection] = useState<SectionKey>("presentation")

  return (
    <div className="flex min-h-screen">
      <AppSidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="flex flex-col flex-1">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex-1">
          {sections[activeSection]}
        </div>
        <Footer />
      </div>
    </div>
  )
}
