"use client"

import { motion } from 'framer-motion'
import { Award, Trophy, Zap, Users } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Certifications() {
  const certifications = [
    {
      title: "IBM Developer Skills Network",
      subtitle: "DevOps, Agile & Design Thinking",
      year: "2025",
      icon: <Award className="h-6 w-6" />,
      color: "bg-blue-600",
    },
  ]

  const achievements = [
    {
      title: "3rd Place — Gujarat Robofest 4.0",
      subtitle: "National Level Underwater Robotics Competition",
      description: "Secured third place nationally for the AURA ROV prototype — recognized for functional design, real-time implementation, and team collaboration.",
      icon: <Trophy className="h-6 w-6" />,
      color: "bg-orange-500",
    },
  ]

  const extracurricular = [
    {
      role: "Electronics Lead",
      organization: "Campus Robotics Special Team",
      icon: <Zap className="h-6 w-6" />,
      color: "bg-sky-500",
    },
    {
      role: "Technical Member",
      organization: "AI Club",
      icon: <Users className="h-6 w-6" />,
      color: "bg-indigo-500",
    },
  ]

  return (
    <section id="certifications" className="relative py-12 px-4 lg:px-8">
      <div className="w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#121212]/80 backdrop-blur-xl relative overflow-hidden p-8 md:p-16 lg:p-24 shadow-2xl shadow-black/50">
        
        <div className="absolute bottom-[10%] right-[20%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

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
              Credentials & <span className="text-primary">Leadership.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Certifications, achievements, and roles that define my journey
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Certifications */}
            <motion.div variants={fadeUp} className="glass-panel rounded-3xl p-8 hover:border-primary/30 transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6 flex items-center gap-3">
                <Award className="h-5 w-5 text-primary" />
                Certifications
              </h3>
              <div className="space-y-6">
                {certifications.map((cert, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4">
                      <div className={`p-4 rounded-2xl ${cert.color} text-white shrink-0 shadow-lg`}>
                        {cert.icon}
                      </div>
                      <div>
                        <h4 className="font-bold font-display text-white text-lg mb-1">{cert.title}</h4>
                        <p className="text-sm text-white/60 mb-3">{cert.subtitle}</p>
                        <span className="inline-block text-xs font-bold uppercase tracking-wider text-black bg-white px-3 py-1 rounded-full">
                          {cert.year}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Achievement */}
            <motion.div variants={fadeUp} className="glass-panel rounded-3xl p-8 hover:border-primary/30 transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6 flex items-center gap-3">
                <Trophy className="h-5 w-5 text-[#f59e0b]" />
                Achievements
              </h3>
              <div className="space-y-6">
                {achievements.map((ach, index) => (
                  <div key={index} className="group">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`p-4 rounded-2xl ${ach.color} text-white shrink-0 shadow-lg`}>
                        {ach.icon}
                      </div>
                      <div>
                        <h4 className="font-bold font-display text-white text-lg mb-1">{ach.title}</h4>
                        <p className="text-sm font-bold text-primary">{ach.subtitle}</p>
                      </div>
                    </div>
                    <p className="text-sm text-white/70 leading-relaxed bg-white/5 p-4 rounded-2xl border border-white/10">
                      {ach.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Leadership */}
            <motion.div variants={fadeUp} className="glass-panel rounded-3xl p-8 hover:border-primary/30 transition-colors">
              <h3 className="text-sm font-bold uppercase tracking-widest text-white/50 mb-6 flex items-center gap-3">
                <Users className="h-5 w-5 text-sky-500" />
                Leadership
              </h3>
              <div className="space-y-4">
                {extracurricular.map((activity, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 transition-colors"
                  >
                    <div className={`p-3 rounded-xl ${activity.color} text-white shrink-0 shadow-lg`}>
                      {activity.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-base">{activity.role}</h4>
                      <p className="text-sm text-white/50">{activity.organization}</p>
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