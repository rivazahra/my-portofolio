import { ReactLenis } from 'lenis/react'
import { Header, Hero, About, Skills } from './components'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Work from './components/Work'


// register gsap scroll;

function App() {
 
  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  )
}

export default App
