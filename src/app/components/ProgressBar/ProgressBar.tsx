import "./ProgressBar.style.scss"

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

/**
 * Join modifiers with origin class
 * @returns `"origin-class origin-class--modifier"`
 */
export function classWithModifiers(originClass: string, ...modifiers: Array<string | number | false | null | undefined>): string {
  modifiers = modifiers.filter(Boolean)
  if (!modifiers.length) return originClass

  const space = " "
  const separator = "--"

  modifiers = modifiers.map(modifier => originClass + separator + modifier)
  return originClass + space + modifiers.join(space)
}

export default ProgressBar