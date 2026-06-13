import { BrowserRouter, Route, Routes } from 'react-router-dom'
import LandingPage from './LandingPage'
import ProjectPage from './pages/ProjectPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects/:slug" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
