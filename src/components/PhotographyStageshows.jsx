import { useEffect, useState } from "react"
import AnimatedPage from "./AnimatedPage"
import { photography_images } from "./images.json"

const PhotographyStageshows = () => {
  const [numberArray, setNumberArray] = useState([])
  const main_index = 0

  const generateNumbers = () => {
    const numbers = []
    for (let i = 1; i <= photography_images[main_index].img_amount; i++) {
      numbers.push(i)
    }
    setNumberArray(numbers)
  }

  useEffect(() => {
    generateNumbers()
  }, [])

  return (
    <AnimatedPage>
      <div className="Photography-All">
        {numberArray.map((num, index) => (
          <img
            key={index}
            src={`https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/photography/$photography_images[main_index].title}/${num}.jpg`}
            alt=""
          />
        ))}
      </div>
    </AnimatedPage>
  )
}

export default PhotographyStageshows
