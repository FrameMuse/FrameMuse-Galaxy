import { Component, StrictMode } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Home from "views/home"

export class App extends Component {
  // componentDidCatch() { }
  render() {
    return (
      <StrictMode>
        {/* <Provider store={store}> */}
        <BrowserRouter>
          <Route>
            <Home />
          </Route>
        </BrowserRouter>
        {/* </Provider> */}
      </StrictMode>
    )
  }
}

