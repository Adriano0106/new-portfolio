"use client"

import { useState, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"
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
  const size = useWindowSize()
  const [isSmall, setIsSmall] = useState<boolean>(false)
  const [showJobs, setShowJobs] = useState<Job[]>(jobs)

  useEffect(() => {
    setShowJobs(jobs)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [t])

  useEffect(() => {
    if (size.width !== undefined && size.width <= 768) {
      setIsSmall(true)
    } else {
      setIsSmall(false)
    }
  }, [size.width])

  const sharedClasses = "flex justify-between gap-x-6 py-5"
  const conditionalClass = isSmall ? "flex-col-reverse" : ""

  return (
    <section
      id="experience-section"
      style={{ height: "auto" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <Title sidebarOpen={sidebarOpen}>{t("experience.title")}</Title>

      <Input
        placeholder={t("experience.filter")}
        className="mb-2 mt-4"
        onChange={(e) => {
          const filter = e.target.value.toLowerCase()
          const filteredJobs = jobs.filter((job) =>
            job.techs.some((tech) => tech.toLowerCase().includes(filter))
          )
          filter === "" ? setShowJobs(jobs) : setShowJobs(filteredJobs)
        }}
      />

      <ul role="list" className="divide-y divide-gray-100">
        {showJobs.map((job) => (
          <li key={job.name} className={`${sharedClasses} ${conditionalClass}`}>
            <div className="flex min-w-0 gap-x-4">
              <Image
                src={job.imageUrl}
                width={100}
                height={100}
                alt={job.name}
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                style={{ borderRadius: "50%" }}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">
                  {job.name}
                </p>
                <p className="mt-1 text-sm leading-5 text-gray-500 display-linebreak">
                  {job.description}
                </p>
                <br />
                <p className="text-sm font-semibold leading-6 text-gray-900">
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
              <p className="text-sm leading-6 text-gray-900">{job.role}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
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
