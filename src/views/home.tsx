import "assets/scss/master.scss"
import AuthorPhoto from "assets/images/author-photo.jpg"
import { ComponentProps } from "react"
import Skill from "app/components/Skill/Skill"
export default function Home() {
  return <CV />
}

function CV() {
  return (
    <div className="cv">
      <div className="cv-author-photo">
        <img src={AuthorPhoto} alt="author" className="cv-author-photo__image" />
      </div>
      <Space size="1.5em" />
      <article className="cv-article">
        <div className="cv-article__content">
          <h3 className="cv-article__title">Biography</h3>
          <p className="cv-article__text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint distinctio dignissimos ea. Eaque minus dolorum aliquam delectus sapiente consequatur quod fugiat aliquid blanditiis doloremque? Sequi modi quas doloribus quisquam maxime.</p>
        </div>
        <small className="cv-article__small">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </small>
      </article>
      <Section title="Skills">
        <div className="skils-container grid">
          <Skill title="CSS" progress={90} image="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png" />
          <Skill title="SCSS" progress={80} image="https://webcademy.ru/blog/wp-content/uploads/2021/03/original-870x400.png" />
          <Skill title="React" progress={75} image="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/800px-React-icon.svg.png" />
          <Skill title="Typescript" progress={80} image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt25iRJtWbbbIJ2oMqNwbHwkdXTK3P9hzdgg&usqp=CAU" />
          <Skill title="NodeJs" progress={45} image="https://www.clipartmax.com/png/middle/89-894960_js-discord-bot-logo-node-js-and-react-js.png" />
          {/* <Skill title="CSS" progress={90} image="none" />
          <Skill title="CSS" progress={90} image="none" /> */}
        </div>
      </Section>
    </div>
  )
}

function Space(props: { size: `${number}${"em" | "px"}` }) {
  return <hr style={{ height: props.size }} />
}

function Section(props: { title: string; children: any }) {
  return (
    <section className="section">
      <Space size="2.5em" />
      <h3 className="section__title">{props.title}</h3>
      {props.children}
    </section>
  )
}