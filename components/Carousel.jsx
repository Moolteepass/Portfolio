"use client"

/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExpand, faAnglesDown } from "@fortawesome/free-solid-svg-icons"
import { ListObjectsV2Command } from "@aws-sdk/client-s3"
import { s3Client } from "@/config/aws-config" // Make sure this path is correct

const Slide = ({ item, isActive }) => (
  <div>
    <img
      src={item}
      className={isActive ? "Slide Slide-Visible" : "Slide Slide-Hidden"}
      alt="Carousel slide"
    />
  </div>
)

async function fetchImages() {
  const params = {
    Bucket: "monkey-media-portfolio-images",
    Prefix: "photography/best",
  }
  try {
    const command = new ListObjectsV2Command(params)
    const data = await s3Client.send(command)
    const imageUrls = data.Contents.map(
      (object) => `https://${params.Bucket}.s3.amazonaws.com/${object.Key}`
    )
    return imageUrls
  } catch (error) {
    console.error("Error fetching images:", error)
    return []
  }
}

const Carousel = () => {
  const [images, setImages] = useState([])
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    fetchImages().then(setImages)
  }, [])

  useEffect(() => {
    const nextSlide = () => {
      setSlide((slide) => (slide === images.length - 1 ? 0 : slide + 1))
    }

    const timeoutId = setTimeout(nextSlide, 4500)
    return () => clearTimeout(timeoutId)
  }, [images.length, slide])

  const toggleFullscreen = () => {
    if (document.fullscreenElement) {
      document.exitFullscreen()
    } else {
      document.documentElement.requestFullscreen()
    }
  }

  if (images.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div className="Carousel">
      {images.map((item, index) => (
        <Slide key={index} item={item} isActive={slide === index} />
      ))}
      <div className="Carousel-Dots">
        {images.map((_, index) => (
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
      <div className="Scroll-Down fade-in">
        <FontAwesomeIcon icon={faAnglesDown} />
      </div>
    </div>
  )
}

export default Carousel
