import Image from "next/image";

const my_skills = [
  ["JavaScript", "/techs/js.png"],
  ["TypeScript", "/techs/ts.png"],
  ["ReactJS", "/techs/react.png"],
  ["NextJS", "/techs/next.png"],
  ["NodeJS", "/techs/node.png"],
  ["Ruby", "/techs/ruby.png"],
  ["Ruby on Rails", "/techs/rails.png"],
  ["Git", "/techs/git.png"],
  ["Bootstrap", "/techs/bootstrap.png"],
  ["Sass (SCSS)", "/techs/sass.png"],
  ["CSS", "/techs/css.png"],
]

const Skills = () => {
  return (
    <section id="skills-section" style={{ height: "800px", width: "inherit" }} className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar pt-16">
      <h1>Skills</h1>


      {/* <div>
      {my_skills.map((skill) => (
        <div key={skill[0].toString().toLocaleLowerCase()}>
          <div className="mb-1 text-base font-medium text-gray-700 dark:text-gray-500">{skill[0]}</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: skill[1] + '%' }}></div>
          </div>
        </div>
      ))}
      </div> */}

      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        {my_skills.map((skill, index) => (
          <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
            <span>
              <Image
                src={skill[1]}
                width={20}
                height={20}
                alt="Picture tecnology"
                className="skills__picture"
              // style={{ borderRadius: "50%" }}
              />
            </span>
            <span>{skill[0]}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Skills;
