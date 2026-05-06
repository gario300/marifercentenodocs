import type { TimelineSection as TimelineSectionType } from '@/lib/timeline-types'
import TimelineSectionComponent from './TimelineSection'

const sectionDots = [
  'bg-vino shadow-vino/40',
  'bg-pink-500 shadow-pink-500/40',
  'bg-purple-600 shadow-purple-600/40',
  'bg-blue-600 shadow-blue-600/40',
  'bg-amber-500 shadow-amber-500/40',
]

export default function Timeline({
  sections,
}: {
  sections: TimelineSectionType[]
}) {
  return (
    <div className="relative pl-4 before:absolute before:left-[5px] before:top-2 before:h-[calc(100%-1rem)] before:w-0.5 before:bg-gradient-to-b before:from-vino before:via-pink-500 before:via-purple-600 before:to-blue-600">
      {sections.map((section, i) => (
        <TimelineSectionComponent
          key={section.label}
          label={section.label}
          items={section.items}
          dotColor={sectionDots[i % sectionDots.length]}
        />
      ))}
    </div>
  )
}
