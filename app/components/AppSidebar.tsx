import { RiMenu5Fill } from "react-icons/ri"
import * as Collapsible from "@radix-ui/react-collapsible"
import { Button } from "@/ui/button"
import { useIsMobile } from "@/hooks/use-mobile"

type SectionKey =
  | "presentation"
  | "experience"
  | "projects"
  | "hobbies"
  | "contact"

type Props = {
  activeSection: SectionKey
  setActiveSection: (key: SectionKey) => void
  open: boolean
  setOpen: (open: boolean) => void
}

const navigation = [
  { name: "Apresentação", key: "presentation" },
  { name: "Experiência", key: "experience" },
  { name: "Projetos", key: "projects" },
  { name: "Hobbies", key: "hobbies" },
  { name: "Contato", key: "contact" },
]

export function AppSidebar({
  activeSection,
  setActiveSection,
  open,
  setOpen,
}: Props) {
  const isMobile = useIsMobile()
  return (
    <>
      {/* Botão para abrir a sidebar, só aparece quando fechada no mobile */}
      {!open && (
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-4 left-4 z-30 border-1 cursor-pointer"
          onClick={() => setOpen(true)}
        >
          <RiMenu5Fill className="h-6 w-6" />
        </Button>
      )}

      <Collapsible.Root
        open={open}
        onOpenChange={setOpen}
        className="
    z-40 flex flex-col border-r border-zinc-200 bg-white p-4
    dark:border-zinc-800 dark:bg-zinc-900
    absolute top-0 left-0 transition-all w-screen h-[100vh]
    mr-[10px] shadow-md overflow-hidden
    data-[state=closed]:-translate-x-[100vw] data-[state=closed]:w-0
    lg:w-64 lg:h-[calc(100vh-1rem)] lg:my-2 lg:ml-2 lg:rounded-2xl lg:shadow-md lg:mr-0
  "
      >
        <div className="flex items-center justify-between mb-6">
          <span className="text-2xl font-bold">Adriano Andrade</span>
          <Collapsible.Trigger asChild>
            <Button
              variant="secondary"
              size="icon"
              className="border-1 cursor-pointer"
            >
              <RiMenu5Fill className="h-6 w-6" />
            </Button>
          </Collapsible.Trigger>
        </div>

        <Collapsible.Content
          forceMount
          className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden"
        >
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <Button
                key={item.key}
                variant={activeSection === item.key ? "secondary" : "ghost"}
                className="justify-start cursor-pointer"
                onClick={() => {
                  setActiveSection(item.key as SectionKey)
                  if (isMobile) setOpen(false)
                }}
              >
                {item.name}
              </Button>
            ))}
          </nav>
        </Collapsible.Content>
      </Collapsible.Root>
    </>
  )
}
