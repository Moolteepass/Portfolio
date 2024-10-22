"use client"

import { useState } from "react"
import Carousel from "@/components/Carousel"
import SkillsCard from "@/components/SkillsCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faCamera,
  faClapperboard,
  faSliders,
  faCloud,
} from "@fortawesome/free-solid-svg-icons"
import {
  faAws,
  faUnity,
  faReact,
  faHtml5,
  faCss3,
  faJs,
  faPython,
  faWindows,
} from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

const HomePage = () => {
  const [skills, setSkills] = useState([
    { icon: faCamera, name: "Photography" },
    { icon: faClapperboard, name: "Videography" },
    { icon: faAws, name: "AWS" },
    { icon: faSliders, name: "Editing" },
    { icon: faWindows, name: "Windows" },
    { icon: faCloud, name: "Cloud Computing" },
    { icon: faUnity, name: "Unity" },
    { icon: faReact, name: "React" },
    { icon: faHtml5, name: "HTML5" },
    { icon: faCss3, name: "CSS3" },
    { icon: faJs, name: "JavaScript" },
    { icon: faPython, name: "Python" },
  ])

  const [dragIndex, setDragIndex] = useState(null)

  const onDragStart = (e, index) => {
    e.dataTransfer.setData("text/plain", index)
    setDragIndex(index)
  }

  const onDragOver = (e) => {
    e.preventDefault()
  }

  const onDrop = (e, dropIndex) => {
    e.preventDefault()
    const dragIndex = Number(e.dataTransfer.getData("text/plain"))
    const newSkills = [...skills]
    const [reorderedItem] = newSkills.splice(dragIndex, 1)
    newSkills.splice(dropIndex, 0, reorderedItem)
    setSkills(newSkills)
    setDragIndex(null)
  }

  return (
    <>
      <Carousel />
      <div className="HomePage-Container">
        <h1 className="What-I-Do">SKILLS</h1>
        <div className="Skills-Card-All">
          {skills.map((skill, index) => (
            <SkillsCard
              key={index}
              icon={skill.icon}
              name={skill.name}
              index={index}
              onDragStart={onDragStart}
              onDragOver={onDragOver}
              onDrop={onDrop}
              isDragged={dragIndex === index}
            />
          ))}
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
          <Image
            src="https://monkey-media-portfolio-images.s3.ap-southeast-2.amazonaws.com/logo/JacobMcCormack.webp"
            alt="Jacob McCormack"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  )
}

export default HomePage
