const my_skills = [
  ["JavaScript", 95],
  ["TypeScript", 70],
  ["ReactJS", 80],
  ["NextJS", 70],
  ["NodeJS", 70],
  ["Ruby", 75],
  ["Ruby on Rails", 70],
  ["Git", 75],
  ["Bootstrap", 80],
  ["Sass (SCSS)", 80],
  ["CSS", 100],
  ["HTML", 100],
]

const Skills = () => {
  return (
    <section id="skills-section" style={{ height: "800px" }} className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 scroll-pt-navbar pt-16">
      <h1>Skills</h1>
      <div>
      {my_skills.map((skill) => (
        <div key={skill[0].toString().toLocaleLowerCase()}>
          <div className="mb-1 text-base font-medium text-gray-700 dark:text-gray-500">{skill[0]}</div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 dark:bg-gray-700">
            <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: skill[1] + '%' }}></div>
          </div>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Skills;
