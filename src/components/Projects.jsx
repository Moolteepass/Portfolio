import { Link } from "react-router-dom"

import { project_images } from "./images.json"

import AnimatedPage from "./AnimatedPage"

const Projects = () => {
  return (
    <AnimatedPage>
      <div className="Project-Container">
        {project_images.map((item, index) => {
          return (
            <div className="Project-Image-Container" key={index}>
              <Link to={item.link}>
                <h1 className="Project-Title">{item.title || ""}</h1>
                <img className="Project-Image" src={item.src || ""} />
              </Link>
            </div>
          )
        })}
      </div>
    </AnimatedPage>
  )
}

export default Projects
