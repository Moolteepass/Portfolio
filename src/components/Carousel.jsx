/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { slides } from "./images.json"

const Slide = ({ item, isActive }) => (
  <div>
    <img
      src={item.src}
      className={isActive ? "Slide Slide-Visible" : "Slide Slide-Hidden"}
    />
  </div>
)

const Carousel = () => {
  const [slide, setSlide] = useState(0)

  useEffect(() => {
    const nextSlide = () => {
      setSlide(slide === slides.length - 1 ? 0 : slide + 1)
    }

    const timeoutId = setTimeout(nextSlide, 5500)
    return () => clearTimeout(timeoutId)
  })

  return (
    <div className="Carousel">
      {slides.map((item, index) => (
        <Slide key={index} item={item} isActive={slide === index} />
      ))}
    </div>
  )
}

export default Carousel
