"use client"

import FadeInWrapper from "@/components/FadeInWrapper"
import Image from "next/image"

const webdesign = [
  {
    src: "https://snippetsilo.up.railway.app/",
    title: "Snippet Silo",
    description: "A place to hold all your web clips",
    thumbnail:
      "https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/webdev/SnippetSilo.webp",
  },
  {
    src: "https://moolteepass.github.io/TutorialSearch/",
    title: "Tutorial Search",
    description: "Simple search website to find the tutorials I've made",
    thumbnail:
      "https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/webdev/TutorialSearch.webp",
  },
  {
    src: "https://moolteepass.github.io/exhibit-display/",
    title: "Exhibit Display",
    description: "Front end digital display-based website to show case work",
    thumbnail:
      "https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/webdev/ExhibitDisplay.webp",
  },
]

const ProjectsWebDesign = () => {
  const handleClick = (url) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <FadeInWrapper>
      <div className="WebDev-All">
        {webdesign.map((item, index) => (
          <div key={index} className="WebDev-Container">
            <div className="WebDevplayer-Container">
              <Image
                width={560}
                height={315}
                src={item.thumbnail}
                alt={`Thumbnail for ${item.title}`}
                title={item.title}
              />
            </div>
            <div className="WebDev-Outline">
              <h2>{item.title}</h2>
              <div className="WebDev-Description">{item.description}</div>
              <button
                className="WebDev-Link"
                onClick={() => handleClick(item.src)}
              >
                Check it out
              </button>
            </div>
          </div>
        ))}
      </div>
    </FadeInWrapper>
  )
}

export default ProjectsWebDesign
