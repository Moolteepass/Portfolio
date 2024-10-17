"use client"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExpand,
  faCompress,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons"

const Slide = ({ item, isActive }) => (
  <div className={`slide ${isActive ? "slide-visible" : "slide-hidden"}`}>
    <img src={item} alt="Carousel slide" />
  </div>
)

const Carousel = () => {
  const [images, setImages] = useState([])
  const [slide, setSlide] = useState(0)
  const [error, setError] = useState(null)
  const [isFullscreen, setIsFullscreen] = useState(false)

  useEffect(() => {
    fetch("/api/images?folder=best")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        return response.json()
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setImages(data)
        } else {
          throw new Error("Data is not an array")
        }
      })
      .catch((error) => {
        console.error("Error:", error)
        setError(error.message)
      })
  }, [])

  useEffect(() => {
    if (images.length === 0) return

    const nextSlide = () => {
      setSlide((slide) => (slide === images.length - 1 ? 0 : slide + 1))
    }

    const timeoutId = setTimeout(nextSlide, 4500)
    return () => clearTimeout(timeoutId)
  }, [images.length, slide])

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
        setIsFullscreen(false)
      }
    }
  }

  if (error) {
    return <div>Error: {error}</div>
  }

  if (images.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        {images.map((item, index) => (
          <Slide key={index} item={item} isActive={slide === index} />
        ))}
        <div className="carousel-dots">
          {images.map((_, index) => (
            <div
              key={index}
              className={`carousel-dot ${
                slide === index ? "carousel-dot-active" : ""
              }`}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
        <button className="fullscreen-button" onClick={toggleFullscreen}>
          <FontAwesomeIcon icon={isFullscreen ? faCompress : faExpand} />
        </button>
        <div className="scroll-down">
          <FontAwesomeIcon icon={faAnglesDown} />
        </div>
      </div>
    </div>
  )
}

export default Carousel
