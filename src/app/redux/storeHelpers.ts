import { DefaultRootState } from "react-redux"
import { Action, combineReducers, ReducersMapObject } from "redux"
import store from "./store"

let asyncReducers: ReducersMapObject<DefaultRootState>
const subscriptions = new Set<Function>()

export function actionSubscribe(callback: (action: Action) => void) {
  subscriptions.add(callback)
  return () => {
    subscriptions.delete(callback)
  }
}
export function injectReducers(reducers: ReducersMapObject) {
  asyncReducers = {
    ...asyncReducers,
    ...reducers
  }
  store.replaceReducer(combineReducers(asyncReducers))
}
