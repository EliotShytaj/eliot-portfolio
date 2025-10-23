import type { Metadata } from 'next'
import '../globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { inter, jakarta } from '@/config/site'
import { FloatingThemeToggle } from '@/components/core/floating-theme-toggle'

export const metadata: Metadata = {
  title: 'Eliot Shytaj',
  description: 'CS & AMS student building AI‑native tools, full‑stack apps, and trading dashboards.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jakarta.variable} font-sans`}>
        <ThemeProvider>
          {children}
          <FloatingThemeToggle />
        </ThemeProvider>
      </body>
    </html>
  )
}
