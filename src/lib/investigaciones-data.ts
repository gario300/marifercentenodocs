import type { Investigacion } from './timeline-types'

export const investigaciones: Investigacion[] = [
  {
    slug: 'carolina-flores',
    exp: 'EXP-001',
    title: 'Feminicidio de Carolina Flores',
    subtitle:
      'Exreina de belleza asesinada en Polanco, CDMX · Investigación internacional · Abril 2026 - presente',
    category: 'Feminicidio',
    summary:
      'Cronología detallada del feminicidio de Carolina Flores Gómez, exreina de belleza asesinada a balazos por su suegra en un departamento en Polanco, Ciudad de México.',
    date: '2026-05-05',
    disclaimer: {
      text: 'Alerta de contenido: Esta cronología documenta un feminicidio ocurrido en abril de 2026. Incluye descripciones de violencia armada, dinámicas de abuso familiar y detalles explícitos del crimen. Se recomienda discreción.',
      variant: 'warning',
    },
    sections: [
      {
        label: 'Antecedentes — La víctima y la acusada',
        items: [
          {
            kind: 'infobox',
            type: 'victim',
            title: '¿Quién era Carolina Flores Gómez?',
            content:
              'Carolina Flores Gómez nació el 4 de abril de 1999 en Ensenada, Baja California. A los 17 años, en 2017, se coronó como Miss Teen Universe Baja California, lo que la llevó a representar a su estado en certámenes nacionales. Trabajaba como creadora de contenido digital enfocada en moda y estilo de vida, acumulando cerca de 20,000 seguidores en TikTok. Mantenía una relación con Alejandro Sánchez Herrera, con quien tuvo un bebé de 8 meses al momento de su muerte. En diciembre de 2025, la pareja se mudó de Baja California a la Ciudad de México en busca de una nueva vida, estableciéndose en un departamento en la calle Edgar Allan Poe, colonia Polanco.',
          },
          {
            kind: 'infobox',
            type: 'suspect',
            title: '¿Quién es Erika María Guadalupe Herrera?',
            content:
              'Erika María Guadalupe Herrera, de 63 años, es la suegra de Carolina y madre de Alejandro. Tuvo una carrera en la política local de Ensenada: fue candidata a regidora en el municipio de Ensenada en 2016 por el Partido de la Revolución Democrática (PRD). Aunque no consolidó una carrera de alto perfil a nivel nacional, era una figura conocida en ciertos círculos políticos y sociales de Baja California. Según la investigación, la relación con Carolina estaba marcada por celos, conflictos familiares y falta de aceptación de la pareja de su hijo.',
          },
        ],
      },
      {
        label: 'Abril 2026 — El crimen que conmocionó a México',
        items: [
          {
            kind: 'event',
            date: '15 de abril, 2026 — El asesinato',
            quote:
              'Carolina Flores es asesinada a balazos dentro de su departamento en Polanco. La presunta responsable: su propia suegra, Erika María.',
            context:
              'Carolina se encontraba en su departamento de la calle Edgar Allan Poe, colonia Polanco III Sección, alcaldía Miguel Hidalgo, en compañía de su esposo Alejandro y su bebé de 8 meses. Días antes, Erika María había viajado desde Ensenada para visitar a la familia. Se desata una fuerte discusión. El baby monitor del departamento capta en video el momento en que Erika María dispara contra Carolina en 6 a 7 ocasiones mientras ella caminaba hacia la recámara, en presencia de Alejandro y el bebé. En la grabación se escucha a Alejandro increpar a su madre: "¿Qué hiciste, mamá?", "¿Qué te pasa? ¡Ella es mi familia!". Erika responde: "Nada, solo me hizo enojar". Paramédicos confirman la muerte por disparo en la cabeza y tórax. El personal de seguridad del edificio manifestó no haber escuchado detonaciones. Erika huye del departamento, toma un taxi y abandona el lugar con sus maletas.',
            sources: [
              {
                label: 'Milenio',
                url: 'https://www.milenio.com/policia/asesinato-carolina-flores-exreina-belleza-hallada-polanco-esto-sabemos',
              },
              {
                label: 'Wikipedia',
                url: 'https://en.wikipedia.org/wiki/Killing_of_Carolina_Flores_G%C3%B3mez',
              },
              {
                label: 'El Colombiano',
                url: 'https://www.elcolombiano.com/entretenimiento/muerte-carolina-flores-mexico-investigan-suegra-hallazgo-polanco-KI35790813',
              },
            ],
            tags: [
              { label: 'Feminicidio', variant: 'femicide' },
              { label: 'Baby monitor capta el crimen', variant: 'evidence' },
            ],
          },
          {
            kind: 'event',
            date: '16 de abril, 2026 — La denuncia tardía',
            quote:
              'Alejandro Sánchez Herrera presenta la denuncia ante el Ministerio Público, un día después del crimen. Señala a su propia madre como la responsable.',
            context:
              'Tras pasar 24 horas desde el asesinato, Alejandro acude a la Fiscalía capitalina. La demora genera críticas y sospechas sobre su posible complicidad o inacción. Alejandro declara que esperó por miedo a su madre y para proteger la vida del bebé. Afirma que después del ataque salió del departamento con el bebé en brazos para confrontar a Erika, pero no pudo impedir su huida. La Fiscalía inicia investigación bajo protocolo de feminicidio.',
            sources: [
              {
                label: 'Milenio',
                url: 'https://www.milenio.com/policia/asesinato-carolina-flores-exreina-belleza-hallada-polanco-esto-sabemos',
              },
              {
                label: 'Telediario',
                url: 'https://www.telediario.mx/comunidad/carolina-flores-quien-era-exreina-de-belleza-asesinada-por-su-suegra',
              },
            ],
            tags: [
              { label: 'Denuncia', variant: 'legal' },
              { label: 'Protocolo de feminicidio', variant: 'femicide' },
            ],
          },
          {
            kind: 'event',
            date: '17 de abril, 2026 — Orden de aprehensión',
            quote:
              'Un juez de la CDMX libra orden de aprehensión contra Erika María Guadalupe N por el delito de feminicidio.',
            context:
              'La Fiscalía de Investigación del Delito de Feminicidio solicita y obtiene el mandamiento judicial. Agentes de la Policía de Investigación (PDI) comienzan a rastrear a la mujer, quien ya había huido de la Ciudad de México. Las indagatorias señalan que el arma utilizada fue una pistola calibre 9 mm.',
            sources: [
              {
                label: 'Milenio — Orden de aprehensión',
                url: 'https://www.milenio.com/policia/libran-orden-aprehension-erika-n-feminicidio-carolina-flores',
              },
            ],
            tags: [
              { label: 'Orden de aprehensión', variant: 'legal' },
              { label: 'Arma 9mm', variant: 'evidence' },
            ],
          },
          {
            kind: 'event',
            date: '21 de abril, 2026 — El caso se hace público',
            quote:
              'Medios nacionales e internacionales comienzan a cubrir el caso. Gobernadora de Baja California se pronuncia y ofrece apoyo a la familia.',
            context:
              'La gobernadora de Baja California, Marina del Pilar, lamenta el asesinato y expresa: "Lamentamos mucho y quiero reiterarle a la familia que no están solos, estamos con ellos para acompañarlos en todo este proceso". La fiscal estatal María Elena Andrade Ramírez ofrece cooperación con las autoridades capitalinas. La Fiscalía CDMX confirma que investiga bajo protocolo de feminicidio y emite alerta migratoria para capturar a Erika María en todo México.',
            sources: [
              {
                label: 'Milenio',
                url: 'https://www.milenio.com/policia/asesinato-carolina-flores-exreina-belleza-hallada-polanco-esto-sabemos',
              },
              {
                label: 'El Financiero',
                url: 'https://www.elfinanciero.com.mx/cdmx/2026/04/23/feminicidio-de-carolina-flores-exreina-de-belleza-su-suegra-la-habria-asesinado-en-polanco/',
              },
              {
                label: 'People',
                url: 'https://people.com/beauty-queen-shot-dead-family-member-eyed-11956264',
              },
            ],
            tags: [
              { label: 'Cobertura nacional', variant: 'media' },
              { label: 'Pronunciamiento político', variant: 'protest' },
            ],
          },
          {
            kind: 'event',
            date: '22 de abril, 2026 — Video del baby monitor revelado',
            quote:
              'El periodista Carlos Jiménez difunde la grabación del baby monitor que captó el momento exacto del feminicidio. La suegra justifica: "Me hizo enojar".',
            context:
              'La grabación de seguridad del departamento muestra a Carolina siendo acribillada por su suegra. En el audio se escucha a Erika María decir: "Nada, solo me hizo enojar. Tu familia soy yo y ella...". El video revela la frialdad con la que fue ejecutada la exreina de belleza y muestra que Alejandro presenció el ataque. El video se vuelve viral y desata indignación nacional. Ese mismo día, Milenio, Telediario y otros medios publican los primeros reportajes exhaustivos del caso. El padre de Carolina exige justicia y pide que caiga todo el peso de la ley.',
            sources: [
              {
                label: 'Telediario — Video revelado',
                url: 'https://www.telediario.mx/policia/caso-carolina-flores-gomez-suegra-le-disparo-revelan-video',
              },
              {
                label: 'Milenio',
                url: 'https://www.milenio.com/policia/carolina-flores-exreina-belleza-hallada-muerta-polanco',
              },
              {
                label: 'Heraldo — Últimos mensajes',
                url: 'https://heraldodemexico.com.mx/nacional/2026/4/22/a-esto-le-tenia-tanto-miedo-los-ultimos-mensajes-de-la-exreina-de-belleza-carolina-flores-asesinada-800178.html',
              },
            ],
            tags: [
              { label: 'Video prueba', variant: 'evidence' },
              { label: 'Viral nacional', variant: 'media' },
              { label: 'Indignación pública', variant: 'protest' },
            ],
          },
          {
            kind: 'event',
            date: '22 de abril, 2026 — Últimos mensajes de Carolina',
            quote:
              'Se revelan las últimas publicaciones de Carolina en TikTok: "¿A esto le tenía tanto miedo?"',
            context:
              'En sus últimos videos, Carolina aparecía con su hijo y su pareja, mostrando orgullosa su vida familiar. En uno escribió: "Tú que vas a saber de amor si nunca te subieron los pies así". En otro, con la frase "¿A esto le tenía tanto miedo?", mostraba a su bebé y a Alejandro. Familiares revelan que Carolina ya había manifestado temor hacia su suegra y que la relación estaba deteriorada desde hacía tiempo.',
            sources: [
              {
                label: 'Heraldo de México',
                url: 'https://heraldodemexico.com.mx/nacional/2026/4/22/a-esto-le-tenia-tanto-miedo-los-ultimos-mensajes-de-la-exreina-de-belleza-carolina-flores-asesinada-800178.html',
              },
            ],
            tags: [
              { label: 'Redes sociales', variant: 'background' },
              { label: 'Señales de alerta', variant: 'femicide' },
            ],
          },
          {
            kind: 'event',
            date: '23 de abril, 2026 — Fiscalía confirma orden y detalles del arma',
            quote:
              'FGJCDMX confirma que la orden de aprehensión está en curso y que el arma del crimen fue una pistola calibre 9 mm.',
            context:
              'La Fiscalía capitalina informa que agentes de la PDI rastrean a Erika María. El Ministerio Público de la Fiscalía de Investigación del Delito de Feminicidio ya cuenta con el mandamiento judicial. El caso se investiga bajo protocolo de feminicidio. Se detectan inconsistencias en el testimonio de Alejandro, y la Fiscalía no descarta investigarlo también.',
            sources: [
              {
                label: 'Milenio',
                url: 'https://www.milenio.com/policia/libran-orden-aprehension-erika-n-feminicidio-carolina-flores',
              },
              {
                label: 'El Financiero',
                url: 'https://www.elfinanciero.com.mx/cdmx/2026/04/23/feminicidio-de-carolina-flores-exreina-de-belleza-su-suegra-la-habria-asesinado-en-polanco/',
              },
              {
                label: 'La Crónica de Hoy',
                url: 'https://www.cronica.com.mx/escenario/2026/04/24/feminicidio-de-carolina-flores-la-razon-del-desprecio-de-su-suegra-que-termino-en-tragedia-en-polanco/',
              },
            ],
            tags: [
              { label: 'Confirmación fiscalía', variant: 'legal' },
              { label: 'Arma 9mm', variant: 'evidence' },
            ],
          },
          {
            kind: 'event',
            date: '24 de abril, 2026 — Perfil de Erika María y cobertura internacional',
            quote:
              'Medios internacionales como People, The Daily Beast y SEMANA cubren el caso. Se revela que Erika María fue candidata a regidora en Ensenada en 2016.',
            context:
              'People publica: "Beauty Queen Found Dead from Gunshot in Mexico City Apartment". The Daily Beast y SEMANA también cubren ampliamente el caso. La revista SEMANA publica un perfil detallado: "De candidata política a prófuga: ella es Érika Herrera, la suegra de Carolina Flores". Se revela su pasado como candidata del PRD a regidora en Ensenada en 2016. La Fiscalía de Baja California ofrece cooperación con las autoridades capitalinas.',
            sources: [
              {
                label: 'People',
                url: 'https://people.com/beauty-queen-shot-dead-family-member-eyed-11956264',
              },
              {
                label: 'Revista SEMANA',
                url: 'https://www.semana.com/gente/articulo/de-candidata-politica-a-profuga-ella-es-erika-herrera-la-suegra-de-carolina-flores-buscada-por-el-feminicidio-en-polanco/202600/',
              },
            ],
            tags: [
              { label: 'Perfil de la acusada', variant: 'background' },
              { label: 'Cobertura internacional', variant: 'media' },
            ],
          },
          {
            kind: 'event',
            date: '27 de abril, 2026 — Orden de arresto internacional',
            quote:
              'La Fiscalía CDMX emite orden de arresto internacional contra Erika María. Se activa la ficha roja de Interpol.',
            context:
              'Tras confirmar que Erika huyó del país, la Fiscalía General de la República (FGR) gestiona la ficha roja de Interpol. Se descubre que Erika huyó primero a Centroamérica y posteriormente a Venezuela, específicamente a Caracas, donde buscó refugio. La alerta migratoria en México ya estaba activa desde días antes.',
            sources: [
              {
                label: 'Wikipedia',
                url: 'https://en.wikipedia.org/wiki/Killing_of_Carolina_Flores_G%C3%B3mez',
              },
              {
                label: 'Milenio',
                url: 'https://www.milenio.com/policia/asesinato-carolina-flores-exreina-belleza-hallada-polanco-esto-sabemos',
              },
            ],
            tags: [
              { label: 'Interpol', variant: 'legal' },
              { label: 'Ficha roja', variant: 'legal' },
            ],
          },
          {
            kind: 'event',
            date: '29 de abril, 2026 — Detención en Venezuela',
            quote:
              'Erika María Guadalupe N es detenida en Venezuela tras ser localizada por autoridades locales con apoyo de Interpol.',
            context:
              'La Fiscalía capitalina confirma la detención de Erika María en territorio venezolano. Su localización fue posible gracias a las gestiones de la FGR para obtener la ficha roja de Interpol. Las autoridades mexicanas inician los trámites para formalizar su extradición a México. La detención representa un avance significativo en el caso, aunque el proceso de extradición podría tomar semanas o meses dependiendo de los procedimientos diplomáticos entre México y Venezuela.',
            sources: [
              {
                label: 'Milenio — Captura en Venezuela',
                url: 'https://www.milenio.com/policia/asesinato-carolina-flores-exreina-belleza-hallada-polanco-esto-sabemos',
              },
              {
                label: 'Wikipedia',
                url: 'https://en.wikipedia.org/wiki/Killing_of_Carolina_Flores_G%C3%B3mez',
              },
            ],
            tags: [
              { label: 'Detenida', variant: 'capture' },
              { label: 'Extradición pendiente', variant: 'legal' },
            ],
          },
          {
            kind: 'event',
            date: 'Abril 2026 — Protestas y justicia para Carolina',
            quote:
              'Colectivos feministas y familiares organizan protestas. #JusticiaParaCarolina se vuelve tendencia nacional en redes sociales.',
            context:
              'El hashtag #JusticiaParaCarolina se viraliza en X (Twitter) y otras plataformas, promovido por grupos feministas que buscan visibilizar que la violencia contra las mujeres ocurre incluso en los círculos familiares más cercanos. Las protestas exigen que el crimen no quede impune y cuestionan el papel de Alejandro, cuya demora en denunciar y presunta inacción generan un intenso debate público sobre complicidad y violencia vicaria. Carolina es trasladada a Baja California para su sepelio.',
            sources: [
              {
                label: 'Wikipedia',
                url: 'https://en.wikipedia.org/wiki/Killing_of_Carolina_Flores_G%C3%B3mez',
              },
            ],
            tags: [
              { label: 'Protestas', variant: 'protest' },
              { label: 'Tendencia nacional', variant: 'media' },
            ],
          },
        ],
      },
      {
        label: 'Mayo 2026 — Proceso de extradición',
        items: [
          {
            kind: 'event',
            date: 'Mayo 2026 — En desarrollo',
            quote:
              'Erika María permanece detenida en Venezuela mientras se gestiona su extradición a México para enfrentar el proceso por feminicidio.',
            context:
              'Las autoridades mexicanas, a través de la FGR y la Fiscalía CDMX, trabajan en los trámites diplomáticos necesarios para la extradición. El caso ha abierto un debate nacional sobre dinámicas familiares tóxicas, la interferencia de los padres en las relaciones de pareja y la violencia contra las mujeres. Se espera que en las próximas semanas avancen las gestiones para que Erika María sea puesta a disposición de las autoridades mexicanas. El bebé de Carolina queda bajo resguardo de la familia extendida.',
            sources: [
              {
                label: 'Milenio',
                url: 'https://www.milenio.com/policia/asesinato-carolina-flores-exreina-belleza-hallada-polanco-esto-sabemos',
              },
              {
                label: 'Wikipedia',
                url: 'https://en.wikipedia.org/wiki/Killing_of_Carolina_Flores_G%C3%B3mez',
              },
            ],
            tags: [
              { label: 'Extradición en proceso', variant: 'legal' },
              { label: 'Debate nacional', variant: 'protest' },
            ],
          },
        ],
      },
    ],
    footerSources:
      'Cronología documentada al 5 de mayo de 2026 · Fuentes: Milenio, Telediario, El Financiero, La Crónica de Hoy, El Heraldo de México, People, The Daily Beast, Revista SEMANA, Wikipedia',
    status: 'published',
  },
]

export function getInvestigacionBySlug(slug: string): Investigacion | undefined {
  return investigaciones.find((i) => i.slug === slug)
}
