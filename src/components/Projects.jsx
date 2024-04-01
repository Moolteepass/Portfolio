import { project_images } from "./images.json"

const Projects = () => {
  return (
    <div className="Project-Container">
      {project_images.map((item, index) => {
        return (
          <div className="Project-Image-Container" key={index}>
            <h1 className="Project-Title">{item.title}</h1>
            <img className="Project-Image" src={item.src} />
          </div>
        )
      })}
    </div>
  )
}

export default Projects
