import { useState } from 'react'
import './ProjectModal.css'

interface ProjectModalProps {
  projectName: string
  isOpen: boolean
  onClose: () => void
}

const ProjectModal = ({ projectName, isOpen, onClose }: ProjectModalProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  
  // Placeholder images - replace with actual images later
  const placeholderImages = [
    'https://via.placeholder.com/600x400/7393C7/FFFFFF?text=Image+1',
    'https://via.placeholder.com/600x400/9BDCFF/27303F?text=Image+2',
    'https://via.placeholder.com/600x400/CDB4FF/27303F?text=Image+3',
  ]

  if (!isOpen) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % placeholderImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + placeholderImages.length) % placeholderImages.length)
  }

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          ×
        </button>
        
        <div className="modal-body">
          {/* Left side - Text content */}
          <div className="modal-text-content">
            <h2 className="modal-project-name">{projectName}</h2>
            
            <div className="modal-section">
              <h3 className="modal-section-title">Description</h3>
              <p className="modal-section-text">
                [Description content will be added here]
              </p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Background</h3>
              <p className="modal-section-text">
                [Background content will be added here]
              </p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Tech Stack</h3>
              <p className="modal-section-text">
                [Tech stack content will be added here]
              </p>
            </div>

            <div className="modal-section">
              <h3 className="modal-section-title">Learnings</h3>
              <p className="modal-section-text">
                [Learnings content will be added here]
              </p>
            </div>
          </div>

          {/* Right side - Image carousel */}
          <div className="modal-carousel-container">
            <div className="modal-carousel">
              <img 
                src={placeholderImages[currentImageIndex]} 
                alt={`${projectName} screenshot ${currentImageIndex + 1}`}
                className="modal-carousel-image"
              />
              
              {placeholderImages.length > 1 && (
                <>
                  <a 
                    className="modal-carousel-button modal-carousel-button-prev"
                    onClick={prevImage}
                    aria-label="Previous image"
                  >
                    ‹
                  </a>
                  <a 
                    className="modal-carousel-button modal-carousel-button-next"
                    onClick={nextImage}
                    aria-label="Next image"
                  >
                    ›
                  </a>
                  
                  <div className="modal-carousel-indicators">
                    {placeholderImages.map((_, index) => (
                      <button
                        key={index}
                        className={`modal-carousel-indicator ${index === currentImageIndex ? 'active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
