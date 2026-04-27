"use client"

import Link from "next/link"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import { Title } from "./Title"
import { useI18n } from "../context/I18nContext"

type ContactProps = {
  sidebarOpen: boolean
}

const Contact = ({ sidebarOpen }: ContactProps) => {
  const { t } = useI18n()

  return (
    <section
      id="contact-section"
      style={{ width: "inherit" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <Title sidebarOpen={sidebarOpen}>{t("contact.title")}</Title>

      {/* Apenas informações de contato, sem CTA */}

      {/* Links */}
      <div className="flex flex-col gap-3 max-w-sm">
        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide">
          {t("contact.emailDescription")}
        </p>
        <Link
          href="mailto:adriano.andrade.silva@hotmail.com"
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors text-sm text-zinc-700 dark:text-zinc-300"
        >
          <FaEnvelope className="text-red-500 shrink-0" />
          adriano.andrade.silva@hotmail.com
        </Link>
        <Link
          href="mailto:hey.adriano@outlook.com"
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors text-sm text-zinc-700 dark:text-zinc-300"
        >
          <FaEnvelope className="text-red-500 shrink-0" />
          hey.adriano@outlook.com
        </Link>

        <p className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-wide mt-2">
          {t("contact.socialDescription")}
        </p>
        <Link
          href="https://www.linkedin.com/in/adrianoa1/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors text-sm text-zinc-700 dark:text-zinc-300"
        >
          <FaLinkedin className="text-blue-600 shrink-0" />
          linkedin.com/in/adrianoa1
        </Link>
        <Link
          href="https://github.com/Adriano0106"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-blue-300 dark:hover:border-blue-700 transition-colors text-sm text-zinc-700 dark:text-zinc-300"
        >
          <FaGithub className="text-zinc-800 dark:text-zinc-100 shrink-0" />
          github.com/Adriano0106
        </Link>
      </div>
    </section>
  )
}

export default Contact
