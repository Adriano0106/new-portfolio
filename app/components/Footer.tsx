import Link from "next/link"
import styles from './../styles/footer.module.css'
import { FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <section id="footer-section" style={{ backgroundColor: "#eee" }}>
      <div style={{ height: "50px" }} className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-center">
        <div className="flex text-center justify-center	" style={{ top: "15px", position: "relative" }}>
          <p className={styles.development}>
            Desenvolvido por:
          </p>
          <Link href="https://github.com/Adriano0106"
            className={styles.porfolioGithub}
            target="_blank"
          >Adriano Andrade da Silva <FaGithub className={styles.iconGithub}/>
          </Link>

        </div>
      </div>
    </section>
  )
}

export default Footer;
