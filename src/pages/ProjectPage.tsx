import { Link, useParams } from 'react-router-dom'
import SiteNav from '../components/SiteNav'
import { getProjectBySlug } from '../data/projects'
import '../LandingPage.css'

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  return (
    <>
      <SiteNav />
      <main className="project-page">
        {project ? (
          <>
            <p className="section-eyebrow">Portfolio</p>
            <h1 className="section-heading">{project.title}</h1>
            <p className="project-page-placeholder">
              Project details coming soon.
            </p>
          </>
        ) : (
          <>
            <p className="section-eyebrow">Portfolio</p>
            <h1 className="section-heading">Project not found</h1>
            <p className="project-page-placeholder">
              This project doesn't exist or may have been moved.
            </p>
          </>
        )}
        <Link to="/" className="project-page-back">
          ← Back to home
        </Link>
      </main>
    </>
  )
}
