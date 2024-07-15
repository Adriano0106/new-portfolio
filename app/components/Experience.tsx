import Image from "next/image";

const jobs = [
  {
    name: 'Gigaservices',
    description: 'Atendimento ao cliente \n, desenvolvimento de layout nas Views e novas funcionalidades nas classes dos projetos feitos em Ruby on Rails.',
    role: 'Trainee',
    imageUrl:
      '/gigaservices-logo.png',
    time: '2018 - 2020',
    lastSeenDateTime: '2023-01-23T13:23Z',
    techs: [
      "Ruby on Rails",
      "JavaScript",
      "PostgreSQL",
      "Bootstrap",
      "CSS",
      "HTML",
    ]
  },
  {
    name: 'UOL',
    description: 'Desenvolvimento de peças publicitárias e lógica para definir qual campanha publicitária estará apta a ser exibida com base no usuário que está acessando se comunicando com o Ad Server da companhia. Consultas de APIs que retornam JSONs para utilizar os dados retornados nas peças publicitárias. Consulta e liberação de acesso (BD Oracle) para que os usuários possam utilizar o sistema que gerencia as publicidades do UOL e sites parceiros.',
    role: 'Desenvolvedor Full Stack',
    imageUrl:
      '/logo-uol.png',
    time: '2020 - atualmente',
    lastSeenDateTime: '2023-01-23T13:23Z',
    techs: [
      "Ruby on Rails",
      "JavaScript",
      "PostgreSQL",
      "Bootstrap",
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
                <p className="mt-1 text-sm leading-5 text-gray-500">{job.description}</p>
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
