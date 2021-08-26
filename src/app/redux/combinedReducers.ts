/* eslint-disable @typescript-eslint/no-var-requires */
/*
** StandoffCase  Copyright (C) 2020  sunaiclub
** Full License is in the root directory
*/

// Auto-Generated file

import { combineReducers } from "redux"

const reducers = {
  // --Reducers Start--
  user: require("./reducers/user").default as typeof import("./reducers/user").default,
  // --Reducers End--
}

const combinedReducers = combineReducers(reducers)
export default combinedReducers