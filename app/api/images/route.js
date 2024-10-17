import { NextResponse } from "next/server"
import { ListObjectsV2Command } from "@aws-sdk/client-s3"
import { s3Client } from "@/config/aws-config"

// Function to check if a file is an image based on its extension
function isImageFile(filename) {
  const imageExtensions = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".svg"]
  const ext = filename.toLowerCase().split(".").pop()
  return imageExtensions.includes(`.${ext}`)
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const folder = searchParams.get("folder") || "best" // Default to 'best' if no folder is specified
  const params = {
    Bucket: process.env.S3_BUCKET_NAME || "monkey-media-portfolio-images",
    Prefix: folder,
  }

  try {
    const command = new ListObjectsV2Command(params)
    const data = await s3Client.send(command)

    if (!data.Contents || data.Contents.length === 0) {
      console.log(`No contents found in the specified S3 folder: ${folder}`)
      return NextResponse.json({ error: "No images found" }, { status: 404 })
    }

    const imageUrls = data.Contents.filter((object) =>
      isImageFile(object.Key)
    ).map((object) => `https://${params.Bucket}.s3.amazonaws.com/${object.Key}`)

    return NextResponse.json(imageUrls)
  } catch (error) {
    console.error("Error in API route:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
