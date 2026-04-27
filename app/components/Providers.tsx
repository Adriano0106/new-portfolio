"use client"

import { SidebarProvider } from "@/ui/sidebar"
import { I18nProvider } from "../context/I18nContext"
import { ThemeProvider } from "next-themes"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <I18nProvider>
        <SidebarProvider>{children}</SidebarProvider>
      </I18nProvider>
    </ThemeProvider>
  )
}
