import Image from "next/image"

const my_skills = [
  ["JavaScript", "/techs/js.png"],
  ["TypeScript", "/techs/ts.png"],
  ["ReactJS", "/techs/react.png"],
  ["NextJS", "/techs/next.jpg"],
  ["NodeJS", "/techs/node.png"],
  ["Ruby", "/techs/ruby.png"],
  ["Ruby on Rails", "/techs/rails.png"],
  ["Git", "/techs/git.png"],
  ["Bootstrap", "/techs/bootstrap.png"],
  ["Sass (SCSS)", "/techs/sass.png"],
  ["CSS", "/techs/css.png"],
  ["SQL", "/techs/sql.jpg"],
  ["Rest API", "/techs/api_rest.jpg"],
  ["Responsive Design", "/techs/responsive_design.jpg"],
]

const Skills = () => {
  return (
    <section
      id="skills-section"
      style={{ width: "inherit" }}
      className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar py-4"
    >
      <h1>Skills</h1>

      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        {my_skills.map((skill, index) => (
          <li
            key={index}
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
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

export default Skills
