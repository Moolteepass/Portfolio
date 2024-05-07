/* eslint-disable react/no-unknown-property */
import AnimatedPage from "./AnimatedPage"
import { webdesign } from "./images.json"

const ProjectsWebDesign = () => {
  return (
    <AnimatedPage>
      <div className="WebDev-All">
        {webdesign.map((item, index) => (
          <div key={index} className="WebDev-Container">
            <div className="WebDevplayer-Container">
              <img
                width="560"
                height="315"
                src={item.thumbnail}
                title={item.title}
                frameborder="0"
                allow="autoplay; fullscreen"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></img>
            </div>
            <div className="WebDev-Outline">
              <h2>{item.title}</h2>
              <div className="WebDev-Description">{item.description}</div>
              <button
                className="WebDev-Link"
                onClick={() => window.open(item.src, "_blank")}
              >
                Check it out
              </button>
            </div>
          </div>
        ))}
      </div>
    </AnimatedPage>
  )
}

export default ProjectsWebDesign
