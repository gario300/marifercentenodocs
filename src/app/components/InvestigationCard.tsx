import Link from 'next/link'
import { ArrowRight } from './Icons'

type InvestigationCardProps = {
  title: string
  summary: string
  slug: string
  date?: string
  category?: string
  exp?: string
}

export default function InvestigationCard({
  title,
  summary,
  slug,
  date,
  category,
  exp,
}: InvestigationCardProps) {
  return (
    <Link
      href={`/investigaciones/${slug}`}
      className="group cursor-pointer rounded-lg border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:border-vino/30 hover:shadow-[0_0_20px_-8px_rgba(114,47,55,0.25)]"
    >
      <div className="mb-3 flex flex-wrap items-center gap-3">
        {exp && (
          <span className="font-mono text-[11px] font-bold tracking-widest text-vino">
            {exp}
          </span>
        )}
        {category && (
          <span className="rounded border border-vino/30 bg-vino-dark/50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-vino-light">
            {category}
          </span>
        )}
        {date && (
          <time className="ml-auto text-xs text-text-secondary">{date}</time>
        )}
      </div>
      <h3 className="mb-2 font-serif text-lg font-semibold leading-snug text-text-primary transition-colors duration-200 group-hover:text-vino-light">
        {title}
      </h3>
      <p className="line-clamp-3 text-sm leading-relaxed text-text-secondary">
        {summary}
      </p>
      <div className="mt-4 flex items-center gap-1 text-xs font-medium text-vino-bright opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        Leer expediente
        <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </Link>
  )
}
