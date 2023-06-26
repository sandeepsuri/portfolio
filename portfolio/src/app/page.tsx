import { Navbar } from '@/components/navbar'
import { Home } from '@/components/home'
import { About } from '@/components/about'

export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
    </div>
  )
}
