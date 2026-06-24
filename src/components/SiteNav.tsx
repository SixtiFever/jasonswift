import { Link, useLocation } from 'react-router-dom'
import { useCvModal } from '../context/CvModalContext'

function sectionHref(hash: string, pathname: string) {
  return pathname === '/' ? hash : `/${hash}`
}

export default function SiteNav() {
  const { pathname } = useLocation()
  const { openCvModal } = useCvModal()

  return (
    <nav>
      <Link to="/" className="nav-logo">
        Jason<span>.</span>
      </Link>
      <ul className="nav-links">
        <li>
          <a href={sectionHref('#portfolio', pathname)}>Portfolio</a>
        </li>
        <li>
          <a href={sectionHref('#about', pathname)}>My Story</a>
        </li>
        <li>
          <a href={sectionHref('#skills', pathname)}>Skills & Tools</a>
        </li>
        <li>
          <button type="button" className="nav-outline-btn" onClick={openCvModal}>
            View CV
          </button>
        </li>
        <li>
          <a href={sectionHref('#contact', pathname)} className="nav-cta">
            Get in touch
          </a>
        </li>
      </ul>
    </nav>
  )
}
