import { Header } from './components/layout/header'
import { Hero } from './components/sections/hero'
import { About } from './components/sections/about'
// import { Experience } from './components/sections/experience'
import { Projects } from './components/sections/projects'
import { Skills } from './components/sections/skills'
import { Certifications } from './components/sections/certifications'
import { Achievements } from './components/sections/achievements'
import { Contact } from './components/sections/contact'
import { Footer } from './components/layout/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      {/* <Experience /> */}
      <Projects />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
      <Footer />
    </main>
  )
}