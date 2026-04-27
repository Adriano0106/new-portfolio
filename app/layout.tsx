import "./globals.css"
import "./custom.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Providers } from "./components/Providers"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Adriano",
  description: "Este é meu portfólio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div
          className="flex max-w-[1920px] w-full mx-auto relative overflow-x-hidden"
          suppressHydrationWarning
        >
          <Providers>{children}</Providers>
        </div>
      </body>
    </html>
  )
}
