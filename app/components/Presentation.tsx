"use client"

import Image from "next/image"
import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { useI18n } from "../context/I18nContext"

const birthDate = "1995-06-01"
const city = "São Paulo"
const state = "SP"

const calculateAge = (birthDate: string): number => {
  const today = new Date()
  const birthDateObj = new Date(birthDate)
  let age = today.getFullYear() - birthDateObj.getFullYear()
  const monthDifference = today.getMonth() - birthDateObj.getMonth()
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDateObj.getDate())
  ) {
    age--
  }
  return age
}

const Presentation = () => {
  const { t } = useI18n()
  const age = calculateAge(birthDate)

  return (
    <section
      id="presentation-section"
      className="scroll-pt-navbar py-10 flex items-center justify-center min-h-[80vh]"
    >
      <div className="w-full max-w-3xl mx-4">
        {/* CTA Badge */}
        <div className="flex justify-center md:justify-start mb-6">
          <span className="inline-flex items-center gap-2 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700 text-xs font-semibold px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            {t("presentation.openToWork")}
          </span>
        </div>

        {/* Hero */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
          <Image
            src="/adriano_new_picture.png"
            width={160}
            height={160}
            alt="Foto de Adriano Andrade"
            className="rounded-full border-4 border-zinc-200 dark:border-zinc-700 shadow-xl shrink-0"
          />
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <h1 className="text-4xl font-extrabold text-zinc-800 dark:text-zinc-100 leading-tight">
              {t("presentation.title")}
            </h1>
            <p className="text-xl font-semibold text-blue-600 dark:text-blue-400">
              {t("presentation.job")}
            </p>
            <div className="flex flex-wrap gap-3 text-zinc-500 dark:text-zinc-400 text-sm mt-1">
              <span>{age} {t("presentation.age")}</span>
              <span>•</span>
              <span>{city}, {state}</span>
              <span>•</span>
              <span>{t("presentation.degree")}</span>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="border-l-4 border-blue-500 pl-5 mb-8 space-y-3">
          {(t("presentation.summary") as string)
            .split(/\n\n+/)
            .map((paragraph, idx) => (
              <p key={idx} className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                {paragraph.trim()}
              </p>
            ))}
        </div>

        {/* Social links */}
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          <Link
            href="https://www.linkedin.com/in/adrianoa1/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
          >
            <FaLinkedin className="text-blue-600" />
            LinkedIn
          </Link>
          <Link
            href="https://github.com/Adriano0106"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
          >
            <FaGithub />
            GitHub
          </Link>
          <Link
            href="mailto:adriano.andrade.silva@hotmail.com"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 border border-zinc-200 dark:border-zinc-700 text-sm font-medium text-zinc-700 dark:text-zinc-300 transition-colors"
          >
            <FaEnvelope className="text-red-500" />
            Email
          </Link>
        </div>

        {/* Personal note */}
        <p className="mt-8 text-zinc-400 dark:text-zinc-500 text-xs text-center md:text-left">
          {t("presentation.about")}
        </p>
      </div>
    </section>
  )
}

export default Presentation
