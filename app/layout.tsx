import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Footer from "./components/Footer"
import { SidebarProvider } from "@/ui/sidebar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adriano Andrade",
  description: "Este é meu portfólio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SidebarProvider>{children}</SidebarProvider>
        <Footer />
      </body>
    </html>
  )
}
