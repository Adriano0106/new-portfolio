"use client"

import { useI18n } from "../context/I18nContext"
import BR from "country-flag-icons/react/3x2/BR"
import US from "country-flag-icons/react/3x2/US"

export function LanguageToggle() {
  const { locale, toggleLocale } = useI18n()

  return (
    <div
      onClick={toggleLocale}
      className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer w-fit mx-auto mb-4 border border-zinc-300 dark:border-zinc-700 transition-colors select-none shadow-sm"
      title={locale === "pt" ? "Mudar para inglês" : "Switch to Portuguese"}
    >
      {locale === "pt" ? (
        <BR title="Português" className="w-5 h-auto rounded-sm" />
      ) : (
        <US title="English" className="w-5 h-auto rounded-sm" />
      )}
      <span className="font-medium text-xs tracking-wide opacity-80">
        {locale === "pt" ? "PT-BR" : "EN-US"}
      </span>
    </div>
  )
}
