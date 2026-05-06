import type { InfoBoxItem } from '@/lib/timeline-types'

const styles = {
  victim:
    'border-vino/30 bg-gradient-to-br from-vino-dark/20 to-transparent',
  suspect:
    'border-red-900/30 bg-gradient-to-br from-red-950/20 to-transparent',
  warning:
    'border-yellow-800/30 bg-gradient-to-br from-yellow-950/20 to-transparent',
}

const iconColors = {
  victim: 'text-vino-light',
  suspect: 'text-red-400',
  warning: 'text-yellow-400',
}

const titles = {
  victim: '🎯',
  suspect: '⚠️',
  warning: '⚡',
}

export default function InfoBox({ type, title, content }: InfoBoxItem) {
  return (
    <div
      className={`rounded-lg border p-5 ${styles[type]} mb-4 last:mb-0`}
    >
      <div className="mb-2 flex items-center gap-2">
        <span className={`text-lg ${iconColors[type]}`}>{titles[type]}</span>
        <h3 className={`font-serif text-base font-semibold ${iconColors[type]}`}>
          {title}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-text-secondary">{content}</p>
    </div>
  )
}
