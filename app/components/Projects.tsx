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

type ProjectProps = {
  sidebarOpen: boolean
}

const my_projects = [
  [
    "😎",
    "Portfólio",
    "Você está aqui",
    "Projeto desenvolvido em Next com TypeScript utilizando Tailwind e Shadcn.",
  ],
  [
    "🏎️",
    "Formula One Database",
    "https://github.com/Adriano0106/Formula-One-Database",
    "API desenvolvida em Node.js e express.",
  ],
  [
    "🏎️",
    "Formula One Next",
    "https://adriano-formulaonenext.netlify.app/",
    "Projeto desenvolvido em Next com TypeScript utilizando Bootstrap, Styled Components e consumindo a API do projeto acima.",
  ],
]

const Projects = ({ sidebarOpen }: ProjectProps) => {
  return (
    <section
      id="projects-section"
      style={{ width: "inherit" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <Title sidebarOpen={sidebarOpen}>Projetos</Title>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {my_projects.map((project, index) => (
          <Card key={index} className="w-full">
            <CardHeader>
              <CardTitle className="text-lg">
                {project[0]} {project[1]}
                {project[2] == "Você está aqui" && (
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium ms-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">
                    Você está aqui
                  </span>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project[3]}</CardDescription>
            </CardContent>
            <CardFooter>
              {project[2] != "Você está aqui" && (
                <CardAction>
                  <Link
                    href={project[2]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-900 hover:underline hover:text-blue-500"
                  >
                    <FaExternalLinkAlt className="inline me-2" />
                    Ver Projeto
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
