// pages/gallery/[category].js
import { ListObjectsV2Command } from "@aws-sdk/client-s3"
import { s3Client } from "@/config/aws-config.jsx"
import Image from "next/image"

async function fetchImages(category) {
  const params = {
    Bucket: "monkey-media-portfolio-images",
    Prefix: `photography/${category}`,
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

export default async function Gallery({ params }) {
  const images = await fetchImages(params.category)

  return (
    <>
      <div className="image-grid">
        {images.map((url, index) => {
          // Skip rendering if URL is invalid
          if (!url || url.endsWith("/")) return null
          return (
            <Image
              priority={index < 4}
              key={index}
              src={url}
              alt={`Image ${index + 1}`}
              width={100}
              height={100}
              style={{ objectFit: "cover" }}
            />
          )
        })}
      </div>
    </>
  )
}
