import { useState } from 'react'
import ProjectModal from './ProjectModal'

const projects = [
  'LoyalBean - Digital Cafe Loyalty',
  'Tag - Video Social Media',
  'Pria - AI Project Management Platform',
]

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleProjectClick = (project: string) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    // Reset selected project after animation
    setTimeout(() => setSelectedProject(null), 300)
  }

  return (
    <>
      <section className='content-card' id='portfolio'>
        <h3 className='content-title'>Portfolio</h3>
        <p className='content-text'>Projects I've built from idea to prototype</p>
        <div className='project-list' aria-label='Project list'>
          {projects.map((project) => (
            <button 
              key={project} 
              className='project-item' 
              type='button'
              onClick={() => handleProjectClick(project)}
            >
              {project}
            </button>
          ))}
        </div>
      </section>
      
      {selectedProject && (
        <ProjectModal
          projectName={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </>
  )
}

export default Portfolio
