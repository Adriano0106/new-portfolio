import "./globals.css"
import "./custom.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./components/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adriano Andrade | React e TypeScript",
  description:
    "Engenheiro de software com experiência em React, TypeScript e arquitetura frontend. Conheça meus projetos e minha atuação no UOL.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
