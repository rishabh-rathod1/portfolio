"use client"

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { motion } from 'framer-motion'
import { Trophy, Users, Zap } from 'lucide-react'

export function Achievements() {
  const achievements = [
    {
      title: "Gujarat Robofest 4.0 – Underwater Robotics",
      position: "3rd Place Nationally",
      year: "2024",
      description: "Secured third place nationally for presenting the AURA ROV prototype. Recognized for functional design, real-time implementation, and collaboration.",
      icon: <Trophy className="h-6 w-6" />
    }
  ]

  const extracurricular = [
    {
      role: "Electronics Lead",
      organization: "Campus Robotics Special Team",
      icon: <Zap className="h-5 w-5" />
    },
    {
      role: "Member",
      organization: "AI Club – Participated in hands-on technical workshops and peer-led projects",
      icon: <Users className="h-5 w-5" />
    }
  ]

  return (
    <section id="achievements" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">Achievements & Leadership</h2>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Trophy className="h-6 w-6 text-primary" />
                    <span>Achievements</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {achievements.map((achievement, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{achievement.title}</h4>
                          <div className="flex items-center space-x-2 mt-1">
                            <Badge className="bg-yellow-500/10 text-yellow-600 dark:text-yellow-400">
                              {achievement.position}
                            </Badge>
                            <Badge variant="secondary">{achievement.year}</Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>

            {/* Extracurricular */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="glass-morphism h-full">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Users className="h-6 w-6 text-primary" />
                    <span>Leadership & Involvement</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {extracurricular.map((activity, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                          {activity.icon}
                        </div>
                        <div>
                          <h4 className="font-medium">{activity.role}</h4>
                          <p className="text-sm text-muted-foreground">{activity.organization}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
