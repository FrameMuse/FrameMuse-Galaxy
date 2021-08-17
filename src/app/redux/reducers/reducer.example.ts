const initialState = {}

export default (state = initialState, action: { type: string, payload: Record<string, unknown> }): typeof initialState => {
  switch (action.type) {

    case "EVENT":
      return { ...state, ...action.payload }

    default:
      return state
  }
}
