"use client"

import { SidebarProvider } from "@/ui/sidebar"
import { I18nProvider } from "../context/I18nContext"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <I18nProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </I18nProvider>
  )
}
