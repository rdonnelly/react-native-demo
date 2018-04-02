import * as types from './actionTypes'

export function incrementCount() {
  return dispatch => {

    setTimeout(() => {
      dispatch({ type: types.INCREMENT_COUNT });
    }, 1000);
  }
}
