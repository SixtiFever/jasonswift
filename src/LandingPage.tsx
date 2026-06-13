import { Fragment, useEffect } from 'react'
import HeroSkills from './components/HeroSkills'
import SiteNav from './components/SiteNav'
import { PROJECTS } from './data/projects'
import './LandingPage.css'

const MARQUEE_ITEMS = [
  'React',
  'TypeScript',
  'React Native',
  'Firebase',
  'Expo',
  'Microsoft 365',
  'React Flow',
  'Product Design',
]

const SKILL_GROUPS = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', strong: true },
      { name: 'React Native', strong: true },
      { name: 'TypeScript', strong: true },
      { name: 'Expo' },
      { name: 'React Flow' },
      { name: 'React Konva' },
      { name: 'React Native Vision Camera' },
      { name: 'React Native Video' },
    ],
  },
  {
    title: 'Backend & Platform',
    skills: [
      { name: 'Firebase', strong: true },
      { name: 'Microsoft 365', strong: true },
      { name: 'Git / GitHub', strong: true },
      { name: 'REST APIs' },
      { name: 'Node.js' },
      { name: 'Product Design' },
      { name: 'Rapid Prototyping' },
      { name: 'Front-end Engineering' },
    ],
  },
  {
    title: 'Process & Craft',
    skills: [
      { name: 'Idea to Prototype', strong: true },
      { name: 'Creative Problem Solving', strong: true },
      { name: 'Agile / Scrum' },
      { name: 'UX Design' },
      { name: 'Visual Quality' },
      { name: 'User-facing Features' },
      { name: 'Tech for Good' },
      { name: 'Start-ups' },
    ],
  },
]


const CONTACT_LINKS = [
  { label: 'View CV (coming soon)', href: '#' },
  { label: 'Thoughts', href: '#' },
  { label: 'LinkedIn', href: '#' },
  { label: 'GitHub', href: '#' },
]

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M3 7h8M8 4l3 3-3 3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path
        d="M7 1v8M4 7l3 3 3-3M2 12h10"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function MarqueeTrack() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS]
  return (
    <div className="marquee-track">
      {items.map((item, index) => (
        <Fragment key={`${item}-${index}`}>
          <span>{item}</span>
          <span className="dot">✦</span>
        </Fragment>
      ))}
    </div>
  )
}

export default function LandingPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.06 },
    )

    document.querySelectorAll('section').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <SiteNav />

      <div className="hero">
        <div className="hero-content">
          <div className="hero-main">
            <h1>
              Creative{' '}
              <span className="outline">Product</span>{' '}
              <span className="violet">Builder.</span>
            </h1>
            <p className="hero-desc">
              I'm a creative who enjoys bringing concepts to life through code.
              Currently a <strong>Microsoft 365 consultant</strong> — in my spare time I build mobile apps
              from idea to prototype.
            </p>
            <div className="hero-actions">
              <a href="#portfolio" className="btn-fill">
                Personal Projects
                <ArrowIcon />
              </a>
              <a href="#contact" className="btn-ghost">
                <DownloadIcon />
                View CV
              </a>
            </div>
          </div>
          <HeroSkills />
        </div>
        <div className="hero-marquee">
          <MarqueeTrack />
        </div>
      </div>

      <section id="about">
        <div className="about-left">
          <p className="section-eyebrow">About me</p>
          <h2 className="section-heading">
            Programming is
            <br />
            <em>creative</em>.
          </h2>
          <p
            className="about-text"
            style={{
              color: 'var(--muted)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginBottom: '1.2rem',
            }}
          >
            I currently work as a Microsoft 365 consultant at a fast-growing digital
            transformation consultancy. In my spare time I enjoy developing mobile apps, each
            built from the ground up —{' '}
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>
              idea to prototype
            </strong>{' '}
            in a React Native, TypeScript, and Firebase stack.
          </p>
          <p
            className="about-text"
            style={{
              color: 'var(--muted)',
              fontSize: '1.05rem',
              lineHeight: 1.75,
              marginBottom: '1.2rem',
            }}
          >
            I believe programming is one of the most creative activities for humans — the
            medium is numbers and logic instead of paint brushes and notes. I've worked across{' '}
            <strong style={{ color: 'var(--ink)', fontWeight: 600 }}>
              product design, front-end engineering, and rapid prototyping
            </strong>{' '}
            to ship user-facing features with high visual quality.
          </p>
          <p
            className="about-text"
            style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.75 }}
          >
            My journey is unconventional. At 18 I joined the Royal Marines, then worked in
            London until COVID prompted a return to education. In 2024 I graduated from the
            University of Exeter with a 1st Class Honours in Computer Science. Outside of tech
            I'm drawn to cosmology, philosophy, and start-ups that add genuine value to people's
            lives.
          </p>
        </div>
        <div className="about-right">
          <div className="about-stats">
            <div className="stat">
              <div className="stat-number">2024</div>
              <div className="stat-label">Graduated Exeter</div>
            </div>
            <div className="stat" style={{ background: 'var(--violet)' }}>
              <div className="stat-number" style={{ color: 'var(--lime)' }}>
                1st
              </div>
              <div className="stat-label" style={{ color: 'rgba(255,255,255,0.6)' }}>
                Class Honours
              </div>
            </div>
            <div className="stat" style={{ background: 'var(--lime)' }}>
              <div className="stat-number" style={{ color: 'var(--ink)' }}>
                3
              </div>
              <div className="stat-label" style={{ color: 'rgba(14,14,14,0.6)' }}>
                Apps built solo
              </div>
            </div>
            <div className="stat">
              <div className="stat-number">M365</div>
              <div className="stat-label">Current focus</div>
            </div>
          </div>
          <div className="availability-tag">
            <span
              style={{
                width: 8,
                height: 8,
                borderRadius: '50%',
                background: 'var(--coral)',
                display: 'inline-block',
              }}
            />
            Microsoft 365 consultant — building prototypes on the side
          </div>
        </div>
      </section>

      <section id="skills">
        <p className="section-eyebrow">Stack</p>
        <h2 className="section-heading">
          Skills &amp; <em>Tools</em>
        </h2>
        <div className="skills-grid">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title} className="skill-group">
              <div className="skill-group-title">{group.title}</div>
              <div className="skill-pill-grid">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-pill${skill.strong ? ' strong' : ''}`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio">
        <p className="section-eyebrow">Selected work</p>
        <h2 className="section-heading">
          Projects I've built from idea to <em>prototype</em>
        </h2>
        <div className="portfolio-grid">
          {PROJECTS.map((project) => (
            <div key={project.slug} className="project-card">
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span className="project-number">{project.number}</span>
                <span className="project-tag" style={project.tagStyle}>
                  {project.tag}
                </span>
              </div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact">
        <div>
          <p className="section-eyebrow">Get in touch</p>
          <h2 className="section-heading">
            Let's build
            <br />
            something <em>great</em>.
          </h2>
          <p
            className="contact-big-email"
            style={{ cursor: 'default' }}
          >
            Open to conversations about creative problem solving, prototypes, and tech for good.
          </p>
          <a href="#" className="btn-fill">
            <DownloadIcon />
            View CV (coming soon)
          </a>
        </div>
        <div className="contact-links">
          {CONTACT_LINKS.map((link) => (
            <a key={link.label} href={link.href} className="contact-link-item">
              {link.label}
              <span>↗</span>
            </a>
          ))}
        </div>
      </section>

      <footer>
        <p>
          <strong>Jason Swift</strong> — Portfolio 2026
        </p>
        <p>Designed &amp; built from scratch</p>
      </footer>
    </>
  )
}
