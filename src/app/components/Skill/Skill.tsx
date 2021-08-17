import ProgressBar from "../ProgressBar/ProgressBar"
import "./Skill.style.scss"

interface SkillProps {
  title: string
  image: string
  progress: number
}

function Skill(props: SkillProps) {
  function getSkillLevel(progress: number) {
    if (progress < 25) return "novice"
    if (progress < 50) return "sufficient"
    if (progress < 75) return "proficient"
    if (progress <= 100) return "advanced"

    return "zero"
  }
  return (
    <div className="cv-skill">
      <div className="cv-skill__header">
        <img src={props.image} alt="skill" className="cv-skill__image" />
        <div className="cv-skill__title">{props.title}</div>
      </div>
      <div className="cv-skill__content">
        <span className="cv-skill__level">{getSkillLevel(props.progress)}</span>
        <ProgressBar progress={props.progress} />
      </div>
    </div>
  )
}

export default Skill