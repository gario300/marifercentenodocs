import type { TagVariant } from '@/lib/timeline-types'

const variants: Record<TagVariant, string> = {
  femicide: 'border-vino/30 bg-vino-dark/50 text-vino-light',
  legal: 'border-amber-800/30 bg-amber-950/50 text-amber-400',
  media: 'border-purple-800/30 bg-purple-950/50 text-purple-400',
  protest: 'border-pink-800/30 bg-pink-950/50 text-pink-400',
  background: 'border-blue-800/30 bg-blue-950/50 text-blue-400',
  capture: 'border-emerald-800/30 bg-emerald-950/50 text-emerald-400',
  evidence: 'border-orange-800/30 bg-orange-950/50 text-orange-400',
  warning: 'border-red-800/30 bg-red-950/50 text-red-400',
  info: 'border-sky-800/30 bg-sky-950/50 text-sky-400',
}

export default function Tag({ label, variant }: { label: string; variant: TagVariant }) {
  return (
    <span
      className={`inline-block rounded border px-2 py-0.5 text-[10px] font-semibold uppercase leading-none tracking-wider ${variants[variant]}`}
    >
      {label}
    </span>
  )
}
