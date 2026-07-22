/**
 * @typedef {Object} LocalizedText
 * @property {string} pt
 * @property {string} en
 */

/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} title
 * @property {LocalizedText} problem  - one sentence, what was broken/missing
 * @property {LocalizedText} result   - one sentence, the concrete outcome
 * @property {string[]} stack
 * @property {string} [repoUrl]
 * @property {string} [demoUrl]
 * @property {LocalizedText} [status] - e.g. "in development", omitted when shipped
 * @property {boolean} [automation]   - true = gets the automation highlight
 */

/** @type {Project[]} */
export const projects = [
  {
    id: 'mazehunt',
    title: 'MazeHunt',
    problem: {
      pt: 'Criadores de conteúdo que vivem de links de afiliado perdem tempo garimpando promoções manualmente em várias fontes, todos os dias.',
      en: 'Content creators who rely on affiliate links waste time manually hunting for deals across multiple sources, every day.',
    },
    result: {
      pt: 'Coleta automatizada roda até 3× ao dia por fonte, com expurgo automático de ofertas após 7 dias — sem intervenção manual.',
      en: 'Automated collection runs up to 3× a day per source, with expired deals purged automatically after 7 days — no manual intervention.',
    },
    stack: ['PHP', 'CodeIgniter 4', 'PostgreSQL'],
    repoUrl: 'https://github.com/erickdevz/MazeHunt',
    automation: true,
  },
  {
    id: 'fineduc',
    title: 'FINeduc / CDBeduc',
    problem: {
      pt: 'Ensinar simulação bancária na prática exige um ambiente realista — banco, loja e painel administrativo — sem esperar meses para ver juros reais se acumularem.',
      en: 'Teaching banking simulation in practice needs a realistic environment — bank, store and admin panel — without waiting months for real interest to accrue.',
    },
    result: {
      pt: 'Motor de simulação financeira com compressão de tempo, três aplicações Next.js integradas a um backend NestJS/Prisma/PostgreSQL, com deploy em Railway e Vercel.',
      en: 'Financial simulation engine with time compression, three Next.js apps integrated with a NestJS/Prisma/PostgreSQL backend, deployed on Railway and Vercel.',
    },
    stack: ['Next.js', 'NestJS', 'Prisma', 'PostgreSQL'],
  },
  {
    id: 'city-explorer',
    title: 'City Explorer (XPLOR)',
    problem: {
      pt: 'Explorar uma cidade a pé raramente vem com contexto, progresso ou motivação para continuar descobrindo lugares novos.',
      en: 'Exploring a city on foot rarely comes with context, progress, or motivation to keep discovering new places.',
    },
    result: {
      pt: 'App gamificado com XP, missões por localização e conquistas, usando Next.js, PostgreSQL e Leaflet para geolocalização e modelagem de dados espaciais.',
      en: 'Gamified app with XP, location-based missions and achievements, using Next.js, PostgreSQL and Leaflet for geolocation and spatial data modeling.',
    },
    stack: ['Next.js', 'PostgreSQL', 'Leaflet'],
    demoUrl: 'https://cityexploreratk.vercel.app/',
  },
  {
    id: 'lol-quiz',
    title: 'LoL Quiz',
    problem: {
      pt: 'Rankings de quiz que nunca expiram acumulam dados obsoletos e perdem a graça da competição por temporada.',
      en: "Quiz rankings that never expire pile up stale data and lose the point of competing season by season.",
    },
    result: {
      pt: 'Autenticação e ranking com expiração automática de registros via índice TTL, com deploy contínuo na Vercel.',
      en: 'Authentication and ranking with automatic record expiration via a TTL index, with continuous deploy on Vercel.',
    },
    stack: ['Next.js', 'TypeScript'],
    repoUrl: 'https://github.com/erickdevz/lol-quiz',
  },
  {
    id: 'assistencia-tecnica',
    title: 'Assistência Técnica API',
    problem: {
      pt: 'Fluxos de atendimento técnico (clientes, técnicos, ordens de serviço) precisam de uma base bem modelada antes de qualquer automação em cima deles.',
      en: 'Technical service workflows (clients, technicians, service orders) need a well-modeled data layer before any automation can sit on top of them.',
    },
    result: {
      pt: 'Estrutura de API REST em Java 17 com Spring Boot, PostgreSQL, JPA/Hibernate e Gradle, com modelagem de clientes, técnicos e atendimentos.',
      en: 'REST API structure in Java 17 with Spring Boot, PostgreSQL, JPA/Hibernate and Gradle, modeling clients, technicians and service records.',
    },
    stack: ['Java 17', 'Spring Boot', 'PostgreSQL', 'JPA/Hibernate', 'Gradle'],
    repoUrl: 'https://github.com/erickdevz/ASSISTENCIA_BACKJAVA',
    status: { pt: 'Em desenvolvimento', en: 'In development' },
  },
]
