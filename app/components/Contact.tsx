import Link from "next/link"
import styles from "./../styles/footer.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <section
      id="hobbies-section"
      style={{ width: "inherit" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <h1>Contato</h1>
      <p className="text-left text-gray-500 dark:text-gray-400">
        Você pode entrar em contato comigo através dos emails:
        <br />
        <a
          href="mailto:adriano.andrade.silva@hotmail.com"
          className="text-blue-500 hover:underline"
        >
          adriano.andrade.silva@hotmail.com
        </a>
        <br />
        <a
          href="mailto:hey.adriano@outlook.com"
          className="text-blue-500 hover:underline"
        >
          hey.adriano@outlook.com
        </a>
        <br />
        <p className="text-left text-gray-500 dark:text-gray-400 mt-4">
          Ou através das minhas redes sociais:
        </p>
        <Link
          href="https://www.linkedin.com/in/adrianoa1/"
          className="flex items-center gap-2 text-blue-500 hover:underline mt-2"
          target="_blank"
        >
          <FaLinkedin className={`${styles.iconLinkedin} text-gray-700`} />
          LinkedIn
        </Link>
        <Link
          href="https://github.com/Adriano0106"
          className="flex items-center gap-2 text-blue-500 hover:underline mt-2"
          target="_blank"
        >
          <FaGithub className={`${styles.iconGithub} text-gray-700`} />
          Github
        </Link>
      </p>
    </section>
  )
}

export default Contact
