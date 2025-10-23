import * as React from 'react'
import { cn } from '@/lib/utils'

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn('min-h-[96px] w-full rounded-xl2 border border-black/10 dark:border-white/10 bg-transparent px-3 py-2 outline-none transition focus:ring-2 focus:ring-accent/30 focus:ring-offset-2 focus:ring-offset-bg dark:focus:ring-offset-bg-dark', className)}
    {...props}
  />
))
Textarea.displayName = 'Textarea'
