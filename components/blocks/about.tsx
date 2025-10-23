'use client'
import { Section } from '@/components/core/section'
import { motion } from 'framer-motion'
import { Code2, Brain, Shield, TrendingUp } from 'lucide-react'

const skills = [
  { name: 'TypeScript, React/Next.js', icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { name: 'Java/Spring, Python/FastAPI', icon: Brain, color: 'from-purple-500 to-pink-500' },
  { name: 'Trading Dashboards', icon: TrendingUp, color: 'from-green-500 to-emerald-500' },
  { name: 'Security & Actuarial', icon: Shield, color: 'from-orange-500 to-red-500' },
]

export function About() {
  return (
    <Section id="about" className="bg-white dark:bg-black">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            About Me
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 leading-relaxed mb-12 text-center"
          >
            I'm a CS & Applied Math/Stats student at Stony Brook focused on AI‑native product design, 
            clean front‑end engineering, and practical ML.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 p-6 hover:shadow-xl transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${skill.color}`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <p className="text-lg font-medium text-neutral-800 dark:text-neutral-200">
                      {skill.name}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
