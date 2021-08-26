import "assets/scss/master.scss"
import Skill from "app/components/Skill/Skill"
import { ReactComponent as StackOfPaperSVG } from "assets/images/stack-of-square-papers.svg"
import Author from "./Author"
import { dispatchGithubUser } from "app/api/github"
import { useSelector } from "react-redux"
import Preview from "app/components/Preview/Preview"
import StandoffCaseJPG from "assets/images/projects/standoffcase.jpg"
dispatchGithubUser()
export default function Home() {
  return <CV />
}

function CV() {
  const user = useSelector(state => state.user)
  return (
    <div className="cv">
      <Author />
      <Space size="1.5em" />
      <article className="cv-article">
        <div className="cv-article__content">
          <h3 className="cv-article__title">Hello!</h3>
          <p className="cv-article__text">
            Here you can find my skills and some projects I built.<br />
            <small>I'm so lazy to add projects, so here's only one</small><br />
            <br />
            I always work on projects that not only will satisfy demands of consumers
            but also give them nice approaches and quick responses.
            My desire is to make people happy about using a website.<br />
            <br />
            If you want to contact me:
            <br />
            Telegram: <a target="_blank" href="https://t.me/framemuse" rel="noreferrer">@framemuse</a>
            <br />
            Gmail: <a target="_blank" href="mailto:minicablestone@gmail.com" rel="noreferrer">minicablestone@gmail.com</a>
          </p>
        </div>
        <small className="cv-article__small">{user.name} - <a href={user.url} target="_blank" rel="noopener noreferrer">Github</a></small>
      </article>
      <Section title="Skills">
        <Stack title="Front-end">
          <Skill title="CSS" progress={90} />
          <Skill title="SCSS" progress={80} />
          <Skill title="HTML" progress={78} />
          <Skill title="React" progress={75} />
          <Skill title="Javascript" progress={90} />
          <Skill title="Typescript" progress={80} />
          <Skill title="NodeJs" progress={25} />
        </Stack>
      </Section>
      <Section title="Projects">
        <div className="project-previews grid">
          <Preview
            title="StandoffCase"
            desc="Full website on react from scratch. I built the front side of the project using typescript with React[redux] & SCSS."
            image={StandoffCaseJPG}
            urls={[
              "https://standoffcase.net",
              "https://casesimulator.framemuse.com"
            ]}
          />
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
      <h2 className="section__title">{props.title}</h2>
      {props.children}
    </section>
  )
}

function Stack(props: { title: string; children: any }) {
  return (
    <div className="stack">
      <div className="stack-header">
        <div className="stack-header__image">
          <StackOfPaperSVG />
        </div>
        <h4 className="stack-header__title">{props.title}</h4>
      </div>
      <div className="stack__container grid">
        {props.children}
      </div>
    </div>
  )
}