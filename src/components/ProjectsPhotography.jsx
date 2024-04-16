import { useEffect, useState } from "react"
import AnimatedPage from "./AnimatedPage"
import { Masonry } from "@mui/lab"
import { Skeleton } from "@mui/lab"

import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"

const ProjectsPhotography = () => {
  const [randomNumbers, setRandomNumbers] = useState([])
  const [loading, setLoading] = useState(false)
  const [imagesLoaded, setImagesLoaded] = useState(0)

  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const handleClickOpen = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const generateRandomNumbers = (max) => {
      const numbers = []
      while (numbers.length < max) {
        const randomNumber = Math.floor(Math.random() * max) + 1
        if (!numbers.includes(randomNumber)) {
          numbers.push(randomNumber)
        }
      }
      return numbers
    }

    // Generate an array of X unique random numbers
    setRandomNumbers(generateRandomNumbers(20))
  }, [setRandomNumbers])

  const handleImageLoad = () => {
    setImagesLoaded((prevCount) => prevCount + 1)
  }

  useEffect(() => {
    if (imagesLoaded === randomNumbers.length) {
      setLoading(true)
    }
  }, [imagesLoaded, randomNumbers.length])

  return (
    <AnimatedPage>
      <div className="Photography-All">
        <Masonry columns={3} spacing={1}>
          {randomNumbers.map((number, index) =>
            loading ? (
              <img
                loading="lazy"
                src={`https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/photography/fashion/${number}.jpg`}
                alt={`Image ${number}`}
                key={index}
                onLoad={handleImageLoad}
                onClick={() =>
                  handleClickOpen(
                    `https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/photography/fashion/${number}.jpg`
                  )
                }
              />
            ) : (
              <Skeleton
                variant="rectangular"
                width={210}
                height={118}
                key={index}
              />
            )
          )}
        </Masonry>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth={"md"}
        >
          <DialogContent>
            <img
              src={selectedImage}
              alt=""
              style={{ width: "100%", height: "auto" }}
            />
          </DialogContent>
        </Dialog>
      </div>
    </AnimatedPage>
  )
}

export default ProjectsPhotography
