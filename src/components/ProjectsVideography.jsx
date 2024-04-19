/* eslint-disable react/no-unknown-property */
import AnimatedPage from "./AnimatedPage"
import { videos } from "./images.json"

const ProjectsVideography = () => {
  return (
    <AnimatedPage>
      <div className="Video-All">
        {videos.map((item, index) => (
          <div key={index} className="Video-Container">
            <div className="Videoplayer-Container">
              <iframe
                width="560"
                height="315"
                src={item.src}
                title={item.title}
                frameborder="0"
                allow="autoplay; fullscreen"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
            </div>
            <div className="Video-Outline">
              <h2>{item.title}</h2>
              <h3 className="Video-Overview">
                {item.runtime} • {item.tags} • {item.role}
              </h3>
              <div className="Video-Description">{item.description}</div>
            </div>
          </div>
        ))}
      </div>
    </AnimatedPage>
  )
}

export default ProjectsVideography
