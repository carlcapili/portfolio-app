import Navigation from './components/Navigation'
import localfont from 'next/font/local'
import Hero from './components/Hero'
const Georgia = localfont({
  src: './fonts/Georgia.ttf',
})

export default function Home() {
  return (
    <div className={Georgia.className}>
      <Navigation />
      <Hero />
    </div>
  )
}
