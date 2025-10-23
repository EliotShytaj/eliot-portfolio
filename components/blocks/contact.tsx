'use client'
import { Section } from '@/components/core/section'
import { site } from '@/config/site'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, Send } from 'lucide-react'

export function Contact() {
  return (
    <Section id="contact" className="bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Open to internships, collaborations, and startup conversations
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Send a Message
            </h3>
            <form action="https://formspree.io/f/your-id" method="POST" className="space-y-4">
              <div>
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="your@email.com" 
                  required 
                  className="h-12 bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700"
                />
              </div>
              <div>
                <Textarea 
                  name="message" 
                  placeholder="Your message..." 
                  required 
                  rows={6}
                  className="bg-white dark:bg-neutral-950 border-neutral-300 dark:border-neutral-700"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-neutral-900 dark:bg-neutral-100 text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200"
              >
                <Send className="h-4 w-4 mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold text-neutral-800 dark:text-neutral-200 mb-6">
              Connect With Me
            </h3>
            <div className="space-y-4">
              <a
                href={site.email}
                className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:shadow-lg transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">Email</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Direct contact</p>
                </div>
              </a>

              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:shadow-lg transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-blue-400">
                  <Linkedin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">LinkedIn</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">Professional network</p>
                </div>
              </a>

              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 hover:shadow-lg transition-all group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-neutral-700 to-neutral-900">
                  <Github className="h-6 w-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">GitHub</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">View my code</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}
