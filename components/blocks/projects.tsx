'use client'
import { Section } from '@/components/core/section'
import { projects } from '@/config/content'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { motion } from 'framer-motion'
import { ExternalLink, Code2, Sparkles } from 'lucide-react'

const ProjectIcon = ({ index }: { index: number }) => {
  const icons = [Code2, Sparkles, ExternalLink]
  const Icon = icons[index % icons.length]
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-neutral-200 dark:from-neutral-800 to-neutral-300 dark:to-neutral-900">
      <Icon className="h-5 w-5 text-neutral-700 dark:text-neutral-300" />
    </div>
  )
}

export function Projects() {
  return (
    <Section id="projects" className="bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            A few things I've shipped or am building with modern tech stacks
          </p>
        </motion.div>
        
        <BentoGrid className="max-w-6xl mx-auto">
          {projects.map((project, idx) => (
            <motion.a
              key={project.title}
              href={project.href ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className={idx === 0 ? "md:col-span-2" : ""}
            >
              <BentoGridItem
                title={project.title}
                description={project.blurb}
                header={
                  <div className="flex h-full min-h-[6rem] w-full items-center justify-center rounded-lg bg-gradient-to-br from-neutral-200 dark:from-neutral-900 to-neutral-300 dark:to-neutral-800">
                    <div className="text-neutral-500 dark:text-neutral-400">
                      <ExternalLink className="h-8 w-8" />
                    </div>
                  </div>
                }
                icon={<ProjectIcon index={idx} />}
                tags={project.tags}
                className="hover:shadow-2xl border-neutral-200 dark:border-neutral-800"
              />
            </motion.a>
          ))}
        </BentoGrid>
      </div>
    </Section>
  )
}
