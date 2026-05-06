# Cómo crear una nueva investigación/expediente

El sistema usa datos centralizados en `src/lib/investigaciones-data.ts` con tipos definidos en `src/lib/timeline-types.ts`. Para agregar un nuevo caso, solo necesitas añadir un objeto al array `investigaciones`.

## 1. Estructura de un expediente

```typescript
interface Investigacion {
  slug: string                    // URL: "carolina-flores" → /investigaciones/carolina-flores
  exp: string                     // "EXP-001", "EXP-002", etc.
  title: string                   // Título del caso
  subtitle: string                // Subtítulo corto
  category: string                // "Feminicidio", "Grafología", etc.
  summary: string                 // Extracto para la card del listing
  date?: string                   // "2026-05-05"
  disclaimer?: {                  // Alerta opcional
    text: string
    variant: 'warning' | 'info'
  }
  sections: TimelineSection[]     // Grupos de eventos
  footerSources: string           // Texto de fuentes al final
  status: 'published' | 'preparing'
}
```

## 2. Secciones del timeline

Cada sección agrupa eventos por mes/tema:

```typescript
interface TimelineSection {
  label: string                   // "Abril 2026 — El crimen"
  items: (TimelineEvent | InfoBoxItem)[]
}
```

## 3. Eventos (la mayoría del contenido)

```typescript
interface TimelineEvent {
  kind: 'event'
  date: string                    // "15 de abril, 2026 — El asesinato"
  quote: string                   // Texto destacado en negritas
  context: string                 // Descripción detallada del evento
  sources: { label: string; url: string }[]   // Links a fuentes
  tags: { label: string; variant: TagVariant }[]  // Etiquetas de color
}
```

## 4. InfoBox (cajas destacadas)

Para perfiles de víctima, acusado o advertencias:

```typescript
interface InfoBoxItem {
  kind: 'infobox'
  type: 'victim' | 'suspect' | 'warning'
  title: string
  content: string
}
```

## 5. Tags disponibles

| Variant | Color | Uso |
|---------|-------|-----|
| `femicide` | Rojo vino | Feminicidio, violencia |
| `legal` | Ámbar | Denuncias, órdenes, fiscalía |
| `media` | Púrpura | Cobertura mediática |
| `protest` | Rosa | Protestas, indignación |
| `background` | Azul | Contexto, antecedentes |
| `capture` | Verde | Detenciones, capturas |
| `evidence` | Naranja | Pruebas, evidencias |
| `warning` | Rojo | Alertas |
| `info` | Cielo | Información general |

## 6. Paso a paso

1. Abre `src/lib/investigaciones-data.ts`
2. Agrega un nuevo objeto al array `investigaciones` (sigue el formato)
3. Asigna un `slug` único (define la URL)
4. Asigna `exp: "EXP-XXX"` correlativo
5. Agrega todas las secciones con sus eventos
6. Marca `status: "published"` cuando esté listo
7. El listing `investigaciones/page.tsx` y el dossier `[slug]/page.tsx` funcionan solos

## 7. Ejemplo mínimo

```typescript
{
  slug: 'mi-caso',
  exp: 'EXP-002',
  title: 'Título del Caso',
  subtitle: 'Subtítulo · Fecha',
  category: 'Análisis',
  summary: 'Extracto corto para la card...',
  date: '2026-06-01',
  sections: [
    {
      label: 'Junio 2026 — Inicio del caso',
      items: [
        {
          kind: 'event',
          date: '1 de junio, 2026 — Primer evento',
          quote: 'Cita destacada del evento.',
          context: 'Descripción detallada...',
          sources: [
            { label: 'Fuente', url: 'https://...' },
          ],
          tags: [
            { label: 'Etiqueta', variant: 'media' },
          ],
        },
      ],
    },
  ],
  footerSources: 'Fuentes: ...',
  status: 'published',
}
```

## 8. Tipos de tag por color

Los dots del timeline se asignan automáticamente en orden: vino → pink → purple → blue → amber (se repiten en ciclo). No necesitas configurarlos manualmente.
