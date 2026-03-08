"use client"

import { motion } from 'framer-motion'
import { Code, Globe, Database, Settings, Cpu } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const skillCategories = [
  {
    title: "Languages",
    icon: <Code className="h-6 w-6" />,
    color: "bg-blue-600",
    skills: ["Java", "Python", "C", "C++"],
  },
  {
    title: "Frameworks & Tech",
    icon: <Globe className="h-6 w-6" />,
    color: "bg-orange-600",
    skills: ["Spring Boot", "Flask", "FastAPI", "REST", "WebSockets", "JPA/Hibernate"],
  },
  {
    title: "Databases",
    icon: <Database className="h-6 w-6" />,
    color: "bg-emerald-600",
    skills: ["MySQL", "H2", "MongoDB"],
  },
  {
    title: "DevOps & Tools",
    icon: <Settings className="h-6 w-6" />,
    color: "bg-[#eab308]",
    skills: ["Git", "Linux", "Jenkins", "Docker", "Maven", "Ansible", "Grafana", "JUnit"],
  },
  {
    title: "Core Concepts",
    icon: <Cpu className="h-6 w-6" />,
    color: "bg-slate-700",
    skills: ["Data Structures", "Algorithms", "DBMS", "OS", "System Design", "IoT"],
  },
]

export function Skills() {
  return (
    <section id="skills" className="relative py-12 px-4 lg:px-8">
      <div className="w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#121212]/80 backdrop-blur-xl relative overflow-hidden p-8 md:p-16 lg:p-24 shadow-2xl shadow-black/50">
        
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          className="relative z-10"
        >
          {/* Section heading */}
          <motion.div variants={fadeUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-4 tracking-tight">
              Technical <span className="text-primary">Skills.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Technologies and tools I work with to build robust, scalable systems
            </p>
          </motion.div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="glass-panel rounded-3xl overflow-hidden hover:border-primary/30 transition-colors"
              >
                <div className="p-8">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-2xl ${category.color} text-white shadow-lg`}>
                      {category.icon}
                    </div>
                    <h3 className="font-bold font-display text-xl text-white">{category.title}</h3>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 text-sm font-bold rounded-full bg-white/5 text-white/80 border border-white/10 hover:border-primary/40 hover:bg-primary/10 hover:text-white transition-all cursor-default"
                      >
                        {skill}
                      </motion.span>
                    ))}
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