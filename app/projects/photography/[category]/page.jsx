"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useTheme } from "@mui/material/styles"
import { ImageList, ImageListItem } from "@mui/material"
import useMediaQuery from "@mui/material/useMediaQuery"

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

const ImageComponent = ({ src, alt, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <div
      className="image-item"
      onClick={() => onClick(src)}
      style={{
        position: "relative",
        cursor: "pointer",
        minHeight: isLoaded ? "auto" : "250px",
        background: "#424242ff",
        overflow: "hidden",
      }}
    >
      {!isLoaded && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1,
            backgroundColor: "#232323ff",
            animation: "pulse 1.5s infinite",
          }}
        />
      )}

      <Image
        src={src}
        alt={alt || "Gallery image"}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        quality={90}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
          transition: "opacity 0.5s ease-in-out, transform 0.1s ease-in-out",
          opacity: isLoaded ? 1 : 0,
        }}
        onLoad={() => setIsLoaded(true)}
      />
    </div>
  )
}
const FullscreenImage = ({ src, alt, onClose }) => (
  <div
    className="fullscreen-overlay"
    onClick={onClose}
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100vw",
      height: "100vh",
      backgroundColor: "rgba(0,0,0,0.9)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 9999,
      cursor: "zoom-out",
    }}
  >
    <img
      src={src}
      alt={alt}
      style={{
        maxWidth: "95%",
        maxHeight: "95%",
        objectFit: "cover",
        boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
      }}
    />
  </div>
)

export default function Gallery({ params }) {
  const [images, setImages] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const [fullscreenImage, setFullscreenImage] = useState(null)

  const theme = useTheme()

  const isLarge = useMediaQuery(theme.breakpoints.up("lg"))
  const isMedium = useMediaQuery(theme.breakpoints.up("md"))
  const isSmall = useMediaQuery(theme.breakpoints.up("sm"))

  let columnCount = 2 // Default (Mobile / XS)
  if (isLarge) {
    columnCount = 3
  } else if (isMedium) {
    columnCount = 3
  } else if (isSmall) {
    columnCount = 2
  }

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

  if (error) return <div style={{ padding: 20, color: "red" }}>{error}</div>

  if (isLoading) {
    return <div style={{ padding: 20 }}>Loading Gallery...</div>
  }

  return (
    <>
      <ImageList variant="masonry" cols={columnCount} gap={0}>
        {images.map((url, index) => (
          <ImageListItem
            key={index}
            sx={{
              breakInside: "avoid",
              marginBottom: "8px",
            }}
          >
            <ImageComponent src={url} onClick={handleImageClick} />
          </ImageListItem>
        ))}
      </ImageList>

      {fullscreenImage && (
        <FullscreenImage src={fullscreenImage} onClose={closeFullscreen} />
      )}
    </>
  )
}
