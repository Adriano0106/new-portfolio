import Link from "next/link"
import { FaGithub } from "react-icons/fa"

const Footer = () => {
  return (
    <footer
      id="footer-section"
      className="sticky bottom-0 w-full mx-1.5 mb-2.5 mt-2.5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 transition-colors"
      style={{ width: "-webkit-fill-available" }}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 h-[50px] flex items-center justify-center">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-zinc-500 dark:text-zinc-400">
            Desenvolvido por:
          </span>
          <Link
            href="https://github.com/Adriano0106"
            target="_blank"
            className="flex items-center gap-1.5 text-zinc-700 dark:text-zinc-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
          >
            Adriano Andrade da Silva <FaGithub className="inline" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
