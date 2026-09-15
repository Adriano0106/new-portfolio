import { RiMenu5Fill } from "react-icons/ri"
import * as Dialog from "@radix-ui/react-dialog"
import { Button } from "@/ui/button"
import { LanguageToggle } from "./LanguageToggle"
import { ThemeToggle } from "./ThemeToggle"
import { useI18n } from "../context/I18nContext"

export type SectionKey =
  | "presentation"
  | "experience"
  | "projects"
  | "mindset"
  | "education"
  | "contact"

type Props = {
  activeSection: SectionKey
  setActiveSection: (key: SectionKey) => void
  open: boolean
  setOpen: (open: boolean) => void
  isDesktop: boolean
}

export function AppSidebar({ activeSection, setActiveSection, open, setOpen, isDesktop }: Props) {
  const { t } = useI18n()
  const navigation: SectionKey[] = ["presentation", "experience", "projects", "mindset", "education", "contact"]
  const openButton = (
    <Button
      type="button"
      variant="secondary"
      size="icon"
      className="absolute top-4 left-4 z-30 border cursor-pointer"
      aria-label={t("controls.openMenu")}
      aria-expanded={open}
      aria-controls="portfolio-navigation"
      onClick={() => setOpen(true)}
    >
      <RiMenu5Fill className="h-6 w-6" aria-hidden="true" />
    </Button>
  )
  const content = (
    <>
      <div className="flex items-center justify-between mb-6">
        <span className="text-2xl font-bold">Adriano</span>
        <Button
          type="button"
          variant="secondary"
          size="icon"
          className="border cursor-pointer"
          aria-label={t("controls.closeMenu")}
          onClick={() => setOpen(false)}
        >
          <RiMenu5Fill className="h-6 w-6" aria-hidden="true" />
        </Button>
      </div>
      <LanguageToggle />
      <ThemeToggle />
      <nav id="portfolio-navigation" aria-label={t("controls.navigation")} className="flex flex-col gap-2">
        {navigation.map((key) => (
          <Button
            type="button"
            key={key}
            variant={activeSection === key ? "secondary" : "ghost"}
            aria-current={activeSection === key ? "page" : undefined}
            className="justify-start cursor-pointer"
            onClick={() => {
              setActiveSection(key)
              if (!isDesktop) setOpen(false)
            }}
          >
            {t(`navigation.${key}`)}
          </Button>
        ))}
      </nav>
    </>
  )

  if (isDesktop) {
    return (
      <>
        {!open && openButton}
        <aside hidden={!open} className="fixed top-0 left-0 z-40 w-64 h-[calc(100dvh-1rem)] m-2 rounded-2xl border border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-900 p-4 shadow-md overflow-y-auto">
          {content}
        </aside>
      </>
    )
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{openButton}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-40 bg-black/50" />
        <Dialog.Content aria-describedby={undefined} className="fixed inset-0 z-50 flex flex-col bg-white dark:bg-zinc-900 p-4 overflow-y-auto">
          <Dialog.Title className="sr-only">{t("controls.navigation")}</Dialog.Title>
          {content}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
