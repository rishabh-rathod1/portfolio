"use client"

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { Github, ExternalLink, Code, Database, Server } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: "Complaint Management System",
      description: "A comprehensive DevOps pipeline project built with Java Spring Boot for complaint tracking with full CI/CD automation.",
      icon: <Server className="h-6 w-6" />,
      technologies: ["Java", "Spring Boot", "Jenkins", "Docker", "Ansible", "H2 Database", "Grafana"],
      features: [
        "REST APIs for complaint tracking",
        "CI/CD pipeline using Jenkins",
        "Containerized builds with Docker",
        "Automated deployment using Ansible",
        "Monitoring with Graphite and Grafana",
        "Quality assurance via JUnit and Postman"
      ],
      github: "#",
      demo: "#"
    },
    {
      title: "AURA - Aquatic Unmanned Research Assistant",
      description: "An advanced underwater ROV with motor control, environmental sensors, and real-time telemetry for aquatic research applications.",
      icon: <Code className="h-6 w-6" />,
      technologies: ["MicroPython", "React", "WebSocket", "IoT", "Embedded Systems"],
      features: [
        "Motor control and environmental sensors",
        "WebSocket communication backend",
        "React-based UI for live control",
        "Real-time telemetry system",
        "Modular architecture design",
        "Optimized underwater performance"
      ],
      github: "#",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Featured Projects</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        {project.icon}
                      </div>
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex space-x-4 pt-4">
                      <Button size="sm" variant="outline" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2" />
                          Code
                        </a>
                      </Button>
                      <Button size="sm" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Demo
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
