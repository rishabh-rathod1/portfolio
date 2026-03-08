"use client"

import { Button } from '../ui/button'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowUpRight, CheckCircle } from 'lucide-react'
import { useState } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setIsSubmitting(true)
    // FormSubmit will handle the redirect, so we just need to show loading state
    setTimeout(() => {
      setIsSubmitting(false)
    }, 1000)
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "rishabhrathod418@gmail.com",
      href: "mailto:rishabhrathod418@gmail.com",
      color: "bg-blue-600",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9399907815",
      href: "tel:+919399907815",
      color: "bg-emerald-600",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Chennai, India",
      href: "#",
      color: "bg-orange-500",
    },
  ]

  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, label: "GitHub", href: "https://github.com/rishabh-rathod1" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "https://www.linkedin.com/in/rishabh-rathod-4892b124a/" },
  ]

  return (
    <section id="contact" className="relative py-12 px-4 lg:px-8">
      <div className="w-full max-w-7xl mx-auto rounded-[2.5rem] md:rounded-[3rem] border border-white/10 bg-[#121212]/80 backdrop-blur-xl relative overflow-hidden p-8 md:p-16 lg:p-24 shadow-2xl shadow-black/50">
        
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -translate-y-1/2" />

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
              Get In <span className="text-primary">Touch.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              I am always open to discussing new opportunities, projects, and collaborations
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 max-w-6xl mx-auto">
            {/* Left: Contact info */}
            <motion.div variants={fadeUp} className="lg:col-span-2 space-y-10">
              {/* Contact cards */}
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-5 p-5 rounded-3xl glass-panel group hover:border-primary/40 transition-all"
                  >
                    <div className={`p-4 rounded-2xl ${info.color} text-white shrink-0 shadow-lg`}>
                      {info.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold text-white/50 uppercase tracking-widest mb-1">{info.label}</p>
                      <p className="text-base font-bold text-white truncate">{info.value}</p>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-white/30 group-hover:text-primary ml-auto shrink-0 transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Social links */}
              <div className="glass-panel p-6 rounded-3xl text-center">
                <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">Connect on Socials</h4>
                <div className="flex justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 rounded-full bg-white/5 border border-white/10 text-white hover:text-primary hover:bg-white/10 hover:border-primary/30 transition-all shadow-lg"
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right: Contact form with FormSubmit */}
            <motion.div variants={fadeUp} className="lg:col-span-3">
              <div className="glass-panel rounded-[2rem] p-8 lg:p-12 hover:border-primary/20 transition-colors">
                <h3 className="text-3xl font-bold font-display text-white mb-8">Send a Message</h3>
                
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                    <h4 className="text-2xl font-bold text-white mb-2">Message Sent!</h4>
                    <p className="text-white/60">Thank you for reaching out. I'll get back to you soon.</p>
                  </motion.div>
                ) : (
                  <form 
                    action="https://formsubmit.co/rishabhrathod418@gmail.com" 
                    method="POST"
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_subject" value="New Portfolio Contact!" />
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_next" value={typeof window !== 'undefined' ? `${window.location.origin}#contact` : ''} />
                    
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-bold mb-3 text-white/70">
                          Name
                        </label>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          required
                          className="w-full px-5 py-4 bg-[#121212]/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder:text-white/30 font-medium"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-bold mb-3 text-white/70">
                          Email
                        </label>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          required
                          className="w-full px-5 py-4 bg-[#121212]/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all text-white placeholder:text-white/30 font-medium"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-bold mb-3 text-white/70">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        required
                        rows={5}
                        className="w-full px-5 py-4 bg-[#121212]/50 border border-white/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none text-white placeholder:text-white/30 font-medium"
                        placeholder="Tell me about your project or opportunity..."
                      />
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-full text-base font-bold shadow-primary/25 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-5 w-5 mr-3" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}