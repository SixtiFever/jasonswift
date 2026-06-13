import { Link, useLocation } from 'react-router-dom'

function sectionHref(hash: string, pathname: string) {
  return pathname === '/' ? hash : `/${hash}`
}

export default function SiteNav() {
  const { pathname } = useLocation()

  return (
    <nav>
      <Link to="/" className="nav-logo">
        Jason<span>.</span>
      </Link>
      <ul className="nav-links">
        <li>
          <a href={sectionHref('#about', pathname)}>About</a>
        </li>
        <li>
          <a href={sectionHref('#skills', pathname)}>Stack</a>
        </li>
        <li>
          <a href={sectionHref('#portfolio', pathname)}>Portfolio</a>
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
