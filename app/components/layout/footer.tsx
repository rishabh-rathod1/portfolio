"use client"

import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative z-10 py-12 px-4 text-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col items-center gap-4"
      >
        <span className="text-2xl font-bold font-display text-white tracking-tighter">
          rishabh<span className="text-primary">.</span>
        </span>
        <p className="text-sm font-medium text-white/50 flex items-center gap-2 justify-center">
          Built with <Heart className="h-4 w-4 text-primary fill-primary" /> using Next.js & Three.js
        </p>
        <p className="text-xs text-white/30 font-bold uppercase tracking-widest mt-4">
          © {currentYear} All rights reserved.
        </p>
      </motion.div>
    </footer>
  )
}
