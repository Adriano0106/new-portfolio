import Link from "next/link"
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
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
  description: string
}

const Projects = ({ sidebarOpen }: ProjectProps) => {
  const { t } = useI18n()
  const projects: Project[] = t("projects.items") as unknown as Project[]
  const youAreHere = t("projects.youAreHere")

  return (
    <section
      id="projects-section"
      style={{ width: "inherit" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <Title sidebarOpen={sidebarOpen}>{t("projects.title")}</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <Card key={index} className="w-full gap-2">
            <CardHeader>
              <CardTitle className="text-lg">
                {project.emoji} {project.name}
                {project.link === "youAreHere" && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium ms-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    {youAreHere}
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              {project.link !== "youAreHere" && (
                <CardAction>
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:underline hover:text-blue-500"
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
