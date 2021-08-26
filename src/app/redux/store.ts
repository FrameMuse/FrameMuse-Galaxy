/*
** StandoffCase  Copyright (C) 2020  sunaiclub
** Full License is in the root directory
*/

import { createStore, applyMiddleware, compose } from "redux"
import combinedReducers from "./combinedReducers"
import thunk from "redux-thunk"
import { actionSubscribe, injectReducers } from "./storeHelpers"

const store = createStore(combinedReducers, compose(applyMiddleware(thunk)))
store.actionSubscribe = actionSubscribe
store.injectReducers = injectReducers
export default store
// Declarations
declare module "redux" {
  interface Store {
    actionSubscribe: typeof actionSubscribe
    injectReducers: typeof injectReducers
  }
}
declare module "react-redux" {
  interface DefaultRootState extends ReturnType<typeof store.getState> { }
  function useDispatch<TDispatch = typeof store.dispatch>(): TDispatch;
}