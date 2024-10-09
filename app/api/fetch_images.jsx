import { listImagesInFolder } from "@/utils/s3"

export default async function handler(req, res) {
  const { category } = req.query
  const bucketName = process.env.S3_BUCKET_NAME
  const folder = `photography/${category}/`

  try {
    const images = await listImagesInFolder(bucketName, folder)
    res.status(200).json(images)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Failed to fetch images" })
  }
}
