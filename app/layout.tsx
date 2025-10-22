import "./globals.css"
import "./custom.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
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
        <div className="flex max-w-[1920px] w-full mx-auto relative overflow-x-hidden">
          <SidebarProvider>{children}</SidebarProvider>
        </div>
      </body>
    </html>
  )
}
