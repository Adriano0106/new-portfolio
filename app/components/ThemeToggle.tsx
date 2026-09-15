"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaMoon, FaSun } from "react-icons/fa"
import { Button } from "@/ui/button"
import { useI18n } from "../context/I18nContext"

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme()
  const { t } = useI18n()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 cursor-pointer w-fit mx-auto mb-4 border border-zinc-300 dark:border-zinc-700 transition-colors select-none shadow-sm"
      aria-label={t(isDark ? "controls.lightMode" : "controls.darkMode")}
      title={t(isDark ? "controls.lightMode" : "controls.darkMode")}
    >
      {isDark ? (
        <FaSun className="w-4 h-4 text-yellow-400" />
      ) : (
        <FaMoon className="w-4 h-4 text-zinc-500" />
      )}
      <span className="font-medium text-xs tracking-wide opacity-80">
        {t(isDark ? "controls.light" : "controls.dark")}
      </span>
    </Button>
  )
}
