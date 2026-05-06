import type { TimelineEvent as TimelineEventType } from '@/lib/timeline-types'
import Tag from './Tag'

export default function TimelineEvent({
  date,
  quote,
  context,
  sources,
  tags,
}: TimelineEventType) {
  return (
    <div className="mb-4 rounded-lg border border-border bg-surface p-5 transition-all duration-200 last:mb-0 hover:border-vino/20 hover:shadow-[0_0_15px_-8px_rgba(114,47,55,0.2)]">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-vino">
        {date}
      </p>

      <p className="mb-3 text-sm font-semibold leading-relaxed text-text-primary">
        {quote}
      </p>

      <p className="mb-4 text-sm leading-relaxed text-text-secondary">
        {context}
      </p>

      {sources.length > 0 && (
        <div className="mb-3 flex flex-wrap gap-1.5">
          {sources.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded bg-surface-light px-2.5 py-1 text-[11px] text-vino-light no-underline transition-colors duration-200 hover:bg-vino hover:text-white"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {tags.map((t, i) => (
            <Tag key={i} label={t.label} variant={t.variant} />
          ))}
        </div>
      )}
    </div>
  )
}
