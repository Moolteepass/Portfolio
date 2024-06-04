import { useEffect, useState } from "react"
import AnimatedPage from "./components/AnimatedPage"
import Masonry from "@mui/lab/Masonry"
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import { photography_images } from "./components/images.json"
import { grid } from "ldrs"

grid.register()

const PhotographyEvents = () => {
  const main_index = 2
  const [numberArray, setNumberArray] = useState([])
  const [open, setOpen] = useState(false)
  const [selectedImage, setSelectedImage] = useState("")
  const [loading, setLoading] = useState(true) // Add loading state

  useEffect(() => {
    // Force user to scroll to the top of the screen
    window.scrollTo(0, 0)
  }, [])

  const generateNumbers = () => {
    const numbers = []
    for (let i = 1; i <= photography_images[main_index].img_amount; i++) {
      numbers.push(i)
    }
    setNumberArray(numbers)
  }

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc)
    setOpen(true)
  }

  useEffect(() => {
    generateNumbers()

    // Simulate loading for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false)
    }, 2000)

    return () => clearTimeout(timer) // Cleanup timer
  }, [])

  return (
    <AnimatedPage>
      <div className="Photography-All">
        <div
          className="loading-overlay"
          style={{ display: loading ? "block" : "none" }}
        >
          <div className="loading-animation">
            <l-grid size={"150"} speed={"1.5"} color={"white"} />
          </div>
        </div>
        <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} spacing={0}>
          {numberArray.map((num, index) => (
            <div
              key={index}
              className="Photography-Individual"
              onClick={() =>
                handleImageClick(
                  `https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/photography/${photography_images[
                    main_index
                  ].title.toLowerCase()}/${num}.jpg`
                )
              }
            >
              <img
                src={`https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/photography/${photography_images[
                  main_index
                ].title.toLowerCase()}/${num}.jpg`}
                alt=""
              />
            </div>
          ))}
        </Masonry>
      </div>
      <Dialog open={open} onClick={() => setOpen(false)} maxWidth="xl">
        <DialogContent>
          <img
            src={selectedImage}
            alt=""
            style={{ maxWidth: "80vw", height: "80vh", objectFit: "contain" }}
          />
        </DialogContent>
      </Dialog>
    </AnimatedPage>
  )
}

export default PhotographyEvents
