"use client"

import { Title } from "./Title"
import { useI18n } from "../context/I18nContext"

type EducationProps = {
  sidebarOpen: boolean
}

type EducationItem = {
  type: "degree" | "course"
  featured: boolean
  title: string
  institution: string
  period: string
}

const Education = ({ sidebarOpen }: EducationProps) => {
  const { t } = useI18n()
  const items: EducationItem[] = t(
    "education.items",
  ) as unknown as EducationItem[]
  const degreeLabel: string = t("education.degreeLabel") as unknown as string

  const featured = items.filter((i) => i.featured)
  const courses = items.filter((i) => !i.featured)

  return (
    <section
      id="education-section"
      style={{ height: "auto" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <Title sidebarOpen={sidebarOpen}>{t("education.title")}</Title>

      {/* Graduação em destaque */}
      {featured.map((item) => (
        <div
          key={item.title}
          className="mt-6 rounded-2xl border-2 border-zinc-800 dark:border-zinc-200 bg-zinc-900 dark:bg-zinc-100 p-6 text-zinc-100 dark:text-zinc-900"
        >
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-700 dark:border-zinc-300">
              {degreeLabel}
            </span>
          </div>
          <h2 className="text-xl font-bold leading-tight">{item.title}</h2>
          <p className="mt-1 text-sm font-medium opacity-80">
            {item.institution}
          </p>
          {item.period && (
            <p className="mt-1 text-xs opacity-60">{item.period}</p>
          )}
        </div>
      ))}

      {/* Cursos complementares */}
      {courses.length > 0 && (
        <div className="mt-6">
          <ul className="divide-y divide-zinc-100 dark:divide-zinc-800">
            {courses.map((item) => (
              <li
                key={item.title}
                className="flex justify-between items-start gap-x-4 py-4"
              >
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                    {item.title}
                  </p>
                  <p className="mt-0.5 text-xs text-zinc-500 dark:text-zinc-400">
                    {item.institution}
                  </p>
                </div>
                {item.period && (
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap shrink-0">
                    {item.period}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}

export default Education
