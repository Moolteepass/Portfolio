import { Link } from "react-router-dom"
import { photography_images } from "./images.json"
import Skeleton from "@mui/material/Skeleton"
import { useState, useEffect } from "react"

import AnimatedPage from "./AnimatedPage"

const Projects = () => {
  const [loadedImages, setLoadedImages] = useState({})

  useEffect(() => {
    photography_images.forEach((item, index) => {
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
        {photography_images.map((item, index) =>
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
