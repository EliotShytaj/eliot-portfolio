'use client'

import { Hero } from '@/components/blocks/hero'
import { Connect } from '@/components/blocks/connect'
import { Experience } from '@/components/blocks/experience'
import { ProjectsSection } from '@/components/blocks/projects-section'
import { Footer } from '@/components/core/footer'
import { useLenis } from '@/hooks/use-lenis'

export default function Page() {
  useLenis()
  return (
    <>
      <main className="relative">
        <Hero />
        <Experience />
        <ProjectsSection />
        <Connect />
      </main>
      <Footer />
    </>
  )
}
