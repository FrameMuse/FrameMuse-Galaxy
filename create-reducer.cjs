const { readFileSync, writeFileSync } = require("fs");

const __DIR__ = "./src/app/reducers"
const REDUCERS_MAP_PATH = __DIR__ + "/reducers.map.json"
const REDUCER_EXAMPLE_PATH = __DIR__ + "/reducer.example.ts"
const REDUCER_NAME = process.argv[2]

function createReducer() {
  const reducerPath = __DIR__ + "/" + REDUCER_NAME + ".ts"
  writeFileSync(reducerPath, readFileSync(REDUCER_EXAMPLE_PATH))
}

function createReducersMap() {
  const reducersMapFile = readFileSync(REDUCERS_MAP_PATH)
  const reducersMapJson = JSON.parse(reducersMapFile)

  const data = {
    ...reducersMapJson,
    [REDUCER_NAME]: "./" + REDUCER_NAME + ".ts"
  }

  return JSON.stringify(data, null, 2)
}

createReducer()
writeFileSync(REDUCERS_MAP_PATH, createReducersMap())