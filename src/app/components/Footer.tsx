import { TikTokIcon, InstagramIcon } from './Icons'
import { SITE } from '@/lib/site'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border/50 bg-dark">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-12 sm:flex-row sm:justify-between">
        <div className="text-center sm:text-left">
          <p className="font-serif text-lg font-semibold text-text-primary">
            Maryfer Centeno
          </p>
          <p className="mt-0.5 text-sm text-text-secondary">
            Grafóloga · Analista de Comportamiento · Investigadora
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={SITE.tiktok}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-all duration-200 hover:border-vino/40 hover:text-vino-bright"
            aria-label="Seguir en TikTok"
          >
            <TikTokIcon className="h-4 w-4" />
            TikTok
          </a>
          <a
            href={SITE.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-all duration-200 hover:border-vino/40 hover:text-vino-bright"
            aria-label="Seguir en Instagram"
          >
            <InstagramIcon className="h-4 w-4" />
            Instagram
          </a>
        </div>

        <p className="text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} Maryfer Centeno
        </p>
      </div>
    </footer>
  )
}
