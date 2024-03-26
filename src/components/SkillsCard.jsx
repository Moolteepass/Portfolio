/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faClapperboard,
  faSliders,
  faCameraRetro,
  faCloud,
} from "@fortawesome/free-solid-svg-icons"
import { faAws, faWindows, faUnity } from "@fortawesome/free-brands-svg-icons"

const SkillsCard = ({ icon }) => {
  let text = ""
  switch (icon) {
    case "faClapperboard":
      icon = faClapperboard
      text = "VIDEOGRAPHY"
      break
    case "faSliders":
      icon = faSliders
      text = "EDITING"
      break
    case "faAws":
      icon = faAws
      text = "AWS"
      break
    case "faCamera":
      icon = faCameraRetro
      text = "PHOTOGRAPHY"
      break
    case "faWindows":
      icon = faWindows
      text = "M365"
      break
    case "faCloud":
      icon = faCloud
      text = "ADOBE SUITE"
      break
    case "faUnity":
      icon = faUnity
      text = "3D DESIGN"
      break
    default:
      icon = "" // Default icon
  }

  return (
    <div className="Skills-Card-Main">
      <div className="Skills-Card-Icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <p>{text}</p>
    </div>
  )
}

export default SkillsCard
