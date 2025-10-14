"use client";

import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Scene3D from "@/app/Scene3D";
import Projects from "@/app/Projects";


export default function Home() {
  return (
    <main className="min-h-[100svh]">
      {/* Hero */}
      <section className="relative h-[90svh] overflow-hidden">
        <Scene3D />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-black" />

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Eliot Shytaj
          </motion.h1>

          <motion.p
            className="mt-4 max-w-xl text-neutral-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            CS & AMS @ Stony Brook. I build fast, delightful software—systems,
            ML, and 3D UIs. Startup-minded and shipping weekly.
          </motion.p>

          <motion.div
            className="mt-8 flex gap-3"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Button asChild variant="default" className="pointer-events-auto">
              <a href="mailto:eliotshytaj05@gmail.com"><Mail className="mr-2 h-4 w-4" />Contact</a>
            </Button>
            <Button asChild variant="secondary" className="pointer-events-auto">
              <a href="https://github.com/eliotshytaj" target="_blank" rel="noreferrer">
                <Github className="mr-2 h-4 w-4" />GitHub
              </a>
            </Button>
            <Button asChild variant="outline" className="pointer-events-auto">
              <a href="https://www.linkedin.com/in/eliotshytaj" target="_blank" rel="noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />LinkedIn
              </a>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <Projects />

      {/* Footer */}
      <footer className="mx-auto max-w-6xl px-6 py-16 text-sm text-neutral-500">
        © {new Date().getFullYear()} Eliot Shytaj • Built with Next.js, R3F, and love.
      </footer>
    </main>
  );
}
