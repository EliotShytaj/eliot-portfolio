'use client'
import React, { useEffect } from 'react'
import { Section } from '@/components/core/section'
import { motion } from 'framer-motion'
import { Mail } from 'lucide-react'
import { site } from '@/config/site'

const XIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GitHubIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const contactMethods = [
  {
    icon: Mail,
    label: 'Email',
    value: 'eliotshytaj05@gmail.com',
    href: 'mailto:eliotshytaj05@gmail.com',
    color: 'bg-neutral-800 dark:bg-neutral-700',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/eliotshytaj',
    href: site.linkedin,
    color: 'bg-neutral-800 dark:bg-neutral-700',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/eliotshytaj',
    href: 'https://github.com/eliotshytaj',
    color: 'bg-neutral-800 dark:bg-neutral-700',
  },
  {
    icon: XIcon,
    label: 'X (Twitter)',
    value: '@eliotshytaj',
    href: 'https://twitter.com/eliotshytaj',
    color: 'bg-neutral-800 dark:bg-neutral-700',
  },
]

export function Connect() {
  useEffect(() => {
    // Cal.com inline embed initialization
    // @ts-ignore - Cal.com embed code
    (function (C: any, A: any, L: any) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api: any = function () { p(api, arguments); };
          const namespace = ar[1];
          api.q = api.q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    // @ts-ignore
    (window as any).Cal("init", "15min", { origin: "https://app.cal.com" });
    // @ts-ignore
    (window as any).Cal.ns["15min"]("inline", {
      elementOrSelector: "#my-cal-inline-15min",
      config: { layout: "month_view" },
      calLink: "eliot-1xlvfw/15min",
    });
    // @ts-ignore
    (window as any).Cal.ns["15min"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view"
    });
  }, []);

  return (
    <Section id="connect" className="bg-white dark:bg-black">
      <div className="container max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-100 dark:to-neutral-400 mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            I&apos;m always open to discussing new projects, opportunities, or just having a conversation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Schedule a Meeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
              Schedule a Meeting
            </h3>
            <div className="bg-white dark:bg-neutral-950 rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 min-h-[800px]">
              <div 
                id="my-cal-inline-15min" 
                style={{ width: '100%', height: '800px', overflow: 'auto' }}
                className="cal-embed-container"
              />
            </div>
          </motion.div>

          {/* Right Column */}
          <div className="space-y-6 flex flex-col h-full">
            {/* Ways to Connect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-lg flex-1"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-6">
                Ways to Connect
              </h3>
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.label}
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-4 bg-white dark:bg-neutral-950 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:shadow-lg transition-all group"
                  >
                    <div className={`flex h-12 w-12 items-center justify-center rounded-lg ${method.color} flex-shrink-0 text-white`}>
                      {React.createElement(method.icon, { className: "h-5 w-5" })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                        {method.label}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-400 truncate">
                        {method.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-neutral-50 dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-lg flex-1"
            >
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                Location
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                Currently in New York, New York, but I&apos;m available remotely.
              </p>
              <div className="relative rounded-xl overflow-hidden border border-neutral-200 dark:border-neutral-800 h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  )
}
