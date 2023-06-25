import { Navbar } from '@/components/navbar'
import { Home } from '@/components/home'

export default function Main() {
  return (
    <div>
      <Navbar />
      <Home />
      <h1 className='text-2xl font-bold'>Hello World</h1>
    </div>
  )
}
