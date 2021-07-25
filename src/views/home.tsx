import "assets/scss/base.scss"
import AuthorPhoto from "assets/images/author-photo.jpg"
export default function Home() {
  return (
    <div className="cv">
      <div className="cv-author-photo">
        <img src={AuthorPhoto} alt="author" className="cv-author-photo__image" />
      </div>
      <article className="cv-article">
        <h2 className="cv-article__title">Biography</h2>
        <p className="cv-article__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio dignissimos ea. Eaque minus dolorum aliquam delectus sapiente consequatur quod fugiat aliquid blanditiis doloremque? Sequi modi quas doloribus quisquam maxime.</p>
        <div className="cv-article__bottom">

        </div>
      </article>
    </div>
  )
}