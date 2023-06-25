import { Navbar } from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1 className='text-2xl font-bold'>Hello World</h1>
    </div>
  )
}
