const cardStyle = {
  background: 'var(--card)', border: '1px solid var(--border)', borderRadius: 8,
  padding: 20, display: 'flex', flexDirection: 'column', gap: 10,
  position: 'relative', overflow: 'hidden',
}

const automationBar = {
  position: 'absolute', left: 0, right: 0, top: 0, height: 3, background: 'var(--accent2)',
}

const titleRow = { display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }

const titleStyle = { fontSize: 15, fontWeight: 700, color: 'var(--text)', lineHeight: 1.2 }

const badgeStyle = {
  fontFamily: "'Space Mono', monospace", fontSize: 8, letterSpacing: 2,
  textTransform: 'uppercase', color: 'var(--accent2)', border: '1px solid var(--accent2)',
  borderRadius: 3, padding: '2px 6px',
}

const statusStyle = {
  fontFamily: "'Space Mono', monospace", fontSize: 8, letterSpacing: 2,
  textTransform: 'uppercase', color: 'var(--muted)', border: '1px solid var(--border)',
  borderRadius: 3, padding: '2px 6px',
}

const labelStyle = (color) => ({
  fontFamily: "'Space Mono', monospace", fontSize: 8, letterSpacing: 3,
  textTransform: 'uppercase', color, marginBottom: 2,
})

const textStyle = { fontSize: 12, color: '#a0a0c0', lineHeight: 1.5 }
const resultTextStyle = { fontSize: 12, color: '#c8c8e0', lineHeight: 1.5, fontWeight: 600 }

const techTags = { display: 'flex', flexWrap: 'wrap', gap: 6 }
const techTag = {
  fontFamily: "'Space Mono', monospace", fontSize: 9, color: 'var(--accent)',
  background: 'rgba(0,255,136,0.08)', border: '1px solid rgba(0,255,136,0.2)',
  padding: '2px 8px', borderRadius: 3,
}

const linkRow = { display: 'flex', gap: 10, marginTop: 4 }
const linkStyle = {
  fontFamily: "'Space Mono', monospace", fontSize: 10, letterSpacing: 1,
  textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none',
  border: '1px solid var(--border)', borderRadius: 4, padding: '6px 10px',
}

export default function ProjectCard({ project, lang, labels }) {
  const { title, problem, result, stack, repoUrl, demoUrl, status, automation } = project

  return (
    <div style={cardStyle}>
      {automation && <div style={automationBar} aria-hidden="true" />}

      <div style={titleRow}>
        <div style={titleStyle}>{title}</div>
        {automation && <span style={badgeStyle}>{labels.automationBadge}</span>}
        {status && <span style={statusStyle}>{status[lang]}</span>}
      </div>

      <div>
        <div style={labelStyle('var(--muted)')}>{labels.problem}</div>
        <p style={textStyle}>{problem[lang]}</p>
      </div>

      <div style={techTags}>
        {stack.map(tech => (
          <span key={tech} style={techTag}>{tech}</span>
        ))}
      </div>

      <div>
        <div style={labelStyle('var(--accent)')}>{labels.result}</div>
        <p style={resultTextStyle}>{result[lang]}</p>
      </div>

      {(repoUrl || demoUrl) && (
        <div style={linkRow}>
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noreferrer" style={linkStyle}
              aria-label={`${labels.repo}: ${title}`}>
              {labels.repo}
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noreferrer" style={linkStyle}
              aria-label={`${labels.demo}: ${title}`}>
              {labels.demo}
            </a>
          )}
        </div>
      )}
    </div>
  )
}
