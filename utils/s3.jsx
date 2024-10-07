// utils/s3.js
import { S3Client, ListObjectsV2Command } from "@aws-sdk/client-s3"

const s3Client = new S3Client({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
})

export async function listImagesInFolder(bucketName, folder) {
  const command = new ListObjectsV2Command({
    Bucket: bucketName,
    Prefix: folder,
    Delimiter: "/",
  })

  try {
    const data = await s3Client.send(command)
    return data.Contents.filter((object) =>
      object.Key.match(/\.(jpg|jpeg|png|gif|webp)$/i)
    ).map((image) => ({
      key: image.Key,
      url: `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/${image.Key}`,
      lastModified: image.LastModified,
    }))
    console.log(
      data.Contents.filter((object) =>
        object.Key.match(/\.(jpg|jpeg|png|gif|webp)$/i)
      )
    )
  } catch (err) {
    console.error(`Error listing folder ${folder}:`, err)
    return []
  }
}
