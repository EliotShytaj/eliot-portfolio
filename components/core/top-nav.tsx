'use client'
import Link from 'next/link'
import { site } from '@/config/site'
import { NavLinks } from '@/components/ui/navigation-menu'
import { ThemeToggle } from '@/components/core/theme-toggle'
import { Github, Linkedin } from 'lucide-react'

export function TopNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md supports-[backdrop-filter]:bg-white/80 dark:supports-[backdrop-filter]:bg-black/80 border-b border-neutral-200/50 dark:border-neutral-800/50">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          href="#" 
          className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 hover:opacity-80 transition"
        >
          {site.name}
        </Link>
        <NavLinks />
        <div className="flex items-center gap-2">
          <a 
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </a>
          <a 
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex h-9 w-9 items-center justify-center rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}
