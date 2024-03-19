import HomePage from "./components/HomePage"

function App() {
  return (
    <div className="Full-App">
      <aside className="Sidebar-Main">
        <div className="Sidebar-Title-Container">
          <img
            className="Sidebar-Logo"
            src="https://www.dropbox.com/scl/fi/q4pgpe5ukia0q6v4oqh3n/MonkeyMedia.png?rlkey=3zf7zuxrfqn2r5vogvy1fqazq&raw=1"
            alt="Logo"
          />
          <h1 className="Sidebar-Website-Title">Monkey Media</h1>
        </div>
        <nav className="Navbar">
          <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Info</li>
          </ul>
        </nav>
      </aside>
      <HomePage />
    </div>
  )
}

export default App
