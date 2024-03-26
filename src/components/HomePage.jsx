import Carousel from "./Carousel"
import SkillsCard from "./SkillsCard"

const HomePage = () => {
  return (
    <div className="HomePage">
      <div className="HomePage-Main">
        <Carousel />
      </div>
      <h1 className="What-I-Do">THE KIND OF WORK I DO</h1>
      <div className="Skills-Card-All">
        <SkillsCard icon={"faCamera"} />
        <SkillsCard icon={"faClapperboard"} />
        <SkillsCard icon={"faAws"} />
        <SkillsCard icon={"faSliders"} />
        <SkillsCard icon={"faWindows"} />
        <SkillsCard icon={"faCloud"} />
        <SkillsCard icon={"faUnity"} />
      </div>
    </div>
  )
}

export default HomePage
