import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const SkillsCard = ({
  icon,
  name,
  index,
  onDragStart,
  onDragOver,
  onDrop,
  isDragged,
}) => {
  return (
    <div
      className={`Skills-Card-Main ${isDragged ? "dragged" : ""}`}
      draggable
      onDragStart={(e) => onDragStart(e, index)}
      onDragOver={onDragOver}
      onDrop={(e) => onDrop(e, index)}
    >
      <div className="Skills-Card-Icon">
        <FontAwesomeIcon icon={icon} />
      </div>
      <span className="Skills-Card-Name">{name}</span>
    </div>
  )
}

export default SkillsCard
