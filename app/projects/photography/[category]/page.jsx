"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Masonry from "react-masonry-css"

async function fetchImages(category) {
  try {
    const response = await fetch(`/api/images?folder=photography/${category}`)
    if (!response.ok) {
      throw new Error("Failed to fetch images")
    }
    return await response.json()
  } catch (error) {
    console.error("Error fetching images:", error)
    throw error
  }
}

function ImageComponent({ src, alt, onClick, priority }) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div className="image-item" onClick={() => onClick(src)}>
      {!isLoaded && <div className="skeleton-loader"></div>}
      <Image
        src={src}
        alt={alt}
        width={500}
        height={300}
        priority={priority}
        className={isLoaded ? "loaded" : ""}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}

function FullscreenImage({ src, alt, onClose }) {
  return (
    <div
      className="fullscreen-overlay"
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000,
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          maxWidth: "90%",
          maxHeight: "90%",
          objectFit: "contain",
        }}
        onClick={onClose} // Changed this line
      />
    </div>
  )
}

export default function Gallery({ params }) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fullscreenImage, setFullscreenImage] = useState(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)
    fetchImages(params.category)
      .then((images) => {
        setImages(images)
        setIsLoading(false)
      })
      .catch((err) => {
        setError("Failed to load images. Please try again later.")
        setIsLoading(false)
      })
  }, [params.category])

  const breakpointColumnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  const handleImageClick = (src) => {
    setFullscreenImage(src)
  }

  const closeFullscreen = () => {
    setFullscreenImage(null)
  }

  if (isLoading) return <div>Loading...</div>
  if (error) return <div>{error}</div>

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {images.map((url, index) => (
          <ImageComponent
            key={url}
            src={url}
            alt={`${params.category} image ${index + 1}`}
            onClick={handleImageClick}
            priority={index === 0}
          />
        ))}
      </Masonry>
      {fullscreenImage && (
        <FullscreenImage
          src={fullscreenImage}
          alt="Fullscreen view"
          onClose={closeFullscreen}
        />
      )}
    </>
  )
}
