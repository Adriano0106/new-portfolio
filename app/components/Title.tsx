"use client"

import { useEffect, useState } from "react"

type SectionTitleProps = {
  children: React.ReactNode
  sidebarOpen: boolean
}

export function Title({ children, sidebarOpen }: SectionTitleProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <h1>{children}</h1>
  }

  return <h1 style={!sidebarOpen ? { paddingLeft: "56px" } : {}}>{children}</h1>
}
