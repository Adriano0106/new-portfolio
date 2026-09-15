"use client"

import { useState } from "react"
import Image from "next/image"
import { Input } from "@/ui/input"
import { Title } from "./Title"
import { useI18n } from "../context/I18nContext"

type ExperienceProps = {
  sidebarOpen: boolean
}

type Job = {
  name: string
  description: string
  role: string
  imageUrl: string
  time: string
  techs: string[]
}

const Experience = ({ sidebarOpen }: ExperienceProps) => {
  const { t } = useI18n()
  const jobs: Job[] = t("experience.jobs") as unknown as Job[]
  const [filter, setFilter] = useState("")
  const showJobs = jobs.filter((job) =>
    job.techs.some((tech) => tech.toLowerCase().includes(filter.trim().toLowerCase())),
  )

  return (
    <section
      id="experience-section"
      style={{ height: "auto" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <Title sidebarOpen={sidebarOpen}>{t("experience.title")}</Title>

      <label htmlFor="experience-filter" className="mt-4 mb-2 block text-sm font-medium">
        {t("experience.filterLabel")}
      </label>
      <Input
        id="experience-filter"
        type="search"
        value={filter}
        placeholder={t("experience.filter")}
        className="mb-2"
        onChange={(e) => setFilter(e.target.value)}
      />
      <p role="status" className="text-sm text-zinc-600 dark:text-zinc-400">
        {showJobs.length === 0 ? t("experience.empty") : ""}
      </p>

      <ul role="list" className="divide-y divide-zinc-100 dark:divide-zinc-800">
        {showJobs.map((job) => (
          <li key={job.name} className="flex flex-col-reverse md:flex-row justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <Image
                src={job.imageUrl}
                width={100}
                height={100}
                alt={job.name}
                className="h-12 w-12 flex-none rounded-full bg-gray-50 dark:bg-zinc-800"
                style={{ borderRadius: "50%" }}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                  {job.name}
                </p>
                <p className="mt-1 text-sm leading-5 text-zinc-500 dark:text-zinc-400 display-linebreak">
                  {job.description}
                </p>
                <br />
                <p className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-100">
                  {t("experience.usedTechs")}
                </p>
                {job.techs.map((tech, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-100 text-blue-800 text-xs font-medium me-2 px-3 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div
              className="shrink-0 sm:flex sm:flex-col md:items-end"
              style={{ marginBottom: "1rem" }}
            >
              <p className="text-sm leading-6 text-zinc-900 dark:text-zinc-100">
                {job.role}
              </p>
              <p className="mt-1 text-xs leading-5 text-zinc-500 dark:text-zinc-400">
                <time>{job.time}</time>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
