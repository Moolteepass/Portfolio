"use client"

import { useEffect, useState, useCallback } from "react"
import Image from "next/image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
config.autoAddCss = false
import { listImagesInFolder } from "@/utils/s3"

const Slide = ({ item, isActive }) => (
  <div>
    <Image
      src={item.src}
      alt={item.alt || "Carousel slide"}
      layout="fill"
      objectFit="cover"
      className={isActive ? "Slide Slide-Visible" : "Slide Slide-Hidden"}
    />
  </div>
)

const Carousel = () => {
  const [slides, setSlides] = useState([])
  const [slideNumber, setSlideNumber] = useState(0)
  const [expandIcon, setExpandIcon] = useState(null)
  const [anglesDownIcon, setAnglesDownIcon] = useState(null)

  useEffect(() => {
    const fetchSlides = async () => {
      const bucketName = process.env.NEXT_PUBLIC_S3_BUCKET_NAME
      const folder = `photography/stageshows/`
      const fetchedSlides = await listImagesInFolder(bucketName, folder)
      setSlides(fetchedSlides)
    }
    fetchSlides()
  }, [])

  const toggleFullscreen = useCallback(() => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }, [])

  useEffect(() => {
    const nextSlide = () => {
      setSlideNumber((currentSlideNumber) =>
        currentSlideNumber === slides.length - 1 ? 0 : currentSlideNumber + 1
      )
    }

    const timeoutId = setTimeout(nextSlide, 4500)
    return () => clearTimeout(timeoutId)
  }, [slideNumber, slides.length])

  useEffect(() => {
    import("@fortawesome/free-solid-svg-icons/faExpand").then((icon) =>
      setExpandIcon(icon.faExpand)
    )
    import("@fortawesome/free-solid-svg-icons/faAnglesDown").then((icon) =>
      setAnglesDownIcon(icon.faAnglesDown)
    )
  }, [])

  if (slides.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="Carousel">
      {slides.map((item, index) => (
        <Slide key={index} item={item} isActive={slideNumber === index} />
      ))}
      <div className="Carousel-Dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={
              slideNumber === index
                ? "Carousel-Dot Carousel-Dot-Active"
                : "Carousel-Dot"
            }
          />
        ))}
      </div>
      <div className="Fullscreen" onClick={toggleFullscreen}>
        {expandIcon && <FontAwesomeIcon icon={expandIcon} />}
      </div>
      <div className="Scroll-Down fade-in">
        {anglesDownIcon && <FontAwesomeIcon icon={anglesDownIcon} />}
      </div>
    </div>
  )
}

export default Carousel
