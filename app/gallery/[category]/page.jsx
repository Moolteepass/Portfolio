import Image from "next/image"
import { listImagesInFolder } from "../../../utils/s3"

// This replaces getStaticPaths
export async function generateStaticParams() {
  // Define your gallery categories here
  const categories = ["events", "fashion", "stageshows", "wildlife"]
  return categories.map((category) => ({ category }))
}

// This is your main page component, which replaces both getStaticProps and the default export
export default async function GalleryPage({ params }) {
  const bucketName = process.env.S3_BUCKET_NAME
  const folder = `photography/${params.category}/`
  const images = await listImagesInFolder(bucketName, folder)

  return (
    <div className="gallery-grid">
      {images.map((img, index) => (
        <div key={img.key} className="gallery-item" style={{ width: "auto" }}>
          <Image
            src={img.url}
            width={600}
            height={300}
            loading={index < 5 ? "eager" : "lazy"} // Load first 5 images eagerly
          />
        </div>
      ))}
    </div>
  )
}

// Add this for incremental static regeneration
export const revalidate = 3600 // Revalidate every hour
