import { useEffect, useState } from "react"
import AnimatedPage from "./AnimatedPage"
import { Masonry } from "@mui/lab"

import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"

const ProjectsPhotography = () => {
  const [randomNumbers, setRandomNumbers] = useState([])

  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState(null)

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 1000)
    return () => clearTimeout(timer) // Clean up on component unmount
  }, [])

  const handleClickOpen = (image) => {
    setSelectedImage(image)
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  useEffect(() => {
    const generateRandomNumbers = (max, count) => {
      const numbers = Array.from({ length: max }, (_, i) => i + 1)
      for (let i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[numbers[i], numbers[j]] = [numbers[j], numbers[i]]
      }
      return numbers.slice(0, count)
    }

    // Generate an array of 20 unique random numbers between 1 and 132
    setRandomNumbers(generateRandomNumbers(132, 30))
  }, [setRandomNumbers])

  const ReloadButton = () => {
    window.location.reload()
  }

  return (
    <AnimatedPage>
      <div
        className={`Photography-All ${isLoaded ? "fade-in" : ""}`}
        style={{ opacity: isLoaded ? 1 : 0 }}
      >
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={0.4}>
          {randomNumbers.map((number, index) => (
            <img
              loading="lazy"
              src={`https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/photography/${number}.jpg`}
              alt={`Image ${number}`}
              key={index}
              onClick={() =>
                handleClickOpen(
                  `https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/photography/${number}.jpg`
                )
              }
            />
          ))}
        </Masonry>
        <Dialog
          open={open}
          onClose={handleClose}
          fullWidth={true}
          maxWidth={"lg"}
        >
          <DialogContent>
            <img
              src={selectedImage}
              alt=""
              style={{ width: "100%", maxHeight: "85vh", objectFit: "contain" }}
              onClick={handleClose}
            />
          </DialogContent>
        </Dialog>
        <button className="Load-More" onClick={ReloadButton}>
          LOAD MORE
        </button>
      </div>
    </AnimatedPage>
  )
}

export default ProjectsPhotography
