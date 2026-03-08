"use client"

import { motion } from 'framer-motion'
import { Header } from './components/layout/header'
import { Hero } from './components/sections/hero'
import { About } from './components/sections/about'
import { Experience } from './components/sections/experience'
import { Projects } from './components/sections/projects'
import { Skills } from './components/sections/skills'
import { Certifications } from './components/sections/certifications'
import { Contact } from './components/sections/contact'
import { Footer } from './components/layout/footer'

export default function Home() {
  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      <Header />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
      <Footer />
    </motion.main>
  )
}