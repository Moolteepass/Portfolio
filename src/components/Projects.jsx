import { Link } from "react-router-dom"
import { project_images } from "./images.json"
import Skeleton from "@mui/material/Skeleton"
import { useState, useEffect } from "react"

import AnimatedPage from "./AnimatedPage"

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({})

  useEffect(() => {
    // Force user to scroll to the top of the screen
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    project_images.forEach((item, index) => {
      const img = new Image()
      img.src = item.src
      img.onload = () => {
        setLoadedImages((prev) => ({ ...prev, [index]: true }))
      }
    })
  }, [])

  return (
    <AnimatedPage>
      <div className="Project-Container">
        {project_images.map((item, index) =>
          loadedImages[index] ? (
            <div className="Project-Image-Container" key={index}>
              <Link to={item.link}>
                <h1 className="Project-Title">{item.title || ""}</h1>
                <img className="Project-Image" src={item.src || ""} />
              </Link>
            </div>
          ) : (
            <Skeleton
              variant="rectangular"
              animation="wave"
              style={{ height: "100vh", width: "50%" }}
              key={index}
            />
          )
        )}
      </div>
    </AnimatedPage>
  )
}

export default Projects
