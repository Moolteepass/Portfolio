"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Masonry from "react-masonry-css"

const fetchImages = async (category) => {
  try {
    const response = await fetch(`/api/images?folder=photography/${category}`)
    if (!response.ok) throw new Error("Failed to fetch images")
    return await response.json()
  } catch (error) {
    console.error("Error fetching images:", error)
    throw error
  }
}

const ImageComponent = ({ src, alt, onClick, priority, isLoading }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showImage, setShowImage] = useState(false)

  useEffect(() => {
    if (!isLoading) {
      const timer = setTimeout(() => setShowImage(true), 100)
      return () => clearTimeout(timer)
    }
  }, [isLoading])

  return (
    <div className="image-item" onClick={() => !isLoading && onClick(src)}>
      {(isLoading || !isLoaded) && <div className="skeleton-loader"></div>}
      {showImage && (
        <Image
          src={src}
          alt={alt}
          width={300}
          height={300}
          priority={priority}
          className={isLoaded ? "loaded" : ""}
          onLoad={() => setIsLoaded(true)}
        />
      )}
    </div>
  )
}

const FullscreenImage = ({ src, alt, onClose }) => (
  <div className="fullscreen-overlay" onClick={onClose}>
    <img
      src={src}
      alt={alt}
      style={{ maxWidth: "90%", maxHeight: "90%", objectFit: "contain" }}
      onClick={onClose}
    />
  </div>
)

const breakpointColumnsObj = {
  default: 4,
  1100: 3,
  700: 2,
  500: 1,
}

export default function Gallery({ params }) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fullscreenImage, setFullscreenImage] = useState(null)

  useEffect(() => {
    const loadImages = async () => {
      try {
        setIsLoading(true)
        const fetchedImages = await fetchImages(params.category)
        setImages(fetchedImages)
      } catch (err) {
        setError("Failed to load images. Please try again later.")
      } finally {
        setIsLoading(false)
      }
    }
    loadImages()
  }, [params.category])

  const handleImageClick = useCallback((src) => setFullscreenImage(src), [])
  const closeFullscreen = useCallback(() => setFullscreenImage(null), [])

  if (error) return <div>{error}</div>

  return (
    <>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="masonry-grid"
        columnClassName="masonry-grid_column"
      >
        {(isLoading ? Array(10).fill("") : images).map((url, index) => (
          <ImageComponent
            key={isLoading ? index : url}
            src={url}
            alt={`${params.category} image ${index + 1}`}
            onClick={handleImageClick}
            priority={index === 0}
            isLoading={isLoading}
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
