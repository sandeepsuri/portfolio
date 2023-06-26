import { Navbar } from '@/components/navbar'
import { Home } from '@/components/home'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'

export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
    </div>
  )
}
