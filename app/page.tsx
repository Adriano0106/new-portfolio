import Experience from './components/Experience'
import Hobbies from './components/Hobbie'
import Presentation from './components/Presentation'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div>
      <Presentation />
      <Experience />
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8 flex flex-col-reverse md:flex-row">
        <Skills />
        <Hobbies />
      </div>
    </div>
  )
}
