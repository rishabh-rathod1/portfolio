"use client"

import { useState, useEffect } from 'react'
import { Button } from '../ui/button'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    setMounted(true)

    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = ['about', 'experience', 'projects', 'skills', 'certifications', 'contact']
      for (const section of sections.reverse()) {
        const el = document.getElementById(section)
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(section)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#certifications', label: 'Credentials' },
  ]

  if (!mounted) return null

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 container mx-auto px-4 lg:px-8`}
    >
      <div className={`flex items-center justify-between h-16 md:h-18 px-6 md:px-8 rounded-full transition-all duration-500 ${
        scrolled
          ? 'glass-panel mx-auto max-w-6xl shadow-lg'
          : 'bg-transparent'
      }`}>
        
        {/* Logo - lowercase minimal style from video */}
        <motion.a
          href="#"
          className="relative group"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-xl md:text-2xl font-bold font-display text-white tracking-tighter">
            rishabh<span className="text-primary">.</span>
          </span>
        </motion.a>

        {/* Desktop Navigation - Pill design */}
        <nav className="hidden lg:flex items-center space-x-2">
          <div className="flex items-center p-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === item.href.slice(1)
                    ? 'text-white'
                    : 'text-white/60 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
                {activeSection === item.href.slice(1) && (
                  <motion.div
                    layoutId="activeNavOuter"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>
          
          <div className="ml-4">
            <Button size="default" variant="default" asChild className="rounded-full px-6 text-sm font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20">
              <a href="#contact">Let&apos;s Talk</a>
            </Button>
          </div>
        </nav>

        {/* Mobile menu toggle */}
        <div className="lg:hidden flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-full text-white hover:bg-white/10"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-20 left-4 right-4 glass-panel rounded-2xl p-4 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`block py-3 px-4 text-sm font-bold rounded-xl transition-colors ${
                    activeSection === item.href.slice(1)
                      ? 'text-white bg-white/10'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </motion.a>
              ))}
              <div className="pt-2 mt-2 border-t border-white/10">
                <Button className="w-full rounded-xl font-bold bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20" asChild>
                  <a href="#contact" onClick={() => setIsMenuOpen(false)}>Let&apos;s Talk</a>
                </Button>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  )
}