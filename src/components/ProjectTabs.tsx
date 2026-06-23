import { useState } from 'react'
import { PROJECTS } from '../data/projects'
import ImageCarousel from './ImageCarousel'

export default function ProjectTabs() {
  const [activeSlug, setActiveSlug] = useState(PROJECTS[0].slug)
  const activeProject = PROJECTS.find((project) => project.slug === activeSlug) ?? PROJECTS[0]

  return (
    <div className="project-tabs">
      <div className="project-tab-list" role="tablist" aria-label="Projects">
        {PROJECTS.map((project) => {
          const isActive = project.slug === activeSlug
          return (
            <button
              key={project.slug}
              type="button"
              role="tab"
              id={`project-tab-${project.slug}`}
              aria-selected={isActive}
              aria-controls={`project-panel-${project.slug}`}
              className={`project-tab${isActive ? ' active' : ''}`}
              onClick={() => setActiveSlug(project.slug)}
            >
              {project.tabLabel}
            </button>
          )
        })}
      </div>

      <div
        className="project-tab-panel"
        role="tabpanel"
        id={`project-panel-${activeProject.slug}`}
        aria-labelledby={`project-tab-${activeProject.slug}`}
      >
        <div className="project-tab-panel-content">
          <div className="project-tab-panel-header">
            <span className="project-number">{activeProject.number}</span>
            <span className="project-tag" style={activeProject.tagStyle}>
              {activeProject.tag}
            </span>
          </div>
          <h3 className="project-tab-title">{activeProject.title}</h3>
          <p className="project-tab-description">{activeProject.description}</p>
          <div className="project-detail-sections">
            <div className="project-detail-section">
              <h4 className="project-detail-heading">Problem</h4>
              <p className="project-detail-text">{activeProject.problem}</p>
            </div>
            <div className="project-detail-section">
              <h4 className="project-detail-heading">Solution</h4>
              <p className="project-detail-text">{activeProject.solution}</p>
            </div>
            <div className="project-detail-section">
              <h4 className="project-detail-heading">Outcome</h4>
              <p className="project-detail-text">{activeProject.outcome}</p>
            </div>
          </div>
          <div className="project-tech">
            {activeProject.tech.map((tech) => (
              <span key={tech} className="tech-badge">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="project-tab-panel-media">
          <ImageCarousel
            images={activeProject.screenshots ?? []}
            label={activeProject.tabLabel}
            resetKey={activeProject.slug}
            layout={activeProject.mediaLayout ?? 'mobile'}
            getCaption={
              activeProject.slug === 'loyalbean'
                ? (index) => (index >= 5 ? 'Cafe flow' : 'Customer flow')
                : undefined
            }
          />
        </div>
      </div>
    </div>
  )
}
