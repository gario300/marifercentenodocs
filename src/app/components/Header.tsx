'use client'

import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { TikTokIcon, InstagramIcon } from './Icons'
import { SITE } from '@/lib/site'

const links = [
  { href: '/', label: 'Inicio' },
  { href: '/investigaciones', label: 'Expedientes' },
  { href: '/about', label: 'Trayectoria' },
]

export default function Header() {
  const segment = useSelectedLayoutSegment()

  function isActive(href: string) {
    if (href === '/') return segment === null
    return segment === href.slice(1)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-dark/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <span className="font-serif text-xl font-bold tracking-wide text-text-primary">
            Maryfer Centeno
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 sm:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 hover:text-vino-bright ${
                  isActive(link.href) ? 'text-vino-bright' : 'text-text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-text-secondary transition-colors duration-200 hover:text-vino-bright"
              aria-label="TikTok"
            >
              <TikTokIcon className="h-4 w-4" />
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer text-text-secondary transition-colors duration-200 hover:text-vino-bright"
              aria-label="Instagram"
            >
              <InstagramIcon className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
