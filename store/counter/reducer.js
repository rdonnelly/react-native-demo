import * as types from './actionTypes.js'

const initialState = {
  count: 0,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case types.INCREMENT_COUNT:
      return {
        ...state,
        count: state.count + 1,
      }
    default:
      return initialState
  }
}
