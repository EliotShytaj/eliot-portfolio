'use client'
import { Section } from '@/components/core/section'
import { motion } from 'framer-motion'
import { PinContainer } from '@/components/ui/3d-pin'
import Image from 'next/image'

const projects = [
  {
    title: 'BlackScholes.ai',
    description: 'AI-assisted actuarial tooling and graphing for options pricing & risk analysis.',
    href: 'https://www.blackscholes.ai/',
    image: '/projects/blackscholes.png',
  },
  {
    title: 'BandsAI',
    description: 'Intelligent music recommendation and playlist generation powered by AI.',
    href: 'https://bandsai.vercel.app/',
    image: '/projects/bands.png',
  },
  {
    title: 'MarketScout',
    description: 'Real-time market analysis and trading insights platform.',
    href: 'https://github.com/EliotShytaj/marketscout',
    image: '/projects/marketscout.png',
  },
]

export function ProjectsSection() {
  return (
    <Section id="projects" className="overflow-hidden bg-white dark:bg-black">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Building innovative solutions with modern technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <PinContainer title={project.title} href={project.href}>
                <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 w-[20rem] h-[24rem]">
                  <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
                    {project.title}
                  </h3>
                  <div className="text-base !m-0 !p-0 font-normal">
                    <span className="text-slate-500">
                      {project.description}
                    </span>
                  </div>
                  <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden bg-neutral-800 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      width={320}
                      height={320}
                      className="w-full h-full object-contain"
                      unoptimized
                    />
                  </div>
                  <div className="mt-4 px-4 py-2 bg-neutral-700 hover:bg-neutral-600 text-white text-sm font-medium rounded-lg transition-colors text-center">
                    View Project
                  </div>
                </div>
              </PinContainer>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
}
