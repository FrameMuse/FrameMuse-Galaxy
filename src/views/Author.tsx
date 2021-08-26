import { useSelector } from "react-redux"

function AuthorPhoto() {
  const user = useSelector(state => state.user)
  return (
    <div className="cv-author-photo">
      <img src={user.avatar_url} alt="author" className="cv-author-photo__image" />
    </div>
  )
}

function Author() {
  // const user = useSelector(state => state.user)
  return (
    <div className="cv-author">
      {/* <div className="cv-author__container"> */}
      {/* <div className="cv-author__side">
          <h3>{user.name}</h3>
          <div className="cv-author__links">
            <a href="https://github.com/framemuse">Github</a>
          </div>
        </div> */}
      <AuthorPhoto />
      {/* <div className="cv-author__side">
          Date: 04.11.2002
        </div> */}
      {/* </div> */}
    </div>
  )
}

export default Author