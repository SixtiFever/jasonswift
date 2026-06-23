import { useCallback, useEffect, useRef, useState } from 'react'

interface ImageCarouselProps {
  images: string[]
  label: string
  resetKey: string
  layout?: 'mobile' | 'desktop'
  getCaption?: (activeIndex: number) => string | undefined
}

function isVideoSrc(src: string): boolean {
  return /\.(mov|mp4|webm|ogg)(\?|$)/i.test(src)
}

export default function ImageCarousel({
  images,
  label,
  resetKey,
  layout = 'mobile',
  getCaption,
}: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [prevIndex, setPrevIndex] = useState<number | null>(null)
  const videoRefs = useRef<Map<number, HTMLVideoElement>>(new Map())
  const hasImages = images.length > 0
  const total = hasImages ? images.length : 1

  useEffect(() => {
    setActiveIndex(0)
    setPrevIndex(null)
  }, [resetKey])

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (index === activeIndex) {
        void video.play().catch(() => {})
      } else {
        video.pause()
        video.currentTime = 0
      }
    })
  }, [activeIndex, resetKey])

  const goTo = useCallback(
    (index: number) => {
      if (!hasImages || index === activeIndex || index < 0 || index >= total) return
      setPrevIndex(activeIndex)
      setActiveIndex(index)
    },
    [activeIndex, hasImages, total],
  )

  const goNext = () => goTo((activeIndex + 1) % total)
  const goPrev = () => goTo((activeIndex - 1 + total) % total)
  const caption = getCaption?.(activeIndex)

  const slideClass = (index: number) => {
    if (index === activeIndex) return 'active'
    if (prevIndex === null || index !== prevIndex) return ''
    return activeIndex > prevIndex ? 'leaving-next' : 'leaving-prev'
  }

  if (!hasImages) {
    return (
      <div className="image-carousel-placeholder">
        <span>{label}</span>
        <p>Add images under public/projects/</p>
      </div>
    )
  }

  return (
    <div className={`image-carousel image-carousel--${layout}`}>
      <div className="image-carousel-viewport">
        {images.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className={`image-carousel-slide ${slideClass(index)}`.trim()}
          >
            {isVideoSrc(src) ? (
              <video
                ref={(element) => {
                  if (element) videoRefs.current.set(index, element)
                  else videoRefs.current.delete(index)
                }}
                src={src}
                className="image-carousel-image image-carousel-video"
                controls
                playsInline
                preload="metadata"
                aria-label={`${label} demo video`}
              />
            ) : (
              <img src={src} alt="" className="image-carousel-image" />
            )}
          </div>
        ))}
      </div>

      {total > 1 && (
        <div className="image-carousel-controls">
          <button
            type="button"
            className="image-carousel-btn"
            onClick={goPrev}
            aria-label="Previous image"
          >
            ←
          </button>
          <div className="image-carousel-dots" role="tablist" aria-label="Images">
            {images.map((src, index) => (
              <button
                key={`${src}-dot-${index}`}
                type="button"
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Image ${index + 1}`}
                className={`image-carousel-dot${index === activeIndex ? ' active' : ''}`}
                onClick={() => goTo(index)}
              />
            ))}
          </div>
          <button
            type="button"
            className="image-carousel-btn"
            onClick={goNext}
            aria-label="Next image"
          >
            →
          </button>
        </div>
      )}
      {caption && <p className="image-carousel-caption">{caption}</p>}
    </div>
  )
}
