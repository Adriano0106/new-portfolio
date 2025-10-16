import { useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/ui/sidebar"
import { Button } from "@/ui/button"
import { RiMenu5Fill } from "react-icons/ri"

type SectionKey =
  | "presentation"
  | "experience"
  // | "skills"
  | "hobbies"
  | "projects"
  | "contact"

type Props = {
  activeSection: SectionKey
  setActiveSection: (key: SectionKey) => void
}

export function AppSidebar({ activeSection, setActiveSection }: Props) {
  const [open, setOpen] = useState(true)
  const navigation = [
    { name: "Apresentação", key: "presentation" },
    { name: "Experiência", key: "experience" },
    // { name: "Skills", key: "skills" },
    { name: "Projetos", key: "projects" },
    { name: "Hobbies", key: "hobbies" },
    { name: "Contato", key: "contact" },
  ]

  return (
    <>
      {!open && (
        <Button
          variant="outline"
          className="fixed top-0 left-0 z-30 m-4"
          onClick={() => setOpen(true)}
        >
          <RiMenu5Fill />
        </Button>
      )}
      {open && (
        <Sidebar variant="floating">
          <SidebarHeader>
            <div className="flex items-center justify-between p-4">
              <span className="text-2xl font-bold">Adriano Andrade</span>
              <Button
                variant="outline"
                className="ml-2"
                style={{ position: "relative", left: "4px" }}
                onClick={() => setOpen(false)}
              >
                <RiMenu5Fill />
              </Button>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem
                  key={item.key}
                  className="px-4 py-2 cursor-pointer"
                >
                  <button
                    className={`cursor-pointer${
                      activeSection === item.key ? " font-bold" : ""
                    }`}
                    onClick={() => setActiveSection(item.key as SectionKey)}
                  >
                    {item.name}
                  </button>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter />
        </Sidebar>
      )}
    </>
  )
}
