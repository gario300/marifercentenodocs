import type { Metadata } from "next";
import { investigaciones } from "@/lib/investigaciones-data";
import InvestigationCard from "../components/InvestigationCard";

export const metadata: Metadata = {
  title: "Expedientes",
  description:
    "Explora todas las investigaciones de Maryfer Centeno sobre casos virales, noticias y análisis de comportamiento.",
};

export default function InvestigacionesPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px w-8 bg-vino" />
        <span className="text-xs font-medium uppercase tracking-[0.2em] text-vino">
          Archivo
        </span>
      </div>
      <h1 className="mb-4 font-serif text-4xl font-bold text-text-primary">
        Expedientes
      </h1>
      <p className="mb-16 max-w-2xl text-base leading-relaxed text-text-secondary">
        Análisis detallados sobre casos virales, noticias y actualidad
        desde la perspectiva de la grafología, el lenguaje corporal y el
        análisis de comportamiento.
      </p>

      {investigaciones.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {investigaciones
            .filter((inv) => inv.status === "published")
            .map((inv) => (
              <InvestigationCard
                key={inv.slug}
                slug={inv.slug}
                title={inv.title}
                summary={inv.summary}
                category={inv.category}
                date={inv.date}
                exp={inv.exp}
              />
            ))}
        </div>
      ) : (
        <div className="rounded-lg border border-border bg-surface p-16 text-center">
          <p className="text-base text-text-secondary">
            Próximamente encontrarás aquí los expedientes.
          </p>
        </div>
      )}
    </div>
  );
}
