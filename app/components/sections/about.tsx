"use client"

import { Card, CardContent } from '../ui/card'
import { motion } from 'framer-motion'

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Card className="glass-morphism">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4 gradient-text">Education</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-semibold">B.Tech in Electronics and Computer Engineering</h4>
                      <p className="text-muted-foreground">VIT Chennai • 2023 – 2027</p>
                      <div className="mt-2">
                        <span className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          CGPA: 8.89/10
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I`&apos;`m a passionate pre-final year B.Tech student specializing in Electronics and Computer Engineering 
                at VIT Chennai. My journey in technology is driven by a deep fascination with embedded systems, 
                DevOps practices, and the seamless integration of hardware and software.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in building scalable systems with real-time performance, I`&apos;`ve developed 
                a strong foundation in both theoretical concepts and practical applications. My work spans from 
                MOSFET device simulation using TCAD tools to developing underwater ROVs with real-time telemetry.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                I`&apos;`m particularly interested in the intersection of embedded systems and modern DevOps practices, 
                believing that the future of technology lies in intelligent, connected devices that can be 
                efficiently developed, deployed, and maintained.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
