import Experience from './components/Experience'
import Hobbies from './components/Hobbie'
import Presentation from './components/Presentation'
import Projects from './components/Projects'
import Skills from './components/Skills'

export default function Home() {
  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>
      <Presentation />
      <Experience />
      <div className="w-full flex flex-col-reverse md:flex-row pb-1">
        <Skills />
        <Hobbies />
        <Projects />
      </div>
    </div>
  )
}
