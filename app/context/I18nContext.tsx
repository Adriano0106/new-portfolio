"use client"

import { createContext, useContext, useState, useCallback } from "react"
import pt from "../../messages/pt.json"
import en from "../../messages/en.json"

type Locale = "pt" | "en"
type Messages = typeof pt

type I18nContextProps = {
  locale: Locale
  t: (key: string) => string
  toggleLocale: () => void
}

const messages: Record<Locale, Messages> = { pt, en }

const I18nContext = createContext<I18nContextProps>({} as I18nContextProps)

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt")

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "pt" ? "en" : "pt"))
  }, [])

  const t = useCallback(
    (key: string): string => {
      const keys = key.split(".")
      let value: any = messages[locale]
      for (const k of keys) {
        value = value?.[k]
      }
      return value ?? key
    },
    [locale]
  )

  return (
    <I18nContext.Provider value={{ locale, t, toggleLocale }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  return useContext(I18nContext)
}
