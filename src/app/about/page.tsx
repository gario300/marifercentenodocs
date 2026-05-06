import type { Metadata } from "next";
import Image from "next/image";
import { SITE } from "@/lib/site";
import { TikTokIcon, InstagramIcon } from "../components/Icons";

export const metadata: Metadata = {
  title: "Trayectoria",
  description:
    "Conoce la trayectoria profesional de Maryfer Centeno, grafóloga, autora y analista de comportamiento.",
};

const milestones = [
  {
    year: "Actual",
    title: "Fundadora — Colegio Mexicano de Grafología",
    desc: "Dirección de la institución líder en enseñanza de grafología en México, formando a nuevas generaciones de grafólogos.",
  },
  {
    year: "2025",
    title: "Analista — La Casa de los Famosos México",
    desc: "Comentarista y analista de comportamiento para el reality show de Televisa, analizando dinámicas de grupo y lenguaje corporal en tiempo real.",
  },
  {
    year: "2024",
    title: 'Autora — "El lado oscuro de la mente humana"',
    desc: "Presentación del libro en la Feria Internacional del Libro (FIL) de Guadalajara. Una exploración profunda de los patrones ocultos del comportamiento humano.",
  },
  {
    year: "2023",
    title: "Conferencista — Cámara de Diputados",
    desc: "Invitada al Palacio Legislativo de San Lázaro para participar en foros sobre análisis de comportamiento y dinámicas sociales.",
  },
  {
    year: "2021",
    title: "Colaboradora — Televisa",
    desc: "Inicio de colaboración regular en el programa 'Hoy' con segmentos de grafología, lenguaje corporal y análisis de figuras públicas.",
  },
  {
    year: "2019",
    title: "Fundación — Colegio Mexicano de Grafología",
    desc: "Creación de la institución educativa para la certificación y enseñanza profesional de la grafología en México.",
  },
];

const credentials = [
  "Fundadora — Colegio Mexicano de Grafología",
  'Autora — "El lado oscuro de la mente humana"',
  "Analista — La Casa de los Famosos México (Televisa)",
  "Colaboradora — Programa Hoy (Televisa)",
  "Conferencista — Cámara de Diputados",
  "Columnista — Infobae México",
];

const logos = [
  { name: "Televisa" },
  { name: "Infobae" },
  { name: "El Universal" },
  { name: "TikTok" },
  { name: "Instagram" },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid items-start gap-16 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="sticky top-28 space-y-8">
            <div className="relative aspect-[3/4] w-full rounded-lg border border-vino/20 bg-surface/50 overflow-hidden">
              <Image
                src="/about.jpg"
                alt="Maryfer Centeno"
                fill
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-serif text-lg font-bold text-text-primary">
                Presencia en Medios
              </h3>
              <div className="flex flex-wrap gap-2">
                {logos.map((l) => (
                  <span
                    key={l.name}
                    className="rounded border border-border px-3 py-1.5 text-xs font-medium text-text-secondary"
                  >
                    {l.name}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={SITE.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-all duration-200 hover:border-vino/40 hover:text-vino-bright"
              >
                <TikTokIcon className="h-4 w-4" />
                TikTok
              </a>
              <a
                href={SITE.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex cursor-pointer items-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm text-text-secondary transition-all duration-200 hover:border-vino/40 hover:text-vino-bright"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-vino" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-vino">
              Trayectoria
            </span>
          </div>

          <h1 className="mb-4 font-serif text-4xl font-bold text-text-primary">
            Maryfer Centeno
          </h1>

          <p className="mb-12 max-w-xl text-base leading-relaxed text-text-secondary">
            Grafóloga, analista de comportamiento y autora. Fundadora del
            Colegio Mexicano de Grafología. Mi trabajo combina el análisis de
            escritura, lenguaje corporal y comportamiento para investigar casos
            virales, figuras públicas y controversias mediáticas.
          </p>

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-vino" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-vino">
              Cronología
            </span>
          </div>

          <div className="relative mb-16 space-y-10 pl-8 before:absolute before:left-3 before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-border">
            {milestones.map((m) => (
              <div key={m.year + m.title} className="relative">
                <span className="absolute -left-8 top-0.5 flex h-6 w-6 items-center justify-center rounded-full border border-vino bg-dark text-[10px] font-bold text-vino">
                  {m.year === "Actual" ? "◆" : m.year.slice(2)}
                </span>
                <h3 className="font-serif text-lg font-semibold text-text-primary">
                  {m.title}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-text-secondary">
                  {m.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-6 bg-vino" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-vino">
              Credenciales
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {credentials.map((cred) => (
              <span
                key={cred}
                className="rounded-md border border-vino/30 bg-vino-dark/40 px-3.5 py-2 text-sm text-vino-light"
              >
                {cred}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
