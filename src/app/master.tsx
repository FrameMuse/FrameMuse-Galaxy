import { Component, StrictMode } from "react"
import { Provider } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "views/home"
import store from "./redux/store"

export class App extends Component {
  // componentDidCatch() { }
  render() {
    return (
      <StrictMode>
        <Provider store={store}>
          <BrowserRouter>
            <Route>
              <Home />
            </Route>
          </BrowserRouter>
        </Provider>
      </StrictMode>
    )
  }
}

