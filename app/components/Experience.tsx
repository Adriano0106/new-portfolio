import Image from "next/image";

const jobs = [
  {
    name: 'Gigaservices',
    description: 'Desenvolvimento de layout dos projetos feitos em Ruby on Rails.',
    role: 'Trainee',
    imageUrl:
      '/gigaservices-logo.png',
    time: '2018 - 2020',
    lastSeenDateTime: '2023-01-23T13:23Z',
    techs: [
      "Ruby on Rails",
      "Ruby",
      "JavaScript",
      "PostgreSQL",
      "Git",
      "Bootstrap",
      "CSS",
      "HTML",
    ]
  },
  {
    name: 'UOL',
    description: 'Criação e consultas de APIs para serem utilizadas nas peças publicitárias e em serviços internos. \n Desenvolvimento de peças publicitárias. \n Lógica para definir qual campanha publicitária estará apta a ser exibida com base no usuário que está acessando enviando parâmetros para o AdServer que será utilizado. \n  Gerenciamento de liberação de acesso via Oracle de sistemas da empresa.',
    role: 'Desenvolvedor Full Stack',
    imageUrl:
      '/logo-uol.png',
    time: '2020 - atualmente',
    lastSeenDateTime: '2023-01-23T13:23Z',
    techs: [
      "JavaScript",
      "TypeScript",
      "ReactJS",
      "NextJS",
      "NodeJs",
      "Git",
      "Oracle",
      "Bootstrap",
      "Sass (Scss)",
      "CSS",
      "HTML",
    ]
  }
]

const Experience = () => {
  const reversedJobs = [...jobs].reverse();
  return (
    <section id="experience-section" style={{ height: "auto" }} className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar pt-16">
      <h1>Experiência</h1>

      <ul role="list" className="divide-y divide-gray-100">
        {reversedJobs.map((job) => (
          <li key={job.description} className="flex justify-between gap-x-6 py-5">
            <div className="flex min-w-0 gap-x-4">
              <Image
                src={job.imageUrl}
                width={100}
                height={100}
                alt=""
                className="h-12 w-12 flex-none rounded-full bg-gray-50"
                style={{ borderRadius: "50%" }}
              />
              <div className="min-w-0 flex-auto">
                <p className="text-sm font-semibold leading-6 text-gray-900">{job.name}</p>
                <p className="mt-1 text-sm leading-5 text-gray-500 display-linebreak">{job.description}</p>
                <br />

                <p className="text-sm font-semibold leading-6 text-gray-900">Tecnologias Utilizadas</p>
                {job.techs.map((t, i) => (
                  <p key={i} className="text-sm font-light leading-6 text-gray-900">{t}</p>
                ))}
              </div>
            </div>
            <div className="shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{job.role}</p>
              <p className="mt-1 text-xs leading-5 text-gray-500">
                <time dateTime={job.lastSeenDateTime}>{job.time}</time>
              </p>
            </div>
          </li>
        ))}
      </ul>

    </section>
  )
}

export default Experience;
