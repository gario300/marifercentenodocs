export type TagVariant =
  | 'femicide'
  | 'legal'
  | 'media'
  | 'protest'
  | 'background'
  | 'capture'
  | 'evidence'
  | 'warning'
  | 'info'

export interface TimelineSource {
  label: string
  url: string
}

export interface TimelineTag {
  label: string
  variant: TagVariant
}

export interface TimelineEvent {
  kind: 'event'
  date: string
  quote: string
  context: string
  sources: TimelineSource[]
  tags: TimelineTag[]
}

export interface InfoBoxItem {
  kind: 'infobox'
  type: 'victim' | 'suspect' | 'warning'
  title: string
  content: string
}

export type TimelineItem = TimelineEvent | InfoBoxItem

export interface TimelineSection {
  label: string
  items: TimelineItem[]
}

export interface Investigacion {
  slug: string
  exp: string
  title: string
  subtitle: string
  category: string
  summary: string
  date?: string
  disclaimer?: {
    text: string
    variant: 'warning' | 'info'
  }
  sections: TimelineSection[]
  footerSources: string
  status: 'published' | 'preparing'
}
