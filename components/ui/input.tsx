import * as React from 'react'
import { cn } from '@/lib/utils'

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn('h-10 w-full rounded-xl2 border border-black/10 dark:border-white/10 bg-transparent px-3 outline-none transition focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-bg dark:focus:ring-offset-bg-dark', className)}
    {...props}
  />
))
Input.displayName = 'Input'
