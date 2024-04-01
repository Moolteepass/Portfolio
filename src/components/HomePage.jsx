import Carousel from "./Carousel"
import SkillsCard from "./SkillsCard"

import AnimatedPage from "./AnimatedPage"

const HomePage = () => {
  return (
    <AnimatedPage>
      <div className="HomePage">
        <div className="HomePage-Main">
          <Carousel />
        </div>
        <div className="HomePage-Container">
          <h1 className="What-I-Do">SKILLS</h1>
          <div className="Skills-Card-All">
            <SkillsCard icon={"faCamera"} />
            <SkillsCard icon={"faClapperboard"} />
            <SkillsCard icon={"faAws"} />
            <SkillsCard icon={"faSliders"} />
            <SkillsCard icon={"faWindows"} />
            <SkillsCard icon={"faCloud"} />
            <SkillsCard icon={"faUnity"} />
            <SkillsCard icon={"faReact"} />
            <SkillsCard icon={"faHtml5"} />
            <SkillsCard icon={"faCss3"} />
            <SkillsCard icon={"faJs"} />
            <SkillsCard icon={"faPython"} />
          </div>
          <div className="HomePage-Bio">
            <p className="HomePage-Written-Bio">
              <span className="HomePage-Greeting">
                {"HI THERE, I'M JACOB"}
                <br />
              </span>
              <br />
              A seasoned photographer and videographer with a strong
              understanding of industry-standard tools and practices.
              <br />
              <br />
              Holding 10 years of experience in the field, proficient in the
              Adobe, Microsoft and AWS suites, front-end web development and 3D
              modelling. Career highlights include innovative content creation
              for e-commerce and directing large events.
              <br />
              <br />
              Based in Melbourne, Australia, capturing compelling stories
              through the lens.
            </p>
            <img
              src="https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/logo/JacobMcCormack.webp"
              alt=""
            />
          </div>
        </div>
      </div>
    </AnimatedPage>
  )
}

export default HomePage
