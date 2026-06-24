import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CvModalProvider } from './context/CvModalContext'
import LandingPage from './LandingPage'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <BrowserRouter>
      <CvModalProvider>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
        </Routes>
      </CvModalProvider>
    </BrowserRouter>
  )
}

export default App
