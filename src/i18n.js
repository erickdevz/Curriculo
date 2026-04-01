const translations = {
  pt: {
    headerLabel: 'Currículo',
    tagline: 'Analista de Suporte Técnico · Desenvolvedor Java',

    // Section titles
    sec01: 'Sobre',
    sec02: 'Habilidades',
    sec03: 'Experiência',
    sec04: 'Projetos',
    sec05: 'Formação',

    // Summary
    summary: [
      { text: 'Profissional de tecnologia com foco em ' },
      { text: 'suporte técnico, APIs e sistemas corporativos', bold: true },
      { text: '. Experiência prática em análise e resolução de incidentes, integração entre sistemas via ' },
      { text: 'REST (Spring Boot, PostgreSQL)', bold: true },
      { text: ', documentação com ' },
      { text: 'OpenAPI/Swagger', bold: true },
      { text: ' e testes funcionais com ' },
      { text: 'Postman e cURL', bold: true },
      { text: '. Comunicativo e proativo, atua com empatia e visão colaborativa entre times técnicos e de negócio.' },
    ],

    // Skills
    skills: [
      { cat: 'Suporte & Testes',    items: 'N1/N2, Postman, cURL, Logs, Stack Trace, FAQs' },
      { cat: 'APIs & Integrações',  items: 'RESTful, OpenAPI/Swagger, JWT/OAuth2, JSON' },
      { cat: 'Back-End',            items: 'Java 8/11+, Spring Boot, Maven' },
      { cat: 'Banco de Dados',      items: 'PostgreSQL, SQL, Consultas & Joins' },
      { cat: 'DevOps & Plataforma', items: 'Docker, Linux/WSL2, Git/GitHub, Flyway, CI básico' },
      { cat: 'Soft Skills',         items: 'Comunicação clara, empatia, proatividade, colaboração' },
    ],

    // Experience
    jobCompany: 'Freelance / Projetos Acadêmicos',
    jobDate: '2023 — Atual',
    jobRole: 'Desenvolvedor & Suporte Técnico Java',
    jobBullets: [
      { pre: 'Suporte e ', bold: 'análise de erros em APIs REST', post: ' (Spring Boot) com PostgreSQL, tratamento de logs e análise de stack traces' },
      { pre: 'Testes funcionais via ', bold: 'Postman e cURL', post: ' para validação de bugs e integrações entre sistemas' },
      { pre: 'Elaboração de ', bold: 'documentação técnica e FAQs', post: ' (Swagger/OpenAPI) para equipes técnicas e de negócio' },
      { pre: 'Comunicação direta com clientes e colaboração para ', bold: 'correções de bugs e melhorias contínuas', post: '' },
    ],

    // Projects
    featuredTag: '⭐ Destaque',
    featuredName: 'City Explorer — Guia Turístico Gamificado',
    featuredDesc1: 'Aplicação web interativa de exploração urbana com sistema de gamificação (XP, missões por localização e conquistas desbloqueáveis). Mapas com Leaflet.js + React-Leaflet, tiles CartoDB e marcadores customizados.',
    featuredDesc2Right: [
      { text: 'Rotas de API via ' },
      { text: 'Next.js Route Handlers', bold: true },
      { text: ' com PostgreSQL + PostGIS para consultas geoespaciais. Integração com ' },
      { text: 'OpenTripMap e Wikimedia', bold: true },
      { text: ' para dados turísticos reais. Sistema de missões com submissão por usuários e moderação administrativa.' },
    ],

    proj1Tag: 'Gestão',
    proj1Name: 'Syncro — Gestão Integrada',
    proj1Desc: 'Sistema de gestão em Java Spring Boot com PostgreSQL e autenticação JWT. Inclui Flyway, Docker e documentação OpenAPI.',

    proj2Tag: 'Suporte',
    proj2Name: 'Assistência Técnica — Back-End Java',
    proj2Desc: 'API para controle de ordens de serviço e suporte técnico, com autenticação JWT, CRUD completo e logs de atendimento.',

    // Education
    eduLabel1: 'Graduação',
    eduTitle1: 'Tecnólogo em Análise e Desenvolvimento de Sistemas',
    eduSub1: 'UniViçosa — Em andamento',
    eduLabel2: 'Cursos Complementares',
    eduTitle2: 'Full-Stack Developer · Full-Stack JS · Infraestrutura',
    eduSub2: 'SENAI · EBAC · Populos/Energisa',

    // Footer
    footerLang1: 'PT 🇧🇷',
    footerLang2: 'EN',
    footerLang3: 'ES',
    nativeLang: 'PT 🇧🇷',
  },

  en: {
    headerLabel: 'Resume',
    tagline: 'Technical Support Analyst · Java Developer',

    sec01: 'About',
    sec02: 'Skills',
    sec03: 'Experience',
    sec04: 'Projects',
    sec05: 'Education',

    summary: [
      { text: 'Technology professional focused on ' },
      { text: 'technical support, APIs and corporate systems', bold: true },
      { text: '. Hands-on experience in incident analysis and resolution, system integration via ' },
      { text: 'REST (Spring Boot, PostgreSQL)', bold: true },
      { text: ', documentation with ' },
      { text: 'OpenAPI/Swagger', bold: true },
      { text: ' and functional testing with ' },
      { text: 'Postman and cURL', bold: true },
      { text: '. Strong communicator and proactive team player with empathy and a collaborative approach between technical and business teams.' },
    ],

    skills: [
      { cat: 'Support & Testing',   items: 'N1/N2, Postman, cURL, Logs, Stack Trace, FAQs' },
      { cat: 'APIs & Integrations', items: 'RESTful, OpenAPI/Swagger, JWT/OAuth2, JSON' },
      { cat: 'Back-End',            items: 'Java 8/11+, Spring Boot, Maven' },
      { cat: 'Database',            items: 'PostgreSQL, SQL, Queries & Joins' },
      { cat: 'DevOps & Platform',   items: 'Docker, Linux/WSL2, Git/GitHub, Flyway, Basic CI' },
      { cat: 'Soft Skills',         items: 'Clear communication, empathy, proactivity, teamwork' },
    ],

    jobCompany: 'Freelance / Academic Projects',
    jobDate: '2023 — Present',
    jobRole: 'Java Developer & Technical Support',
    jobBullets: [
      { pre: 'Support and ', bold: 'REST API error analysis', post: ' (Spring Boot) with PostgreSQL, log handling and stack trace investigation' },
      { pre: 'Functional testing via ', bold: 'Postman and cURL', post: ' for bug validation and system integrations' },
      { pre: 'Creation of ', bold: 'technical documentation and FAQs', post: ' (Swagger/OpenAPI) for technical and business teams' },
      { pre: 'Direct client communication and cross-team collaboration for ', bold: 'bug fixes and continuous improvements', post: '' },
    ],

    featuredTag: '⭐ Featured',
    featuredName: 'City Explorer — Gamified Tourism Guide',
    featuredDesc1: 'Interactive urban exploration web app with a gamification system (XP, location-based missions and unlockable achievements). Maps powered by Leaflet.js + React-Leaflet, CartoDB tiles and custom markers.',
    featuredDesc2Right: [
      { text: 'API routes via ' },
      { text: 'Next.js Route Handlers', bold: true },
      { text: ' connected to PostgreSQL + PostGIS for geospatial queries. Integration with ' },
      { text: 'OpenTripMap and Wikimedia', bold: true },
      { text: ' for real tourism data. Mission system with user submission flow and administrative moderation.' },
    ],

    proj1Tag: 'Management',
    proj1Name: 'Syncro — Integrated Management',
    proj1Desc: 'Management system in Java Spring Boot with PostgreSQL and JWT authentication. Includes Flyway, Docker and full OpenAPI documentation.',

    proj2Tag: 'Support',
    proj2Name: 'Tech Support — Java Back-End',
    proj2Desc: 'API for service order management and technical support, with JWT auth, full CRUD and attendance logs for full traceability.',

    eduLabel1: 'Degree',
    eduTitle1: 'Technology Degree in Systems Analysis and Development',
    eduSub1: 'UniViçosa — In progress',
    eduLabel2: 'Additional Courses',
    eduTitle2: 'Full-Stack Developer · Full-Stack JS · Infrastructure',
    eduSub2: 'SENAI · EBAC · Populos/Energisa',

    footerLang1: 'PT 🇧🇷',
    footerLang2: 'EN',
    footerLang3: 'ES',
    nativeLang: 'EN',
  },
}

export default translations
