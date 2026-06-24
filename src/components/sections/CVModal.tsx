import { useEffect, useState } from 'react'
import cvPdf from '../../assets/cv/Jason Swift CV 26.pdf'
import './CVModal.css'

const CV_DOWNLOAD_NAME = 'Jason Swift CV.pdf'

interface CVModalProps {
  isOpen: boolean
  onClose: () => void
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
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

async function renderPdfPages(url: string) {
  const [{ GlobalWorkerOptions, getDocument }, worker] = await Promise.all([
    import('pdfjs-dist'),
    import('pdfjs-dist/build/pdf.worker.min.mjs?url'),
  ])

  GlobalWorkerOptions.workerSrc = worker.default

  const pdf = await getDocument({ url }).promise
  const images: string[] = []

  for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
    const page = await pdf.getPage(pageNumber)
    const viewport = page.getViewport({ scale: 2 })
    const canvas = document.createElement('canvas')
    const context = canvas.getContext('2d')

    if (!context) continue

    canvas.width = viewport.width
    canvas.height = viewport.height

    await page.render({ canvas, canvasContext: context, viewport }).promise
    images.push(canvas.toDataURL('image/png'))
  }

  return images
}

const CVModal = ({ isOpen, onClose }: CVModalProps) => {
  const [pageImages, setPageImages] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (!isOpen) {
      setPageImages([])
      return
    }

    let cancelled = false

    async function loadPdf() {
      setIsLoading(true)

      try {
        const images = await renderPdfPages(cvPdf)
        if (!cancelled) setPageImages(images)
      } finally {
        if (!cancelled) setIsLoading(false)
      }
    }

    loadPdf()

    return () => {
      cancelled = true
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="cv-modal-overlay" onClick={onClose}>
      <div className="cv-modal-content" onClick={(event) => event.stopPropagation()}>
        <button className="cv-modal-close" onClick={onClose} aria-label="Close CV">
          ×
        </button>

        <div className="cv-modal-header">
          <h2 className="cv-modal-title">Jason Swift — CV</h2>
          <a href={cvPdf} download={CV_DOWNLOAD_NAME} className="cv-modal-download">
            <DownloadIcon />
            Download CV
          </a>
        </div>

        <div className="cv-modal-viewer">
          {isLoading && <p className="cv-modal-status">Loading CV…</p>}
          {!isLoading &&
            pageImages.map((pageImage, index) => (
              <img
                key={index}
                src={pageImage}
                alt={`CV page ${index + 1}`}
                className="cv-modal-page"
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default CVModal
