import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import { useEffect, useState } from "react"

import HomePage from "./components/HomePage"

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
              src="https://www.dropbox.com/scl/fi/q4pgpe5ukia0q6v4oqh3n/MonkeyMedia.png?rlkey=3zf7zuxrfqn2r5vogvy1fqazq&raw=1"
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
                  <Link to="/about" className="Nav-Link">
                    ABOUT
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
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={""} />
          <Route path="/about" element={""} />
          <Route path="/contact" element={""} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
