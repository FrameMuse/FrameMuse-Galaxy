import ReactDOM from "react-dom"
import { App } from "app/master"
import { createElement } from "react"
import reportWebVitals from "reportWebVitals"

ReactDOM.render(createElement(App),
  document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()