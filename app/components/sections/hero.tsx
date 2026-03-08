"use client"

import { Button } from '../ui/button'
import { Download, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { TypeAnimation } from 'react-type-animation'
import dynamic from 'next/dynamic'

const Scene3D = dynamic(() => import('../ui/scene3d').then(mod => ({ default: mod.Scene3D })), {
  ssr: false,
  loading: () => null,
})

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
}

export function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-12 px-4 lg:px-8 flex flex-col">
      {/* Boxed Hero Container */}
      <div className="flex-1 w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#121212]/80 backdrop-blur-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 lg:p-16 shadow-2xl shadow-black/50">
        
        {/* Subtle radial glow behind everything */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        {/* Left Content - Text and CTA */}
        <div className="w-full md:w-[55%] relative z-20 flex flex-col justify-center h-full">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {/* Intro text */}
            <motion.p variants={fadeUp} className="text-xl md:text-2xl text-white/80 font-medium mb-2">
              Hey, I am <span className="text-white font-bold">Rishabh Rathod</span>
            </motion.p>

            {/* Main heading with animated role */}
            <motion.div variants={fadeUp} className="mb-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold font-display text-white leading-[1.05] tracking-tight">
                <TypeAnimation
                  sequence={[
                    'Software',
                    2000,
                    'Electronics',
                    2000,
                    'Embedded',
                    2000,
                    'Cloud',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient-x"
                />
                <br/>
                <span className="text-white">Engineer</span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="text-lg text-white/60 max-w-md mb-10 leading-relaxed"
            >
              I build scalable web applications, embedded IoT systems, and high‑performance backend architectures.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={fadeUp} className="flex items-center gap-4 flex-wrap">
              <Button size="lg" className="h-14 px-8 text-base">
                Hire me
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="h-14 px-8 text-base border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <a href="https://drive.google.com/file/d/1ChkWfLIGDYtGhE4nMnOnz1Y7LY-aiF_w/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Right Side: 3D Canvas with Character */}
        <div className="w-full md:w-[45%] h-[500px] md:h-[700px] relative z-10 mt-8 md:mt-0">
          <div className="absolute inset-0">
            <Scene3D />
          </div>
        </div>
      </div>
    </section>
  )
}