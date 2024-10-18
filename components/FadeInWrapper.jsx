"use client"

import { useState, useEffect } from "react"

const FadeInWrapper = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className={`fade-in ${isVisible ? "visible" : ""}`}>{children}</div>
  )
}

export default FadeInWrapper
