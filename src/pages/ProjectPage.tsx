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
            <p className="project-tab-description">{project.description}</p>
            <div className="project-detail-sections">
              <div className="project-detail-section">
                <h2 className="project-detail-heading">Problem</h2>
                <p className="project-detail-text">{project.problem}</p>
              </div>
              <div className="project-detail-section">
                <h2 className="project-detail-heading">Solution</h2>
                <p className="project-detail-text">{project.solution}</p>
              </div>
              <div className="project-detail-section">
                <h2 className="project-detail-heading">Outcome</h2>
                <p className="project-detail-text">{project.outcome}</p>
              </div>
            </div>
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
