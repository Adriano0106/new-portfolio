import Link from "next/link"
import {
  Card,
  CardAction,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/ui/card"
import { FaExternalLinkAlt } from "react-icons/fa"
import { Title } from "./Title"
import { useI18n } from "../context/I18nContext"

type ProjectProps = {
  sidebarOpen: boolean
}

type Project = {
  emoji: string
  name: string
  link: string
  problem: string
  solution: string
  techDecisions: string
  outcome: string
  demoNote: string
  techs: string[]
}

type Labels = {
  problem: string
  solution: string
  techDecisions: string
  outcome: string
}

const Projects = ({ sidebarOpen }: ProjectProps) => {
  const { t } = useI18n()
  const projects: Project[] = t("projects.items") as unknown as Project[]
  const labels: Labels = t("projects.labels") as unknown as Labels
  const youAreHere = t("projects.youAreHere")

  return (
    <section
      id="projects-section"
      style={{ width: "inherit" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <Title sidebarOpen={sidebarOpen}>{t("projects.title")}</Title>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.name} className="w-full min-w-0 flex flex-col">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2 flex-wrap">
                <span>
                  {project.emoji} {project.name}
                </span>
                {project.link === "youAreHere" && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {youAreHere}
                  </span>
                )}
              </CardTitle>
            </CardHeader>

            <CardContent className="flex flex-col gap-3 flex-1">
              <div>
                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1">
                  {labels.problem}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {project.problem}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1">
                  {labels.solution}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {project.solution}
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1">
                  {labels.techDecisions}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {project.techDecisions}
                </p>
              </div>
              {project.demoNote && (
                <p className="rounded-lg bg-blue-50 p-3 text-sm text-blue-900 dark:bg-blue-950 dark:text-blue-200">
                  {project.demoNote}
                </p>
              )}
              <details className="rounded-lg border border-zinc-200 p-3 dark:border-zinc-700">
                <summary className="cursor-pointer rounded text-sm font-medium text-blue-700 dark:text-blue-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500">
                  {t("projects.details")}
                  <span className="sr-only"> — {project.name}</span>
                </summary>
                <p className="mt-3 text-xs font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wide mb-1">
                  {labels.outcome}
                </p>
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  {project.outcome}
                </p>
              </details>

              {project.techs?.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.techs.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-100 text-blue-800 text-xs font-medium px-3 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </CardContent>

            <CardFooter>
              {project.link !== "youAreHere" && (
                <CardAction>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 dark:text-blue-400 hover:underline hover:text-blue-500"
                  >
                    <FaExternalLinkAlt className="inline me-2" />
                    {t("projects.visit")}
                  </Link>
                </CardAction>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects
