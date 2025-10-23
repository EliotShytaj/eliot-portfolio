'use client'
import { Section } from '@/components/core/section'
import { experience } from '@/config/content'
import { Timeline } from '@/components/ui/timeline'
import { motion } from 'framer-motion'

export function Experience() {
  const timelineData = experience.map((e: any) => ({
    title: e.period,
    content: (
      <div>
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200 mb-2">
            {e.org}
          </h3>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 font-medium">
            {e.role}
          </p>
          {e.location && (
            <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
              {e.location}
            </p>
          )}
        </div>
        <div className="grid gap-4">
          {e.points.map((pt: string, idx: number) => (
            <motion.div
              key={pt}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="flex gap-3 items-start"
            >
              <div className="mt-1.5 h-2 w-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0" />
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                {pt}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  }))

  return (
    <Section id="experience" className="overflow-hidden bg-white dark:bg-black">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            Experience
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            My journey in software development and technology
          </p>
        </motion.div>
        
        <Timeline data={timelineData} />
      </div>
    </Section>
  )
}
