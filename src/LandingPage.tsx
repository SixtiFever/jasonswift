import { useEffect } from 'react'
import HeroSkills from './components/HeroSkills'
import ProjectTabs from './components/ProjectTabs'
import SiteNav from './components/SiteNav'
import './LandingPage.css'

const SKILL_GROUPS = [
  {
    title: 'Frontend & Mobile',
    skills: [
      { name: 'React', strong: true },
      { name: 'React Native', strong: true },
      { name: 'TypeScript', strong: true },
      { name: 'Expo', strong: true },
      { name: 'React Flow', strong: true },
      { name: 'HTML', strong: true },
      { name: 'CSS', strong: true },
      { name: 'JavaScript', strong: true },
      { name: 'Python' },
    ],
  },
  {
    title: 'Backend & Platform',
    skills: [
      { name: 'Cursor IDE', strong: true },
      { name: 'Firebase', strong: true },
      { name: 'Google Cloud', strong: true },
      { name: 'Microsoft 365', strong: true },
      { name: 'Visual Studio Code', strong: true },
      { name: 'Git / GitHub', strong: true },
      { name: 'Google Cloud AI', strong: true },
    ],
  },
  {
    title: 'AI Skills',
    skills: [
      { name: 'Agentic Programming', strong: true },
      { name: 'Document Intelligence' },
      { name: 'Copilot Studio' },
      { name: 'Generative AI' },
    ],
  },
  {
    title: 'Process & Craft',
    skills: [
      { name: 'Sketch App', strong: true },
      { name: 'Wireframing', strong: true },
      { name: 'UX Design', strong: true },
      { name: 'UI Design', strong: true },
      { name: 'Product Design' },
      { name: 'Rapid Prototyping' },
      { name: 'User-facing Features' },
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
      </div>

      <section id="portfolio">
        <p className="section-eyebrow">Selected work</p>
        <h2 className="section-heading">
          Projects I've built from idea to <em>prototype</em>
        </h2>
        <ProjectTabs />
      </section>

      <section id="about">
        <div className="about-left">
          <p className="section-eyebrow">My story</p>
          <h2 className="section-heading">
            An Unexpected
            <br />
            <em>Journey</em>.
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
            At 19, my dream of joining the Royal Marines was left in tatters by a knee injury.
            Following this, I moved to London and spent years working across various roles until
            2020, when COVID hit. I then left my London job and flat, moving home to Petersfield
            to spend lockdown with my parents.
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
            During lockdown I reflected on my career, realising I wasn&apos;t on a path that
            aligned with my best attributes - Creativity, communication and problem solving.
            These had frequently manifested themselves as novel app ideas to solve problems. I
            would wireframe, design, brand, create narrative documents and pitch decks for these
            concepts. But I couldn&apos;t develop them. I knew if I could add development skills,
            I&apos;d be in a great position to pursue a career where I can build real apps to
            solve genuine problems that can scale big. So I enrolled to study Computer Science at
            University of Exeter.
          </p>
          <p
            className="about-text"
            style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.75 }}
          >
            After 3 years of study I graduated with a First Class Honours. My final year project, a
            loyalty app for independent cafes, achieved 85%. I&apos;m proud of it, and you can
            find it on my portfolio above! Following uni I went straight into a Graduate
            Consulting position. I am now looking to take my next step, working at an early to mid
            stage venture where I can use my creative, technical and communication skills to
            focus on improving product.
          </p>
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
