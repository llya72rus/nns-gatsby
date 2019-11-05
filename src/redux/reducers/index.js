import * as actionTypes from '../actions/action-types'
export const lang = (state = 'ru', action) => {
  switch (action.type) {
    case actionTypes.TOGGLE_LANG:
      return action.payload

    default:
      return state
  }
}
