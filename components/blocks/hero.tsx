'use client'
import { motion } from 'framer-motion'
import { site } from '@/config/site'
import { Spotlight } from '@/components/ui/spotlight'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import { FlipWords } from '@/components/ui/flip-words'
import { FloatingDock } from '@/components/ui/floating-dock'
import { ArrowRight, Github, Linkedin, FileText } from 'lucide-react'
import { AlgorithmVisualizer } from '@/components/ui/algorithm-visualizer'
import {
  IconBrandPython,
  IconBrandAws,
  IconBrandTypescript,
  IconDatabase,
  IconBrandReact,
  IconBrandJavascript,
  IconBrandCpp,
  IconBrandNodejs,
  IconBrandGit,
} from '@tabler/icons-react'

const TechStackDock = () => {
  const techStack = [
    {
      title: "Python",
      icon: <IconBrandPython className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Java",
      icon: <IconBrandJavascript className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "TypeScript",
      icon: <IconBrandTypescript className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "C++",
      icon: <IconBrandCpp className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "React",
      icon: <IconBrandReact className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Node.js",
      icon: <IconBrandNodejs className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "SQL",
      icon: <IconDatabase className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "AWS",
      icon: <IconBrandAws className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
    {
      title: "Git",
      icon: <IconBrandGit className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "#",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="mt-12"
    >
      <FloatingDock items={techStack} />
    </motion.div>
  )
}

export function Hero() {
  const words = ["AI‑native tools", "full‑stack apps", "clean UIs", "modern web experiences"];

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-950 dark:to-black">
      <BackgroundRippleEffect />
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="blue"
      />
      <div className="container relative z-10 py-16 max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
          <div className="mb-4 inline-flex items-center rounded-full border border-neutral-200 dark:border-neutral-800 bg-neutral-100 dark:bg-neutral-900 px-3 py-1 text-sm">
            <span className="relative flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400">
            {site.name}
          </h1>
          
          <p className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-400 font-medium">
            {site.role}
          </p>
          
          <div className="mt-6 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            Building
            <FlipWords words={words} className="font-semibold text-neutral-900 dark:text-neutral-100" />
            <br />
            with modern web technologies.
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-10 flex flex-wrap gap-3 items-center"
          >
            <a 
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-neutral-900 dark:bg-neutral-100 px-6 py-3 text-sm font-medium text-white dark:text-black hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all shadow-lg hover:shadow-xl"
            >
              View Projects
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a 
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            
            <a 
              href="https://twitter.com/eliotshytaj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
              aria-label="X (Twitter)"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            
            <a 
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            
            <a 
              href={site.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-950 px-6 py-3 text-sm font-medium text-neutral-900 dark:text-neutral-100 hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-all"
            >
              <FileText className="h-4 w-4" />
              Resume
            </a>
          </motion.div>
          
          <TechStackDock />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="hidden lg:flex items-center justify-center h-full"
        >
          <div className="w-full max-w-md h-[450px]">
            <AlgorithmVisualizer />
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  )
}
