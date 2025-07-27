"use client"

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { motion } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

export function Certifications() {
  const certifications = [
    {
      provider: "IBM Career Education (IBM Developer Skills Network)",
      certifications: [
        {
          title: "DevOps Fundamentals",
          date: "June 2025",
          link: "#"
        },
        {
          title: "DevOps, Agile & Design Thinking",
          date: "June 2025",
          link: "#"
        }
      ]
    },
    {
      provider: "Deloitte (via Forage)",
      certifications: [
        {
          title: "Cybersecurity Virtual Job Simulation",
          date: "June 2025",
          link: "#"
        },
        {
          title: "Data Analytics Virtual Job Simulation",
          date: "June 2025",
          link: "#"
        }
      ]
    }
  ]

  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Certifications & Virtual Simulations</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {certifications.map((provider, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-morphism h-full">
                  <CardHeader>
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <Award className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-lg">{provider.provider}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {provider.certifications.map((cert, certIndex) => (
                        <div key={certIndex} className="border-l-2 border-primary/30 pl-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <h4 className="font-medium">{cert.title}</h4>
                              <Badge variant="secondary" className="mt-1">
                                {cert.date}
                              </Badge>
                            </div>
                            <a
                              href={cert.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 transition-colors ml-2"
                            >
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </div>
                        </div>
                      ))}
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