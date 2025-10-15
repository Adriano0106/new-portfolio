import Link from "next/link"
import styles from "./../styles/footer.module.css"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/ui/card"

const Contact = () => {
  return (
    <section
      id="hobbies-section"
      style={{ width: "inherit" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <h1>Contato</h1>
      <Card>
        <CardHeader>
          {/* <CardTitle>Vamos conversar!</CardTitle> */}
          <CardDescription>
            Você pode entrar em contato comigo através dos emails:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <CardDescription>
            <a
              href="mailto:adriano.andrade.silva@hotmail.com"
              className="text-blue-500 hover:underline"
            >
              adriano.andrade.silva@hotmail.com
            </a>
          </CardDescription>
          <CardDescription>
            <a
              href="mailto:hey.adriano@outlook.com"
              className="text-blue-500 hover:underline"
            >
              hey.adriano@outlook.com
            </a>
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="mt-4">
        <CardHeader>
          <CardDescription className="mb-2">
            Ou através das minhas redes sociais:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <CardDescription>
            <Link
              href="https://www.linkedin.com/in/adrianoa1/"
              className="flex items-center gap-2 text-blue-500 hover:underline"
              target="_blank"
            >
              <FaLinkedin className={`${styles.iconLinkedin} text-gray-700`} />
              LinkedIn
            </Link>
          </CardDescription>
          <CardDescription>
            <Link
              href="https://github.com/Adriano0106"
              className="flex items-center gap-2 text-blue-500 hover:underline"
              target="_blank"
            >
              <FaGithub className={`${styles.iconGithub} text-gray-700`} />
              Github
            </Link>
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  )
}

export default Contact
