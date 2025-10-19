import useWindowSize from "../hooks/useWindowSize"

type SectionTitleProps = {
  children: React.ReactNode
  sidebarOpen: boolean
}

export function Title({ children, sidebarOpen }: SectionTitleProps) {
  const { width } = useWindowSize()
  const isMobile = width !== undefined && width <= 767

  return (
    <h1 style={isMobile && !sidebarOpen ? { paddingLeft: "56px" } : {}}>
      {children}
    </h1>
  )
}
