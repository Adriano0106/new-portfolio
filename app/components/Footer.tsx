import Link from "next/link"
import styles from './../styles/footer.module.css'

const Footer = () => {
  return (
    <section id="footer-section" style={{ backgroundColor: "#eee" }}>
      <div style={{ height: "50px" }} className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center">
        <div className="flex text-center justify-center	" style={{ top: "15px", position: "relative" }}>
          <p className={styles.development}>
            Desenvolvido por:
          </p>
          <Link href="https://github.com/Adriano0106">&nbsp;Adriano Andrade da Silva &nbsp;
            {/* <a className="" target="_blank">&nbsp;Adriano Andrade da Silva &nbsp;<FaGithub /></a> */}
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Footer;
