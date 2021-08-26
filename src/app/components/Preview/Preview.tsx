import "./Preview.style.scss"

interface PreviewProps {
  title: string
  desc: string
  image: string
  urls: string[]
}

function Preview(props: PreviewProps) {
  return (
    <div className="preview">
      <img src={props.image} alt="preview" className="preview__image" />
      <p className="preview__desc">{props.desc}</p>
      <div className="preview__bottom">
        {props.urls.map((url, key) => (
          <a href={url} target="_blank" rel="noopener noreferrer" key={key}>{url.replace(/http:|https:|\/\/|/ig, "")}</a>
        ))}
      </div>
    </div>
  )
}

export default Preview
