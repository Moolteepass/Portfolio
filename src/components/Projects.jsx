import { project_images } from "./images.json"

const Projects = () => {
  return (
    <div className="Project-Container">
      {project_images.map((item, index) => {
        return (
          <div className="Project-Image-Container" key={index}>
            <img src={item.src} />
          </div>
        )
      })}
    </div>
  )
}

export default Projects
