"use client"

import { useState, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"
import Image from "next/image"
import { Input } from "@/ui/input"

const jobs = [
  {
    name: "Gigaservices",
    description: `Desenvolvimento de Interfaces com Ruby on Rails
      Criação e manutenção de views em aplicações Ruby on Rails, aplicando JavaScript, jQuery e Bootstrap para garantir interfaces funcionais e responsivas.

      Implementação de Funcionalidades e Back-End
      Desenvolvimento de novas funcionalidades utilizando Ruby, com manipulação de dados em banco PostgreSQL e cobertura de testes com RSpec.

      Atuação em Qualidade e Suporte
      Colaboração nos testes de aplicações e no suporte direto ao cliente, contribuindo para a identificação e resolução de problemas técnicos.`,
    role: "Trainee",
    imageUrl: "/gigaservices-logo.jpg",
    time: "2018 - 2020",
    lastSeenDateTime: "2023-01-23T13:23Z",
    techs: [
      "Ruby on Rails",
      "Ruby",
      "JavaScript",
      "PostgreSQL",
      "Git",
      "Bootstrap",
      "CSS",
      "HTML",
    ],
  },
  {
    name: "UOL",
    description: `APIs
      Desenvolvimento de APIs, com foco em fornecer dados para que os mesmos sejam utilizados por diversos sistemas e áreas da empresa.

      Automação de Publicações em Plataformas de Publicidade
      Criação de scripts para publicação e atualização em lote nas plataformas de gerenciamento de anúncios utilizadas pela equipe de Operação.

      Criação de Publicidades
      Desenvolvimento de peças publicitárias para exibição no UOL e em sites parceiros com animações CSS.

      Desenvolvimento de Sites e Sistemas Internos
      Responsável pelo desenvolvimento de sites para novas publicações.
      Responsável pela criação do novo sistema de FAQ de diversas áreas do UOL.
      Desenvolvimento de ferramentas de automação para importação e atualização de conteúdos em lote.

      Sistema de Controle de Acesso de Usuários
      Desenvolvimento de um sistema interno para gerenciamento de acessos, com interface intuitiva e integração com banco de dados relacional.`,
    role: "Desenvolvedor Full Stack",
    imageUrl: "/logo-uol.png",
    time: "2020 - atualmente",
    lastSeenDateTime: "2023-01-23T13:23Z",
    techs: [
      "TypeScript",
      "JavaScript",
      "ReactJS",
      "NextJS",
      "NodeJs",
      "Express",
      "Knex",
      "Prisma",
      "Vitest",
      "PHP",
      "Sass (Scss)",
      "Bootstrap",
      "Material",
      "Tailwind",
      "Shadcn",
      "Gulp",
      "Vite",
      "Git",
      "CSS",
      "HTML",
      "MySQL",
      "SQLite",
      "PostgreSQL",
      "Oracle",
    ],
  },
]

const Experience = () => {
  const reversedJobs = [...jobs].reverse()
  const size = useWindowSize()
  const [isSmall, setIsSmall] = useState<boolean>(false)
  const [showJobs, setShowJobs] = useState(reversedJobs)

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
      <h1>Experiência</h1>

      <Input
        placeholder="Filtrar por tecnologia (ex: React, Node, Ruby)"
        className="mb-4"
        onChange={(e) => {
          const filter = e.target.value.toLowerCase()
          const filteredJobs = reversedJobs.filter((job) =>
            job.techs.some((tech) => tech.toLowerCase().includes(filter))
          )
          filter === "" ? setShowJobs(reversedJobs) : setShowJobs(filteredJobs)
        }}
      />

      <ul role="list" className="divide-y divide-gray-100">
        {showJobs.map((job) => (
          <li
            key={job.description}
            className={`${sharedClasses} ${conditionalClass}`}
          >
            <div className="flex min-w-0 gap-x-4">
              <Image
                src={job.imageUrl}
                width={100}
                height={100}
                alt=""
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
                  Tecnologias Utilizadas
                </p>
                {job.techs.map((t, i) => (
                  <span
                    key={i}
                    className="inline-block bg-blue-100 text-blue-800 text-xs font-medium me-2 px-3 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300"
                  >
                    {t}
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
                <time dateTime={job.lastSeenDateTime}>{job.time}</time>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Experience
