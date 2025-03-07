import Link from "next/link";

const my_projects = [
  ['😎', "Portfólio", "Você está aqui"],
  ['🏎️', "Formula One Next", "https://adriano-formulaonenext.netlify.app/"],
  ['🏎️', "Formula One Database", "https://github.com/Adriano0106/Formula-One-Database"],
]

const Projects = () => {
  return (
    <section id="projects-section" style={{ width: "inherit" }} className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar pt-16">
      <h1>Projetos</h1>
      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        {my_projects.map((project, index) => (
          <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
            <span>{project[0]}</span>
            {project[2] == 'Você está aqui' ?
              <>
                <span>{project[1]}</span>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded-full dark:bg-blue-900 dark:text-blue-300">Você está aqui</span>
              </>
              :
              <Link href={project[2]} className="project__link">{project[1]}</Link>
            }

          </li>
        ))}
      </ul>
    </section>
  )
}

export default Projects;
