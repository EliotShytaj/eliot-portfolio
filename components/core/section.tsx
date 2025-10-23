import { cn } from '@/lib/utils'

export function Section({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <section className={cn('py-20 md:py-28', className)} {...props} />
}
