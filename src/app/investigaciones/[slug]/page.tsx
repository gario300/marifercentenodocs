import Link from "next/link";
import type { Metadata } from "next";
import { getInvestigacionBySlug, investigaciones } from "@/lib/investigaciones-data";
import Timeline from "@/app/components/Timeline";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return investigaciones.map((inv) => ({ slug: inv.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const inv = getInvestigacionBySlug(slug);
  if (!inv)
    return { title: "Expediente no encontrado" };
  return {
    title: `${inv.exp} · ${inv.title}`,
    description: inv.summary,
  };
}

export default async function InvestigacionPage({ params }: Props) {
  const { slug } = await params;
  const inv = getInvestigacionBySlug(slug);

  if (!inv) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="mb-4 font-serif text-3xl font-bold text-text-primary">
          Expediente no encontrado
        </h1>
        <Link
          href="/investigaciones"
          className="text-sm font-medium text-vino-bright transition-colors hover:text-vino-light"
        >
          ← Volver a Expedientes
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/investigaciones"
        className="mb-10 inline-flex cursor-pointer items-center gap-2 text-sm font-medium text-text-secondary transition-colors duration-200 hover:text-vino-bright"
      >
        <span className="inline-block transition-transform duration-200 hover:-translate-x-0.5">←</span>
        Volver a Expedientes
      </Link>

      <article>
        <header className="mb-10 border-l-2 border-vino pl-6">
          <div className="mb-4 flex flex-wrap items-center gap-4">
            <span className="font-mono text-sm font-bold tracking-[0.15em] text-vino">
              {inv.exp}
            </span>
            <span className="rounded border border-vino/30 bg-vino-dark/50 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-vino-light">
              {inv.category}
            </span>
          </div>

          <h1 className="mb-3 font-serif text-4xl font-bold leading-tight text-text-primary">
            {inv.title}
          </h1>

          <p className="text-sm text-text-secondary">{inv.subtitle}</p>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-text-secondary">
            <span>Autora: Maryfer Centeno</span>
            <span className="text-border">|</span>
            <span>Expediente: {inv.exp}</span>
          </div>
        </header>

        {inv.disclaimer && (
          <div className="mb-8 rounded-md border border-red-900/30 bg-red-950/20 px-5 py-4">
            <p className="text-sm font-medium leading-relaxed text-red-400">
              {inv.disclaimer.text}
            </p>
          </div>
        )}

        <Timeline sections={inv.sections} />

        <footer className="mt-16 border-t border-border pt-8">
          <p className="mb-6 text-xs leading-relaxed text-text-secondary">
            {inv.footerSources}
          </p>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border border-vino/30 bg-surface font-serif text-lg font-bold text-vino">
              MC
            </div>
            <div>
              <p className="font-serif text-base font-semibold text-text-primary">
                Maryfer Centeno
              </p>
              <p className="text-xs text-text-secondary">
                Grafóloga · Analista de Comportamiento
              </p>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
