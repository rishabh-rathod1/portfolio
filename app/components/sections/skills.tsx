"use client"

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { motion } from 'framer-motion'
import { Code, Globe, Settings, Cpu } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6" />,
      skills: ["C/C++", "Java", "Python", "MicroPython", "JavaScript"]
    },
    {
      title: "Web Development",
      icon: <Globe className="h-6 w-6" />,
      skills: ["React JS", "HTML/CSS", "RESTful APIs", "WebSocket"]
    },
    {
      title: "DevOps & Tools",
      icon: <Settings className="h-6 w-6" />,
      skills: ["Git", "Linux", "Jenkins", "Docker", "Ansible", "Maven", "JUnit", "Postman", "Graphite", "Grafana"]
    },
    {
      title: "Specialized Domains",
      icon: <Cpu className="h-6 w-6" />,
      skills: ["Embedded Systems", "IoT", "CI/CD", "PCB Design", "TCAD Tools"]
    }
  ]

  return (
    <section id="skills" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Technical Skills</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism h-full">
                  <CardHeader className="text-center">
                    <div className="mx-auto p-3 bg-primary/10 rounded-lg text-primary w-fit">
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="text-sm text-muted-foreground text-center py-1 px-2 bg-background/50 rounded"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
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