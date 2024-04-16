import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import { AnimatePresence } from "framer-motion"

import HomePage from "./components/HomePage"
import Projects from "./components/Projects"
import ProjectsPhotography from "./components/ProjectsPhotography"
import ProjectsVideography from "./components/ProjectsVideography"
import ProjectsAutomation from "./components/ProjectsAutomation"
import ProjectsWebDesign from "./components/ProjectsWebDesign"
import ProjectsGraphics from "./components/ProjectsGraphics"
import Contact from "./components/Contact"

const App = () => {
  const [showNavbarBg, setShowNavbarBg] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 700) {
        setShowNavbarBg(true)
      } else {
        setShowNavbarBg(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <Router>
      <div className="Full-App">
        <aside className="Nav-Main">
          <div
            className={
              showNavbarBg
                ? "Nav-Container Nav-With-Background"
                : "Nav-Container"
            }
          >
            <img
              className="Nav-Logo"
              src="https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/logo/MonkeyMedia.webp"
              alt="Logo"
            />
            <nav className="Nav-list">
              <ul>
                <li>
                  <Link to="/" className="Nav-Link">
                    HOME
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="Nav-Link">
                    PROJECTS
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="Nav-Link">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </aside>
        <AnimatePresence>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<Projects />} />
            <Route
              path="projects/photography"
              element={<ProjectsPhotography />}
            />
            <Route
              path="projects/videography"
              element={<ProjectsVideography />}
            />
            <Route
              path="projects/automation"
              element={<ProjectsAutomation />}
            />
            <Route path="projects/web-design" element={<ProjectsWebDesign />} />
            <Route path="projects/graphics" element={<ProjectsGraphics />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
        <footer>Jacob McCormack 2024 ©</footer>
      </div>
    </Router>
  )
}

export default App
