/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { slides } from "./images.json"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand } from "@fortawesome/free-solid-svg-icons"

const Slide = ({ item, isActive }) => (
  <div>
    <img
      src={item.src}
      className={isActive ? "Slide Slide-Visible" : "Slide Slide-Hidden"}
    />
  </div>
)

const Carousel = () => {
  const [slide, setSlide] = useState(0)

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }

  useEffect(() => {
    const nextSlide = () => {
      setSlide(slide === slides.length - 1 ? 0 : slide + 1)
    }

    const timeoutId = setTimeout(nextSlide, 4500)
    return () => clearTimeout(timeoutId)
  })

  return (
    <div className="Carousel">
      {slides.map((item, index) => (
        <Slide key={index} item={item} isActive={slide === index} />
      ))}
      <div className="Carousel-Dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={
              slide === index
                ? "Carousel-Dot Carousel-Dot-Active"
                : "Carousel-Dot"
            }
          />
        ))}
      </div>
      <div className="Fullscreen" onClick={toggleFullscreen}>
        <FontAwesomeIcon icon={faExpand} />
      </div>
    </div>
  )
}

export default Carousel
