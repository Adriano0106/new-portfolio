const my_hobbies = [
  ["Assistir futebol", '⚽'],
  ["Ver filmes e séries", '📺'],
  ["Games", '🎮'],
  ["Programar / Codar", '💻'],
  ["Ouvir música", '🎧'],
]

const Hobbies = () => {
  return (
    <section id="hobbies-section" style={{ width: "inherit" }} className="px-2 sm:px-6 lg:px-8 scroll-pt-navbar pt-16">
      <h1>Hobbies</h1>
      <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
        {my_hobbies.map((hobbie, index) => (
          <li key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
            <span>{hobbie[1]}</span>
            <span>{hobbie[0]}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Hobbies;
