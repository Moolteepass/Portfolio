import { useEffect, useState } from "react"
import AnimatedPage from "./AnimatedPage"

import { Masonry } from "@mui/lab"

const ProjectsPhotography = () => {
  const [randomNumbers, setRandomNumbers] = useState([])

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

    // Generate an array of 67 unique random numbers
    setRandomNumbers(generateRandomNumbers(134))
  }, [setRandomNumbers])

  return (
    <AnimatedPage>
      <div className="Photography-All">
        <Masonry columns={3} spacing={1}>
          {randomNumbers.map((number, index) => (
            <img
              loading="lazy"
              src={`https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/photography/fashion/${number}.jpg`}
              key={index}
            ></img>
          ))}
        </Masonry>
      </div>
    </AnimatedPage>
  )
}

export default ProjectsPhotography
