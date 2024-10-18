"use client"

import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faExpand,
  faCompress,
  faAnglesDown,
} from "@fortawesome/free-solid-svg-icons"
import Image from "next/image"

const Slide = ({ item, isActive }) => (
  <div className={`slide ${isActive ? "slide-visible" : "slide-hidden"}`}>
    <Image
      src={item}
      alt="Carousel slide"
      fill
      style={{ objectFit: "cover" }}
      sizes="100vw"
    />
  </div>
)

const Carousel = () => {
  const [images, setImages] = useState([])
  const [slide, setSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch("/api/images?folder=best")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }
        const data = await response.json()
        if (Array.isArray(data)) {
          setImages(data)
        } else {
          throw new Error("Data is not an array")
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchImages()
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

  return (
    <div className={`carousel-container ${isLoading ? "loading" : "loaded"}`}>
      {!isLoading && (
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
      )}
    </div>
  )
}

export default Carousel
