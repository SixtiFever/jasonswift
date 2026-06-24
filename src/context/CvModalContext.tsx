import { createContext, useContext, useState, type ReactNode } from 'react'
import CVModal from '../components/sections/CVModal'

type CvModalContextValue = {
  openCvModal: () => void
}

const CvModalContext = createContext<CvModalContextValue | null>(null)

export function CvModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <CvModalContext.Provider value={{ openCvModal: () => setIsOpen(true) }}>
      {children}
      <CVModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </CvModalContext.Provider>
  )
}

export function useCvModal() {
  const context = useContext(CvModalContext)
  if (!context) {
    throw new Error('useCvModal must be used within CvModalProvider')
  }
  return context
}
