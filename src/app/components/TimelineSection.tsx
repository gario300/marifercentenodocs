import type { TimelineItem } from '@/lib/timeline-types'
import TimelineEvent from './TimelineEvent'
import InfoBox from './InfoBox'

export default function TimelineSection({
  label,
  items,
  dotColor = 'bg-vino',
}: {
  label: string
  items: TimelineItem[]
  dotColor?: string
}) {
  return (
    <div className="mb-8">
      <div className="relative mb-4 pl-6">
        <span
          className={`absolute left-0 top-1.5 h-3 w-3 rounded-full border-2 border-dark shadow-[0_0_6px] ${dotColor} shadow-vino/40`}
        />
        <h3 className="font-serif text-base font-bold text-text-primary">
          {label}
        </h3>
      </div>

      <div className="space-y-4">
        {items.map((item, i) => {
          if (item.kind === 'infobox') {
            return <InfoBox key={i} {...item} />
          }
          return <TimelineEvent key={i} {...item} />
        })}
      </div>
    </div>
  )
}
