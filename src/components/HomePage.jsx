import Carousel from "./Carousel"
import SkillsCard from "./SkillsCard"

const HomePage = () => {
  return (
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
        </div>
        <div className="HomePage-Bio">
          <p className="HomePage-Written-Bio">
            <span className="HomePage-Greeting">
              {"HI THERE, I'M JACOB"}
              <br />
            </span>
            <br />
            A seasoned photographer and videographer with a strong understanding
            of industry-standard tools and practices.
            <br />
            <br />
            Holding 10 years of experience in the field, proficient in the
            Adobe, Microsoft and AWS suites, front-end web development and 3D
            modelling. Career highlights include innovative content creation for
            e-commerce and directing large events.
            <br />
            <br />
            Based in Melbourne, Australia, capturing compelling stories through
            the lens.
          </p>
          <img
            src="https://www.dropbox.com/scl/fi/ko26aptfzwqdgd0yqtece/DSC01006.JPG?rlkey=8c778ukizfrb0d9y8it54i07v&raw=1"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default HomePage
