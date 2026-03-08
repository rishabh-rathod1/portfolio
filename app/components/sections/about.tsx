"use client"

import { motion } from 'framer-motion'
import { GraduationCap, MapPin, Calendar, Award, Code, Cpu } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const stats = [
  { value: "5+", label: "Projects", icon: <Code className="h-5 w-5" /> },
  { value: "10+", label: "Technologies", icon: <Cpu className="h-5 w-5" /> },
  { value: "3+", label: "Certifications", icon: <Award className="h-5 w-5" /> },
]

const education = [
  {
    degree: "B.Tech in Electronics and Computer Engineering",
    school: "VIT Chennai",
    period: "2023 – 2027",
    grade: "CGPA: 9.07 / 10",
    current: true,
  },
  {
    degree: "Class XII — Gayatri Shiksha Niketan",
    school: "Khargone",
    period: "2022 – 2023",
    grade: "Percentage: 87.4%",
    current: false,
  },
  {
    degree: "Class X — St. Jude's Hr. Sec. School",
    school: "Khargone",
    period: "2020 – 2021",
    grade: "Percentage: 94.2%",
    current: false,
  },
]

export function About() {
  return (
    <section id="about" className="relative py-12 px-4 lg:px-8">
      <div className="w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#121212]/80 backdrop-blur-xl relative overflow-hidden p-8 md:p-16 lg:p-24 shadow-2xl shadow-black/50">
        
        {/* Subtle radial glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10"
        >
          {/* Section heading */}
          <motion.div variants={fadeUp} className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
              About <span className="text-primary">Me.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl">
              A driven engineering student passionate about building real-world systems
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Left: About text + stats */}
            <motion.div variants={fadeUp} className="space-y-10">
              <div className="space-y-6 text-white/70 leading-relaxed text-lg">
                <p>
                  I am a <span className="text-white font-bold">pre-final year B.Tech student</span> specializing
                  in Electronics and Computer Engineering at VIT Chennai. My passion lies at the intersection of
                  software engineering and embedded systems.
                </p>
                <p>
                  Experienced in developing scalable web applications using <span className="text-white font-bold">Java and Python</span>,
                  designing RESTful APIs, integrating databases, and implementing CI/CD pipelines.
                  I am interested in building efficient, maintainable, and production-ready software systems.
                </p>
                <p>
                  Beyond software, I have worked on IoT safety platforms with ESP32 wearables,
                  AI-based crop disease detection systems, and even built an underwater ROV that secured
                  <span className="text-primary font-bold"> 3rd place at Gujarat Robofest 4.0</span>.
                </p>
              </div>

              {/* Stats - Playful floating cards */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5 }}
                    className="glass-panel rounded-2xl p-6 text-center"
                  >
                    <div className="flex justify-center mb-3 text-primary">{stat.icon}</div>
                    <div className="text-3xl font-bold font-display text-white mb-1">{stat.value}</div>
                    <div className="text-xs text-white/50 font-bold uppercase tracking-wider">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Education timeline */}
            <motion.div variants={fadeUp} className="relative">
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-primary">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="text-3xl font-bold font-display text-white">Education</h3>
              </div>

              <div className="relative border-l-2 border-white/10 pl-8 space-y-10 ml-4">
                {education.map((edu, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="relative group cursor-default"
                  >
                    {/* Timeline dot */}
                    <div className={`absolute -left-[41px] top-2 w-5 h-5 rounded-full border-4 transition-colors ${
                      edu.current
                        ? 'bg-primary border-[#121212]'
                        : 'bg-white/20 border-[#121212] group-hover:bg-primary group-hover:border-primary/30'
                    }`} />

                    <div className="glass-panel rounded-2xl p-6">
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <h4 className="font-bold text-white text-lg leading-snug">{edu.degree}</h4>
                        {edu.current && (
                          <span className="shrink-0 text-[10px] font-bold uppercase tracking-widest text-black bg-primary px-3 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-white/50 mb-3">
                        <span className="flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {edu.school}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </span>
                      </div>
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/80 text-sm font-medium">
                        {edu.grade}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}