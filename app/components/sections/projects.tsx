"use client"


import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { Github, Shield, Leaf, Server, Anchor, Terminal, ChevronRight } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Projects() {
  const projects = [
    {
      title: "HotReload",
      subtitle: "Production-Grade Hot-Reload CLI for Go",
      description: "A zero-dependency hot-reload CLI that watches your source tree, cancels in-progress builds on save, recompiles, and restarts your server — typically in under a second.",
      icon: <Terminal className="h-7 w-7" />,
      color: "bg-slate-700",
      technologies: ["Go", "fsnotify", "CLI", "Cross-Platform", "SIGTERM"],
      features: [
        "Instant rebuild within 300ms of last save",
        "Build cancellation immediately on new save",
        "Recursive watching including runtime new folders",
        "Crash-loop protection and backoff",
        "Graceful shutdown with 3-second drain window",
        "Build error diffing on repeated failures",
        "Health-check probing via URL",
        "Desktop notifications natively via OS",
      ],
      github: "https://github.com/rishabh-rathod1",
      category: "Developer Tool",
    },
    {
      title: "GUARD",
      subtitle: "Guided User Action and Risk Detection System",
      description: "A distributed IoT safety platform with ESP32-based wearables, WiFi-enabled BLE anchor nodes, and a centralized Python monitoring server for factory safety.",
      icon: <Shield className="h-7 w-7" />,
      color: "bg-blue-600",
      technologies: ["ESP32", "Python", "REST APIs", "BLE", "WiFi", "IoT"],
      features: [
        "Distributed IoT platform with ESP32-based wearables",
        "RSSI-based proximity detection for worker-safety",
        "Python GUI dashboard tracking live telemetry",
        "Modular architecture separating telemetry & sensors",
      ],
      github: "https://github.com/rishabh-rathod1",
      category: "IoT Platform",
    },
    {
      title: "LeafSmart",
      subtitle: "AI-Based Crop Disease Prediction Web App",
      description: "A full-stack web application for crop disease detection using CNN-based image classification with pretrained deep learning models.",
      icon: <Leaf className="h-7 w-7" />,
      color: "bg-emerald-600",
      technologies: ["Python", "Flask", "FastAPI", "CNN", "Docker"],
      features: [
        "Full-stack crop disease detection system",
        "RESTful APIs for model inference routing",
        "Integrated MobileNet/ResNet models",
        "Containerized using Docker for production",
      ],
      github: "https://github.com/rishabh-rathod1",
      category: "AI / ML",
    },
    {
      title: "Complaint Mgmt",
      subtitle: "Enterprise DevOps Pipeline",
      description: "A comprehensive DevOps pipeline project built with Java Spring Boot featuring automated builds, containerized deployment, and full monitoring.",
      icon: <Server className="h-7 w-7" />,
      color: "bg-[#eab308]", // Yellow
      technologies: ["Java", "Spring Boot", "MySQL", "Jenkins", "Grafana"],
      features: [
        "REST APIs using Java Spring Boot (JPA/Hibernate)",
        "MySQL/H2 integration for data persistence",
        "CI/CD pipeline using Git, Jenkins, and Docker",
        "Monitoring via Graphite and Grafana",
      ],
      github: "https://github.com/rishabh-rathod1/cms-pipeline",
      category: "DevOps",
    },
    {
      title: "AURA ROV",
      subtitle: "Aquatic Unmanned Research Assistant",
      description: "An advanced underwater ROV with real-time control, sensor telemetry, and live 1080p video streaming. Built for national competition.",
      icon: <Anchor className="h-7 w-7" />,
      color: "bg-sky-500",
      technologies: ["React", "Python", "Flask", "WebSocket", "RP2040"],
      features: [
        "React frontend + Python backend on Raspberry Pi",
        "WebSocket comms for commands & 1080p video",
        "Routing commands to dual RP2040 MCUs",
        "PID stabilization using real-time IMU data",
      ],
      github: "https://github.com/rishabh-rathod1/AURA-Nexus",
      category: "Robotics",
      achievement: "🏆 3rd Place — Gujarat Robofest 4.0",
    },
  ]

  return (
    <section id="projects" className="relative py-12 px-4 lg:px-8">
      <div className="w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#121212]/80 backdrop-blur-xl relative overflow-hidden p-8 md:p-16 lg:p-24 shadow-2xl shadow-black/50">
        
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

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
              Featured <span className="text-primary">Projects.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl">
              From developer tools to IoT safety systems — here is what I have been building
            </p>
          </motion.div>

          {/* Projects grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className={`group ${index === 0 ? 'lg:col-span-2' : ''}`}
              >
                <div className="glass-panel rounded-3xl overflow-hidden h-full flex flex-col border border-white/10 hover:border-primary/40 transition-all duration-300">
                  <div className="p-8 lg:p-10 flex-1 flex flex-col">
                    {/* Title area */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
                      <div className="flex items-start gap-5">
                        <div className={`p-4 rounded-2xl ${project.color} text-white shrink-0 shadow-lg`}>
                          {project.icon}
                        </div>
                        <div>
                          <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold font-display text-white">{project.title}</h3>
                            <span className="text-[10px] font-bold uppercase tracking-widest text-[#121212] bg-white px-3 py-1 rounded-full">
                              {project.category}
                            </span>
                          </div>
                          <p className="text-base text-white/60 font-medium">{project.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Achievement badge */}
                    {project.achievement && (
                      <div className="mb-6">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-bold border border-primary/30 shadow-lg shadow-primary/10">
                          {project.achievement}
                        </span>
                      </div>
                    )}

                    {/* Description */}
                    <p className="text-white/80 text-base leading-relaxed mb-6">{project.description}</p>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-white/5 border border-white/10 text-white/80">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Features List */}
                    <ul className={`space-y-3 mb-8 flex-1 ${index === 0 ? 'grid md:grid-cols-2 gap-x-8 gap-y-3 space-y-0' : ''}`}>
                      {project.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3 text-sm text-white/60">
                          <div className="p-1 rounded-full bg-white/10 text-white mt-0.5 shrink-0">
                            <ChevronRight className="h-3 w-3" />
                          </div>
                          <span className="leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Actions */}
                    <div className="flex gap-4 pt-6 border-t border-white/10">
                      <Button size="sm" variant="outline" asChild className="rounded-full flex-1 md:flex-none">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          View Source
                        </a>
                      </Button>
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
