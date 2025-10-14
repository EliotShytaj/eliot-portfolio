"use client";

import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "TradeTrack",
    blurb: "Java + Spring Boot + React dashboard for stocks/earnings with Finnhub.",
    link: "https://github.com/eliotshytaj", 
  },
  {
    title: "Actuary AI",
    blurb: "Pricing & demand insights for Shopify sellers, MVP in FastAPI + Python.",
    link: "https://github.com/eliotshytaj",
  },
  {
    title: "Snort Rule Analyzer",
    blurb: "Regex REDOS analysis pipeline (Java tool + Python orchestration).",
    link: "https://github.com/eliotshytaj",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.h2
        className="text-3xl md:text-4xl font-semibold"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {items.map((p, i) => (
          <motion.a
            key={p.title}
            href={p.link}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <Card className="h-full bg-neutral-900/60 border-neutral-800 hover:border-neutral-700 transition">
              <CardHeader>
                <CardTitle className="text-white">{p.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-neutral-300">{p.blurb}</CardContent>
            </Card>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
