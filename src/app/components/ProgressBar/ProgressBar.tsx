import "./ProgressBar.style.scss"
// import "framemuse-utils"
import { classWithModifiers } from "framemuse-utils"

// classWithModifiers

interface ProgressBarProps {
  progress: number
}

function ProgressBar(props: ProgressBarProps) {
  const modifiers: string[] = []
  if (props.progress >= 50) {
    modifiers.push("most")
  }
  return (
    <div className="progress-bar">
      <div className="progress-bar__line" style={{ "--progress": props.progress }} />
      <div className={classWithModifiers("progress-bar__percent", ...modifiers)}>{props.progress}%</div>
    </div>
  )
}

export default ProgressBar