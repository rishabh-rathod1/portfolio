"use client"

import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, ChevronRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Experience() {
  const experiences = [
    {
      role: "Research Intern",
      company: "Centre for Nanotechnology and VLSI Design (CNVD)",
      location: "VIT Chennai",
      period: "Jun 2024 – Aug 2024",
      description: "Contributed to research in MOSFET device modeling and performance optimization using industry-standard TCAD simulation tools.",
      highlights: [
        "Conducted TCAD simulations for MOSFET device modeling and performance analysis on Linux systems",
        "Automated result analysis workflows using Python scripting for faster data processing",
        "Assisted in technical documentation and research paper preparation",
      ],
      technologies: ["TCAD Tools", "Python", "Linux", "MOSFET Simulation"],
    },
  ]

  return (
    <section id="experience" className="relative py-12 px-4 lg:px-8">
      <div className="w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#121212]/80 backdrop-blur-xl relative overflow-hidden p-8 md:p-16 lg:p-24 shadow-2xl shadow-black/50">
        
        {/* Subtle radial glow */}
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10"
        >
          {/* Section heading */}
          <motion.div variants={fadeUp} className="mb-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
              Work <span className="text-primary">Experience.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Professional experience contributing to real-world research and engineering
            </p>
          </motion.div>

          {/* Experience cards */}
          <div className="max-w-4xl mx-auto">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="relative"
              >
                {/* Timeline line */}
                <div className="absolute left-[39px] top-16 bottom-[-64px] w-0.5 bg-white/10 hidden md:block" />

                <div className="relative group">
                  {/* Timeline dot */}
                  <div className="absolute left-[29px] top-8 w-6 h-6 rounded-full bg-primary border-[6px] border-[#121212] hidden md:block z-10" />

                  <div className="glass-panel rounded-3xl p-8 md:p-10 md:ml-24 relative hover:border-primary/30 transition-colors">
                    
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-8">
                      <div>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-primary">
                            <Briefcase className="h-6 w-6" />
                          </div>
                          <h3 className="text-2xl font-bold font-display text-white">{exp.role}</h3>
                        </div>
                        <p className="text-primary font-bold text-lg">{exp.company}</p>
                      </div>
                      <div className="flex flex-wrap gap-3 text-sm text-white/50 font-medium">
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full border border-white/5">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-white/70 mb-8 leading-relaxed text-lg">{exp.description}</p>

                    {/* Highlights */}
                    <ul className="space-y-4 mb-8">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-4 text-white/70">
                          <div className="p-1 rounded-full bg-primary/20 text-primary mt-0.5 shrink-0">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="leading-relaxed">{highlight}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-white/10">
                      {exp.technologies.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-white/5 border border-white/10 text-white hover:border-primary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
