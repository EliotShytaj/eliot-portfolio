import { cn } from '@/lib/utils'

export function NavLinks({ className }: { className?: string }) {
  const links = [
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={cn('hidden md:flex items-center gap-6 text-sm', className)}>
      {links.map((link) => (
        <a key={link.href} href={link.href} className="opacity-80 hover:opacity-100 transition">
          {link.label}
        </a>
      ))}
    </nav>
  )
}
