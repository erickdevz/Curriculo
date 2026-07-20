const translations = {
  pt: {
    headerLabel: 'Desenvolvedor Fullstack',
    tagline: 'Automatizo trabalho manual com software — hiperautomação e integração de sistemas.',
    availability: 'Disponível para atuação 100% remota, período integral',
    ctaProjects: 'Ver projetos',
    ctaResume: 'Baixar currículo (PDF)',

    // Section titles
    sec01: 'Sobre',
    secAuto: 'O que eu automatizo',
    sec02: 'Habilidades',
    sec03: 'Experiência',
    sec04: 'Projetos',
    sec05: 'Formação',

    labelProblem: 'Problema',
    labelSolution: 'Solução',
    labelResult: 'Resultado',

    // Summary
    summary: [
      { text: 'Desenvolvedor ' },
      { text: 'Fullstack', bold: true },
      { text: ' focado em transformar trabalho manual repetitivo em ' },
      { text: 'processos automatizados e sistemas integrados', bold: true },
      { text: '. Atuo atualmente na ' },
      { text: 'iPlanus', bold: true },
      { text: ', no desenvolvimento das plataformas ' },
      { text: 'Track e GeTerr', bold: true },
      { text: ' — voltadas à fiscalização e à melhoria da assistência a produtores rurais —, com backend, frontend/mobile e infraestrutura containerizada. Sou bolsista de ' },
      { text: 'iniciação científica pela UFV', bold: true },
      { text: ', em parceria com a iPlanus, com bolsa FAPEMIG na modalidade Empreendedores — Desenvolvimento em Ciência, Tecnologia e Inovação. Uso ' },
      { text: 'IA no fluxo de desenvolvimento', bold: true },
      { text: ' — geração e revisão de código, testes e documentação — sempre com ' },
      { text: 'revisão crítica e validação por testes', bold: true },
      { text: '. Trabalho com a tecnologia que cada problema pede: minha stack aparece nos projetos, não no meu título.' },
    ],

    // What I automate
    automations: [
      {
        problem: 'Documentar uma frota de até 300 microsserviços manualmente consumia horas de trabalho repetitivo a cada atualização de API.',
        solution: 'Criei um CLI que lê as especificações OpenAPI e gera a documentação automaticamente, com apoio de LLM, workers concorrentes e modo de retomada.',
        result: 'O processo deixou de ser manual e virou o padrão adotado pela frota de microsserviços da empresa.',
      },
      {
        problem: 'Configurar o acesso à VPN corporativa em cada máquina era um processo manual, repetido a cada novo integrante da equipe.',
        solution: 'Automatizei a configuração com Ansible, usando roles idempotentes e gestão de segredos via ansible-vault.',
        result: 'O acesso à infraestrutura passou a ser padronizado e reproduzível, sem passos manuais.',
      },
      {
        problem: 'Clientes freelance dependiam de tarefas manuais recorrentes para mover dados entre sistemas que não conversavam entre si.',
        solution: 'Integrei os sistemas com automações low-code (Power Automate e Make) e migrei essas automações para código próprio quando fazia sentido.',
        result: 'Tarefas manuais recorrentes viraram fluxos automáticos entre sistemas, sem depender de operação humana repetitiva.',
      },
    ],

    // Skills
    skills: [
      { cat: 'Linguagens', items: 'Python, JavaScript/TypeScript, Go, Java, PHP, SQL' },
      { cat: 'Backend & APIs', items: 'FastAPI, NestJS, Spring Boot, REST, OpenAPI/Swagger, JWT, microsserviços' },
      { cat: 'Automação & Integração', items: 'Scripts Python, CLIs, cron/jobs, Ansible, Power Automate, Make' },
      { cat: 'Frontend', items: 'Next.js, React, Flutter, Tailwind CSS' },
      { cat: 'Dados & Infraestrutura', items: 'PostgreSQL, MongoDB, Prisma, Docker, CI/CD, Vercel, Railway' },
      { cat: 'IA no fluxo de dev', items: 'Geração e revisão de código, testes, documentação, prototipagem' },
    ],

    // Experience
    jobs: [
      {
        company: 'iPlanus',
        role: 'Desenvolvedor Fullstack',
        date: 'Maio de 2026 — Atual',
        location: 'Viçosa, MG · Remoto/distribuído',
        bullets: [
          { pre: 'Desenvolvo as plataformas ', bold: 'Track e GeTerr', post: ', voltadas à fiscalização e à melhoria da assistência a produtores rurais' },
          { pre: 'Criei o ', bold: 'microservice-docgen', post: ', um CLI que automatiza a documentação de até 300 microsserviços a partir de especificações OpenAPI, com apoio de LLM' },
          { pre: 'Automatizei a configuração da ', bold: 'VPN corporativa (NetBird) via Ansible', post: ', com roles idempotentes e gestão de segredos via ansible-vault' },
          { pre: 'Implementei uma coleção de ', bold: 'testes automatizados para 28 endpoints FastAPI', post: ', com propagação automática de token de autenticação' },
          { pre: 'Incorporei IA ao fluxo de desenvolvimento', bold: ' (geração e revisão de código, testes e documentação)', post: ', sempre com revisão crítica e validação por testes' },
        ],
      },
      {
        company: 'Freelancer e Projetos Próprios',
        role: 'Desenvolvedor Fullstack',
        date: '2023 — Maio de 2026',
        location: 'Autônomo',
        bullets: [
          { pre: 'Desenvolvi aplicações web e APIs REST em ', bold: 'Java (Spring Boot) e JavaScript/TypeScript', post: ', do levantamento de requisitos ao deploy' },
          { pre: 'Automatizei processos com ferramentas ', bold: 'low-code (Power Automate e Make)', post: ', integrando sistemas distintos e reduzindo tarefas manuais recorrentes' },
          { pre: 'Migrei automações low-code para ', bold: 'código próprio', post: ', desacoplando backend e capturando chamadas de API' },
        ],
      },
    ],

    // Projects (unchanged in this stage — reworked in stage 3)
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
    eduSub1: 'UniViçosa — previsão de conclusão em agosto de 2027',

    eduLabel2: 'Iniciação Científica',
    eduTitle2: 'Bolsista FAPEMIG — Empreendedores: Desenvolvimento em Ciência, Tecnologia e Inovação',
    eduSub2: 'UFV em parceria com a iPlanus — desde junho de 2026',

    eduLabel3: 'Cursos Complementares',
    eduTitle3: 'Infraestrutura como código e automação',
    eduSub3: 'Energisa · Pópulos · Git/GitHub · Terraform · Docker',

    // Footer
    footerLang1: 'PT 🇧🇷',
    footerLang2: 'EN',
    footerLang3: 'ES',
    nativeLang: 'PT 🇧🇷',
  },

  en: {
    headerLabel: 'Fullstack Developer',
    tagline: 'I automate manual work with software — hyperautomation and systems integration.',
    availability: 'Available for 100% remote work, full-time',
    ctaProjects: 'View projects',
    ctaResume: 'Download résumé (PDF)',

    sec01: 'About',
    secAuto: 'What I automate',
    sec02: 'Skills',
    sec03: 'Experience',
    sec04: 'Projects',
    sec05: 'Education',

    labelProblem: 'Problem',
    labelSolution: 'Solution',
    labelResult: 'Result',

    summary: [
      { text: 'Fullstack developer', bold: true },
      { text: ' focused on turning repetitive manual work into ' },
      { text: 'automated processes and integrated systems', bold: true },
      { text: '. I currently work at ' },
      { text: 'iPlanus', bold: true },
      { text: ', building ' },
      { text: 'Track and GeTerr', bold: true },
      { text: ' — platforms for oversight and improved assistance to rural producers — across backend, frontend/mobile and containerized infrastructure. I hold an ' },
      { text: 'undergraduate research scholarship at UFV', bold: true },
      { text: ', in partnership with iPlanus, through a FAPEMIG grant under the Entrepreneurs — Science, Technology and Innovation Development track. I use ' },
      { text: 'AI in my development workflow', bold: true },
      { text: ' — code generation and review, testing and documentation — always with ' },
      { text: 'critical review and test validation', bold: true },
      { text: '. I work with whatever technology the problem calls for: my stack shows up in the projects, not in my title.' },
    ],

    automations: [
      {
        problem: 'Documenting a fleet of up to 300 microservices by hand ate hours of repetitive work with every API update.',
        solution: 'I built a CLI that reads OpenAPI specs and generates the documentation automatically, with LLM support, concurrent workers and resume mode.',
        result: "Documentation stopped being manual and became the standard adopted across the company's microservice fleet.",
      },
      {
        problem: 'Setting up VPN access on every machine was a manual process, repeated for each new team member.',
        solution: 'I automated the setup with Ansible, using idempotent roles and secret management via ansible-vault.',
        result: 'Infrastructure access became standardized and reproducible, with no manual steps.',
      },
      {
        problem: "Freelance clients relied on recurring manual work to move data between systems that didn't talk to each other.",
        solution: 'I integrated the systems with low-code automation (Power Automate and Make), and migrated it to custom code when it made sense.',
        result: 'Recurring manual tasks became automatic flows between systems, with no repetitive human operation.',
      },
    ],

    skills: [
      { cat: 'Languages', items: 'Python, JavaScript/TypeScript, Go, Java, PHP, SQL' },
      { cat: 'Backend & APIs', items: 'FastAPI, NestJS, Spring Boot, REST, OpenAPI/Swagger, JWT, microservices' },
      { cat: 'Automation & Integration', items: 'Python scripts, CLIs, cron/jobs, Ansible, Power Automate, Make' },
      { cat: 'Frontend', items: 'Next.js, React, Flutter, Tailwind CSS' },
      { cat: 'Data & Infrastructure', items: 'PostgreSQL, MongoDB, Prisma, Docker, CI/CD, Vercel, Railway' },
      { cat: 'AI in the dev workflow', items: 'Code generation & review, testing, documentation, prototyping' },
    ],

    jobs: [
      {
        company: 'iPlanus',
        role: 'Fullstack Developer',
        date: 'May 2026 — Present',
        location: 'Viçosa, MG · Remote/distributed',
        bullets: [
          { pre: 'Build the ', bold: 'Track and GeTerr', post: ' platforms, for oversight and improved assistance to rural producers' },
          { pre: 'Built ', bold: 'microservice-docgen', post: ', a CLI that automates documentation for up to 300 microservices from OpenAPI specs, with LLM support' },
          { pre: 'Automated ', bold: 'corporate VPN setup (NetBird) via Ansible', post: ', with idempotent roles and secret management via ansible-vault' },
          { pre: 'Implemented an automated ', bold: 'test suite covering 28 FastAPI endpoints', post: ', with automatic auth token propagation' },
          { pre: 'Brought AI into the development workflow', bold: ' (code generation and review, testing, documentation)', post: ', always with critical review and test validation' },
        ],
      },
      {
        company: 'Freelance & Independent Projects',
        role: 'Fullstack Developer',
        date: '2023 — May 2026',
        location: 'Self-employed',
        bullets: [
          { pre: 'Built web apps and REST APIs in ', bold: 'Java (Spring Boot) and JavaScript/TypeScript', post: ', from requirements to deploy' },
          { pre: 'Automated processes with ', bold: 'low-code tools (Power Automate and Make)', post: ', integrating separate systems and cutting recurring manual work' },
          { pre: 'Migrated low-code automations to ', bold: 'custom code', post: ', decoupling the backend and capturing API calls' },
        ],
      },
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
    eduSub1: 'UniViçosa — expected graduation: August 2027',

    eduLabel2: 'Undergraduate Research',
    eduTitle2: 'FAPEMIG Scholarship — Entrepreneurs: Science, Technology and Innovation Development',
    eduSub2: 'UFV in partnership with iPlanus — since June 2026',

    eduLabel3: 'Additional Courses',
    eduTitle3: 'Infrastructure as code and automation',
    eduSub3: 'Energisa · Pópulos · Git/GitHub · Terraform · Docker',

    footerLang1: 'PT 🇧🇷',
    footerLang2: 'EN',
    footerLang3: 'ES',
    nativeLang: 'EN',
  },
}

export default translations
