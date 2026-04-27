"use client"

import { Title } from "./Title"
import { useI18n } from "../context/I18nContext"

type Props = {
  sidebarOpen: boolean
}

type MindsetItem = {
  icon: string
  title: string
  description: string
}

const EngineeringMindset = ({ sidebarOpen }: Props) => {
  const { t } = useI18n()
  const items: MindsetItem[] = t("mindset.items") as unknown as MindsetItem[]

  return (
    <section
      id="mindset-section"
      style={{ width: "inherit" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <Title sidebarOpen={sidebarOpen}>{t("mindset.title")}</Title>
      <p className="text-zinc-500 dark:text-zinc-400 mb-6 max-w-2xl">
        {t("mindset.subtitle")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex gap-4 p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors"
          >
            <span className="text-2xl shrink-0">{item.icon}</span>
            <div>
              <p className="font-semibold text-zinc-800 dark:text-zinc-100 mb-1">
                {item.title}
              </p>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default EngineeringMindset
