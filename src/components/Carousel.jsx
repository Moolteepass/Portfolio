import { useEffect } from "react"
import { slides } from "./images.json"
import { useState } from "react"

const Carousel = () => {
  const [slide, setSlide] = useState(0)

  const nextSlide = () => {
    setSlide(slide === slides.length - 1 ? 0 : slide + 1)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      nextSlide()
    }, 4000)

    return () => clearTimeout(timeoutId) // Clear the timeout when the component unmounts
  })

  return (
    <div className="Carousel">
      {slides.map((item, index) => {
        return (
          <div key={index}>
            <img
              src={item.src}
              className={
                slide === index ? "Slide Slide-Visible" : "Slide Slide-Hidden"
              }
            />
            <img
              src={slides[(index + 1) % slides.length].src}
              className={
                slide === index ? "Slide Slide-Visible" : "Slide Slide-Hidden"
              }
            />
          </div>
        )
      })}
    </div>
  )
}

export default Carousel
