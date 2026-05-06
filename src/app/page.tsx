import Link from "next/link"
import Image from "next/image"
import { SITE } from "@/lib/site"
import { investigaciones } from "@/lib/investigaciones-data"
import { TikTokIcon, InstagramIcon, ArrowRight } from "./components/Icons"

const latest = investigaciones.filter((i) => i.status === "published")[0]
const rest = investigaciones.filter((i) => i.status === "published").slice(1)

const stats = [
  { value: SITE.stats.experiencia, label: "Años de experiencia" },
  { value: SITE.stats.casos, label: "Casos analizados" },
  { value: SITE.stats.medios, label: "Medios de comunicación" },
]

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-vino-dark/30 via-transparent to-dark" />
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-dark to-transparent" />

        <div className="mx-auto max-w-6xl px-6 py-24 sm:py-32">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-vino/30 bg-vino-dark/50 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-vino-light">
                Portal de Investigación
              </div>
              <h1 className="mb-2 font-serif text-5xl font-bold leading-none tracking-tight text-text-primary sm:text-7xl">
                Maryfer
                <br />
                Centeno
              </h1>
              <p className="mb-6 text-base tracking-wider text-vino-light sm:text-lg">
                Grafóloga · Analista de Comportamiento · Investigadora
              </p>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-text-secondary">
                Investigaciones basadas en grafología, lenguaje corporal y
                análisis de comportamiento sobre los casos que marcan la
                conversación pública.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/investigaciones"
                  className="group inline-flex cursor-pointer items-center gap-2 rounded-md bg-vino-bright px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-800"
                >
                  Explorar Expedientes
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
                <a
                  href={SITE.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-vino/40 hover:text-vino-bright"
                >
                  <TikTokIcon className="h-4 w-4" />
                  TikTok
                </a>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-vino/40 hover:text-vino-bright"
                >
                  <InstagramIcon className="h-4 w-4" />
                  Instagram
                </a>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="relative aspect-[3/4] w-full rounded-lg border border-vino/20 bg-surface/50 overflow-hidden">
                <Image
                  src="/hero.jpg"
                  alt="Maryfer Centeno"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border/50 bg-surface/30 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-4xl font-bold text-vino-bright">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {latest && (
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-8 bg-vino" />
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-vino">
                Expediente Destacado
              </span>
            </div>

            <Link
              href={`/investigaciones/${latest.slug}`}
              className="group block cursor-pointer rounded-lg border border-border bg-surface p-8 transition-all duration-300 hover:border-vino/30 hover:shadow-[0_0_30px_-10px_rgba(114,47,55,0.3)] sm:p-12"
            >
              <div className="mb-4 flex flex-wrap items-center gap-4">
                <span className="font-mono text-sm font-bold tracking-widest text-vino">
                  {latest.exp}
                </span>
                <span className="rounded border border-vino/30 bg-vino-dark/50 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-vino-light">
                  {latest.category}
                </span>
                {latest.date && (
                  <time className="text-xs text-text-secondary">{latest.date}</time>
                )}
              </div>
              <h2 className="mb-3 font-serif text-2xl font-bold text-text-primary transition-colors duration-200 group-hover:text-vino-light sm:text-3xl">
                {latest.title}
              </h2>
              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-text-secondary">
                {latest.summary}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-vino-bright opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                Leer expediente completo
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>

            {rest.length > 0 && (
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {rest.map((inv) => (
                  <Link
                    key={inv.slug}
                    href={`/investigaciones/${inv.slug}`}
                    className="group cursor-pointer rounded-lg border border-border bg-surface p-6 transition-all duration-300 hover:border-vino/30 hover:shadow-[0_0_20px_-8px_rgba(114,47,55,0.25)]"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-mono text-[11px] font-bold tracking-widest text-vino">
                        {inv.exp}
                      </span>
                      <span className="rounded border border-vino/30 bg-vino-dark/50 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-vino-light">
                        {inv.category}
                      </span>
                    </div>
                    <h3 className="mb-2 font-serif text-lg font-semibold text-text-primary transition-colors duration-200 group-hover:text-vino-light">
                      {inv.title}
                    </h3>
                    <p className="line-clamp-2 text-sm text-text-secondary">
                      {inv.summary}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      )}

      <section className="border-t border-border/50 bg-surface/20 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <div className="relative aspect-square w-full rounded-lg border border-vino/20 bg-surface/50 overflow-hidden">
                <Image
                  src="/about.jpg"
                  alt="Maryfer Centeno"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-3">
              <div className="mb-4 flex items-center gap-3">
                <span className="h-px w-8 bg-vino" />
                <span className="text-xs font-medium uppercase tracking-[0.2em] text-vino">
                  Sobre Mí
                </span>
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-text-primary">
                Grafóloga, Analista y
                <br />
                <span className="text-vino-light">Fundadora</span>
              </h2>
              <p className="mb-4 max-w-lg text-sm leading-relaxed text-text-secondary">
                Soy Maryfer Centeno, grafóloga y analista de comportamiento.
                Fundadora del Colegio Mexicano de Grafología y autora del libro
                &ldquo;El lado oscuro de la mente humana&rdquo;. Colaboro en
                Televisa, Infobae México y El Universal, donde aplico el
                análisis de escritura y lenguaje corporal a casos virales,
                figuras públicas y controversias mediáticas.
              </p>
              <Link
                href="/about"
                className="inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-vino-bright transition-colors hover:text-red-400"
              >
                Conoce mi trayectoria completa
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="mb-6 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-vino" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-vino">
              Contacto
            </span>
            <span className="h-px w-8 bg-vino" />
          </div>
          <h2 className="mb-4 font-serif text-3xl font-bold text-text-primary">
            ¿Tienes un caso que analizar?
          </h2>
          <p className="mb-8 text-sm text-text-secondary">
            Análisis grafológicos, interpretación de lenguaje corporal o
            asesoría en comportamiento.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={`mailto:${SITE.email}`}
              className="inline-flex cursor-pointer items-center gap-2 rounded-md bg-vino-bright px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-red-800"
            >
              Enviar correo
            </a>
            <a
              href={SITE.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-vino/40 hover:text-vino-bright"
            >
              <TikTokIcon className="h-4 w-4" />
              TikTok
            </a>
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-6 py-3 text-sm font-medium text-text-secondary transition-all duration-200 hover:border-vino/40 hover:text-vino-bright"
            >
              <InstagramIcon className="h-4 w-4" />
              Instagram
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
