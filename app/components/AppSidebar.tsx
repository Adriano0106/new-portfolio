import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/ui/sidebar"

type SectionKey =
  | "presentation"
  | "experience"
  | "skills"
  | "hobbies"
  | "projects"

type Props = {
  activeSection: SectionKey
  setActiveSection: (key: SectionKey) => void
}

export function AppSidebar({ activeSection, setActiveSection }: Props) {
  const navigation = [
    { name: "Apresentação", key: "presentation" },
    { name: "Experiência", key: "experience" },
    { name: "Skills", key: "skills" },
    { name: "Hobbies", key: "hobbies" },
    { name: "Projetos", key: "projects" },
  ]

  return (
    <Sidebar variant="floating">
      <SidebarHeader>
        <div className="text-2xl font-bold p-4">Adriano Andrade</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item) => (
            <SidebarMenuItem key={item.key} className="px-4 py-2">
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
  )
}
