import { useState, useEffect, useRef } from 'react'
import translations from './i18n'

const styles = `
  :root {
    --bg: #0a0a0f;
    --border: #1e1e2e;
    --accent: #00ff88;
    --accent2: #ff6b35;
    --accent3: #7c3aed;
    --text: #e8e8f0;
    --muted: #666680;
    --card: #13131d;
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Syne', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 999;
    opacity: 0.4;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,255,136,0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,255,136,0.03) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
    z-index: 0;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  .fade-lang {
    animation: fadeIn 0.3s ease both;
  }

  /* --- Responsive layout helpers (override inline where needed) --- */
  .wrapper {
    max-width: 900px;
    margin: 0 auto;
    padding: 60px 40px;
    position: relative;
    z-index: 1;
  }

  .header {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 40px;
    align-items: end;
  }

  .contactBlock a:hover {
    color: var(--accent);
  }

  .skillsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }

  .projectsGrid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 16px;
  }

  .featuredCard {
    grid-column: span 3;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
    align-items: start;
  }

  .featuredRight {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 18px;
    border-left: 1px solid var(--border);
  }

  .eduGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  @media (max-width: 900px) {
    .wrapper { padding: 44px 22px; }
    .header { gap: 28px; }
    .featuredRight { padding-left: 14px; }
  }

  @media (max-width: 720px) {
    .header {
      grid-template-columns: 1fr !important;
      align-items: start !important;
    }
    .contactBlock {
      align-items: flex-start !important;
      margin-top: 18px;
    }
    .skillsGrid { grid-template-columns: repeat(2, 1fr) !important; }
    .projectsGrid { grid-template-columns: 1fr !important; }
    .featuredCard { grid-template-columns: 1fr !important; }
    .featuredRight {
      border-left: none;
      padding-left: 0;
      border-top: 1px solid var(--border);
      padding-top: 14px;
      margin-top: 6px;
    }
  }

  @media (max-width: 520px) {
    .wrapper { padding: 36px 16px; }
    .skillsGrid { grid-template-columns: 1fr !important; }
    .eduGrid { grid-template-columns: 1fr !important; }
  }
`

// --- Rich text renderer ---
function RichText({ parts, style }) {
  return (
    <span style={style}>
      {parts.map((p, i) =>
        p.bold
          ? <strong key={i} style={{ color: 'var(--accent)', fontWeight: 700 }}>{p.text}</strong>
          : <span key={i}>{p.text}</span>
      )}
    </span>
  )
}

export default function App() {
  const [lang, setLang] = useState('pt')
  const [mouse, setMouse] = useState({ x: -999, y: -999 })
  const t = translations[lang]

  useEffect(() => {
    const el = document.createElement('style')
    el.textContent = styles
    document.head.appendChild(el)
    return () => document.head.removeChild(el)
  }, [])

  useEffect(() => {
    const handler = e => setMouse({ x: e.clientX, y: e.clientY })
    window.addEventListener('mousemove', handler)
    return () => window.removeEventListener('mousemove', handler)
  }, [])

  const s = {
    // Layout
    wrapper: { position: 'relative', zIndex: 1 },

    // Lang toggle
    langToggle: {
      position: 'fixed', top: 24, right: 24, zIndex: 1000,
      display: 'flex', background: 'var(--card)',
      border: '1px solid var(--border)', borderRadius: 8,
      overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
    },
    langBtn: (active) => ({
      fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 2,
      textTransform: 'uppercase', padding: '8px 16px', border: 'none',
      background: active ? 'rgba(0,255,136,0.1)' : 'transparent',
      color: active ? 'var(--accent)' : 'var(--muted)',
      cursor: 'pointer', transition: 'all 0.2s',
    }),
    langDivider: { width: 1, background: 'var(--border)', alignSelf: 'stretch' },

    // Header
    header: {
      display: 'grid', gridTemplateColumns: '1fr auto', gap: 40,
      alignItems: 'end', marginBottom: 60, paddingBottom: 40,
      borderBottom: '1px solid var(--border)',
      animation: 'fadeUp 0.8s ease both',
    },
    headerLabel: {
      fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 4,
      textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 12,
      display: 'flex', alignItems: 'center', gap: 8,
    },
    labelLine: { display: 'inline-block', width: 20, height: 1, background: 'var(--accent)' },
    h1: {
      fontFamily: "'Syne', sans-serif",
      fontSize: 'clamp(48px, 8vw, 80px)', fontWeight: 800,
      lineHeight: 0.9, letterSpacing: -3, color: 'var(--text)',
    },
    h1span: { display: 'block', color: 'var(--accent)', WebkitTextStroke: '1px var(--accent)' },
    tagline: {
      marginTop: 16, fontFamily: "'Space Mono', monospace", fontSize: 11,
      color: 'var(--muted)', letterSpacing: 2, textTransform: 'uppercase',
    },
    contactBlock: { display: 'flex', flexDirection: 'column', gap: 8, alignItems: 'flex-end' },
    contactLink: {
      fontFamily: "'Space Mono', monospace", fontSize: 11, color: 'var(--muted)',
      textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 6,
      transition: 'color 0.2s',
    },

    // Section
    section: (delay) => ({ marginBottom: 52, animation: `fadeUp 0.8s ease ${delay}s both` }),
    sectionHeader: { display: 'flex', alignItems: 'center', gap: 16, marginBottom: 28 },
    sectionNum: { fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--accent)', opacity: 0.6 },
    sectionH2: {
      fontFamily: "'Space Mono', monospace", fontSize: 10,
      letterSpacing: 4, textTransform: 'uppercase', color: 'var(--muted)',
    },
    sectionLine: { flex: 1, height: 1, background: 'var(--border)' },

    // Summary
    summaryText: {
      fontSize: 15, lineHeight: 1.7, color: '#b0b0c8', maxWidth: 680,
      borderLeft: '2px solid var(--accent)', paddingLeft: 20,
    },

    // Skills
    skillsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 },
    skillPill: {
      background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 6,
      padding: '14px 16px', cursor: 'default',
    },
    skillCat: {
      fontFamily: "'Space Mono', monospace", fontSize: 8, letterSpacing: 3,
      textTransform: 'uppercase', color: 'var(--accent)', marginBottom: 6,
    },
    skillItems: { fontSize: 12, color: '#9090a8', lineHeight: 1.5 },

    // Job
    jobCard: {
      background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8,
      padding: '24px 28px', position: 'relative', overflow: 'hidden',
    },
    jobBar: {
      position: 'absolute', left: 0, top: 0, bottom: 0, width: 3, background: 'var(--accent)',
    },
    jobMeta: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 },
    jobCompany: { fontSize: 16, fontWeight: 700, color: 'var(--text)' },
    jobDate: {
      fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--muted)',
      background: 'var(--border)', padding: '3px 8px', borderRadius: 4, whiteSpace: 'nowrap',
    },
    jobRole: {
      fontFamily: "'Space Mono', monospace", fontSize: 10, color: 'var(--accent)',
      letterSpacing: 2, textTransform: 'uppercase', marginBottom: 14,
    },
    bulletList: { listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 },
    bulletItem: { fontSize: 13, color: '#9090a8', lineHeight: 1.5, paddingLeft: 16, position: 'relative' },
    bulletDot: { position: 'absolute', left: 0, color: 'var(--accent)', fontWeight: 700 },

    // Projects
    projectsGrid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 },
    featuredCard: {
      gridColumn: 'span 3', background: 'var(--card)', border: '1px solid var(--border)',
      borderRadius: 8, padding: 20, textDecoration: 'none', color: 'inherit',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20,
    },
    featuredRight: {
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      paddingLeft: 18, borderLeft: '1px solid var(--border)',
    },
    featuredRightText: { fontSize: 12, color: '#8a8ab0', lineHeight: 1.7 },
    projectCard: {
      background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8,
      padding: 20, textDecoration: 'none', color: 'inherit',
      display: 'flex', flexDirection: 'column', gap: 10,
    },
    projectTag: {
      fontFamily: "'Space Mono', monospace", fontSize: 8, letterSpacing: 3,
      textTransform: 'uppercase', color: 'var(--accent2)', marginBottom: 4,
    },
    projectName: { fontSize: 15, fontWeight: 700, color: 'var(--text)', lineHeight: 1.2, marginBottom: 4 },
    projectDesc: { fontSize: 12, color: '#7878a0', lineHeight: 1.5 },
    techTags: { display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 6 },
    techTag: {
      fontFamily: "'Space Mono', monospace", fontSize: 9, color: 'var(--accent)',
      background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)',
      padding: '2px 8px', borderRadius: 3,
    },

    // Education
    eduGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 },
    eduCard: { background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8, padding: 20 },
    eduLabel: {
      fontFamily: "'Space Mono', monospace", fontSize: 8, letterSpacing: 3,
      color: 'var(--accent3)', textTransform: 'uppercase', marginBottom: 8,
    },
    eduTitle: { fontSize: 13, fontWeight: 700, color: 'var(--text)', marginBottom: 4 },
    eduSub: { fontSize: 11, color: 'var(--muted)', fontFamily: "'Space Mono', monospace" },

    // Footer
    footer: {
      marginTop: 60, paddingTop: 30, borderTop: '1px solid var(--border)',
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      animation: 'fadeUp 0.8s ease 0.6s both',
    },
    footerName: { fontSize: 11, color: 'var(--muted)', fontFamily: "'Space Mono', monospace" },
    langBadges: { display: 'flex', gap: 8 },
    langBadge: (active) => ({
      fontFamily: "'Space Mono', monospace", fontSize: 9, letterSpacing: 2,
      textTransform: 'uppercase', padding: '4px 10px', borderRadius: 4,
      border: active ? '1px solid var(--accent)' : '1px solid var(--border)',
      color: active ? 'var(--accent)' : 'var(--muted)',
    }),
  }

  return (
    <>
      {/* Cursor glow */}
      <div style={{
        position: 'fixed', width: 300, height: 300, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(0,255,136,0.06) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 998,
        left: mouse.x, top: mouse.y,
        transform: 'translate(-50%, -50%)',
        transition: 'left 0.05s, top 0.05s',
      }} />

      {/* Lang Toggle */}
      <div style={s.langToggle}>
        <button style={s.langBtn(lang === 'pt')} onClick={() => setLang('pt')}>🇧🇷 PT</button>
        <div style={s.langDivider} />
        <button style={s.langBtn(lang === 'en')} onClick={() => setLang('en')}>🇺🇸 EN</button>
      </div>

      <div style={s.wrapper} className="wrapper fade-lang" key={lang}>

        {/* HEADER */}
        <header style={s.header} className="header">
          <div>
            <div style={s.headerLabel}>
              <span style={s.labelLine} />
              {t.headerLabel}
            </div>
            <h1 style={s.h1}>
              ERICK<span style={s.h1span}>XAVIER</span>
            </h1>
            <p style={s.tagline}>{t.tagline}</p>
          </div>
          <div style={s.contactBlock} className="contactBlock">
            <a href="mailto:erickxavier180@gmail.com" style={s.contactLink}>erickxavier180@gmail.com</a>
            <a href="https://github.com/erickdevz" target="_blank" rel="noreferrer" style={s.contactLink}>github.com/erickdevz</a>
            <a href="https://linkedin.com/in/erickpsx" target="_blank" rel="noreferrer" style={s.contactLink}>linkedin.com/in/erickpsx</a>
            <span style={s.contactLink}>+55 (32) 98496-9955</span>
            <span style={s.contactLink}>Viçosa / MG</span>
          </div>
        </header>

        {/* ABOUT */}
        <section style={s.section(0.1)}>
          <div style={s.sectionHeader}>
            <span style={s.sectionNum}>01</span>
            <h2 style={s.sectionH2}>{t.sec01}</h2>
            <div style={s.sectionLine} />
          </div>
          <p style={s.summaryText}>
            <RichText parts={t.summary} />
          </p>
        </section>

        {/* SKILLS */}
        <section style={s.section(0.2)}>
          <div style={s.sectionHeader}>
            <span style={s.sectionNum}>02</span>
            <h2 style={s.sectionH2}>{t.sec02}</h2>
            <div style={s.sectionLine} />
          </div>
          <div style={s.skillsGrid} className="skillsGrid">
            {t.skills.map((sk, i) => (
              <div key={i} style={s.skillPill}>
                <div style={s.skillCat}>{sk.cat}</div>
                <div style={s.skillItems}>{sk.items}</div>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section style={s.section(0.3)}>
          <div style={s.sectionHeader}>
            <span style={s.sectionNum}>03</span>
            <h2 style={s.sectionH2}>{t.sec03}</h2>
            <div style={s.sectionLine} />
          </div>
          <div style={s.jobCard}>
            <div style={s.jobBar} />
            <div style={s.jobMeta}>
              <div style={s.jobCompany}>{t.jobCompany}</div>
              <div style={s.jobDate}>{t.jobDate}</div>
            </div>
            <div style={s.jobRole}>{t.jobRole}</div>
            <ul style={s.bulletList}>
              {t.jobBullets.map((b, i) => (
                <li key={i} style={s.bulletItem}>
                  <span style={s.bulletDot}>›</span>
                  {b.pre}<strong style={{ color: 'var(--text)' }}>{b.bold}</strong>{b.post}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* PROJECTS */}
        <section style={s.section(0.4)}>
          <div style={s.sectionHeader}>
            <span style={s.sectionNum}>04</span>
            <h2 style={s.sectionH2}>{t.sec04}</h2>
            <div style={s.sectionLine} />
          </div>
          <div style={s.projectsGrid} className="projectsGrid">

            {/* City Explorer — featured */}
            <a
              href="https://cityexploreratk.vercel.app/"
              target="_blank"
              rel="noreferrer"
              style={s.featuredCard}
              className="featuredCard"
            >
              <div>
                <div style={s.projectTag}>{t.featuredTag}</div>
                <div style={s.projectName}>{t.featuredName}</div>
                <p style={s.projectDesc}>{t.featuredDesc1}</p>
                <div style={s.techTags}>
                  {['React', 'Next.js', 'Leaflet.js', 'PostgreSQL', 'PostGIS', 'REST APIs'].map(tech => (
                    <span key={tech} style={s.techTag}>{tech}</span>
                  ))}
                </div>
              </div>
              <div style={s.featuredRight} className="featuredRight">
                <p style={s.featuredRightText}>
                  <RichText parts={t.featuredDesc2Right} />
                </p>
              </div>
            </a>

            {/* Syncro */}
            <a href="https://github.com/erickdevz/syncro" target="_blank" rel="noreferrer" style={s.projectCard}>
              <div style={s.projectTag}>{t.proj1Tag}</div>
              <div style={s.projectName}>{t.proj1Name}</div>
              <p style={s.projectDesc}>{t.proj1Desc}</p>
              <div style={s.techTags}>
                {['Spring Boot', 'JWT', 'Docker', 'Flyway'].map(tech => (
                  <span key={tech} style={s.techTag}>{tech}</span>
                ))}
              </div>
            </a>

            {/* Assistência Técnica */}
            <a href="https://github.com/erickdevz/assistencia-tecnica" target="_blank" rel="noreferrer" style={s.projectCard}>
              <div style={s.projectTag}>{t.proj2Tag}</div>
              <div style={s.projectName}>{t.proj2Name}</div>
              <p style={s.projectDesc}>{t.proj2Desc}</p>
              <div style={s.techTags}>
                {['Spring Boot', 'PostgreSQL', 'Swagger', 'Docker'].map(tech => (
                  <span key={tech} style={s.techTag}>{tech}</span>
                ))}
              </div>
            </a>

          </div>
        </section>

        {/* EDUCATION */}
        <section style={s.section(0.5)}>
          <div style={s.sectionHeader}>
            <span style={s.sectionNum}>05</span>
            <h2 style={s.sectionH2}>{t.sec05}</h2>
            <div style={s.sectionLine} />
          </div>
          <div style={s.eduGrid} className="eduGrid">
            <div style={s.eduCard}>
              <div style={s.eduLabel}>{t.eduLabel1}</div>
              <div style={s.eduTitle}>{t.eduTitle1}</div>
              <div style={s.eduSub}>{t.eduSub1}</div>
            </div>
            <div style={s.eduCard}>
              <div style={s.eduLabel}>{t.eduLabel2}</div>
              <div style={s.eduTitle}>{t.eduTitle2}</div>
              <div style={s.eduSub}>{t.eduSub2}</div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer style={s.footer}>
          <span style={s.footerName}>erick xavier — erickxavier180@gmail.com</span>
          <div style={s.langBadges}>
            {['PT 🇧🇷', 'EN', 'ES'].map(l => (
              <span key={l} style={s.langBadge(l === t.nativeLang)}>{l}</span>
            ))}
          </div>
        </footer>

      </div>
    </>
  )
}
