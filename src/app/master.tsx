import { Component, StrictMode } from "react"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { compose, applyMiddleware, createStore } from "redux"
import thunk from "redux-thunk"
import ViewRouter from "./components/ViewRouter"
import { combinedReducers } from "./reducers/master"
import Home from "views/home"

declare module "react-redux" {
  type DefaultReducers = ReturnType<typeof combinedReducers>
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultRootState extends DefaultReducers { }
}

const store = createStore(combinedReducers, compose(applyMiddleware(thunk)))

export class App extends Component {
  // componentDidCatch() { }
  render() {
    return (
      <StrictMode>
        <Provider store={store}>
          {/* <BrowserRouter> */}
          <Home />
          {/* </BrowserRouter> */}
        </Provider>
      </StrictMode>
    )
  }
}

