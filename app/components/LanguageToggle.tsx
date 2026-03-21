"use client"

import { useI18n } from "../context/I18nContext"
import { Button } from "@/ui/button"
import BR from "country-flag-icons/react/3x2/BR"
import US from "country-flag-icons/react/3x2/US"

export function LanguageToggle() {
  const { locale, toggleLocale } = useI18n()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="text-xs font-semibold cursor-pointer flex items-center gap-2"
    >
      {locale === "pt" ? (
        <BR title="Português" className="w-5 h-auto rounded-sm" />
      ) : (
        <US title="English" className="w-5 h-auto rounded-sm" />
      )}
      {locale === "pt" ? "PT-BR" : "EN-US"}
    </Button>
  )
}
