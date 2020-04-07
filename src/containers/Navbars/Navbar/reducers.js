import {TOGGLE_DROPDOWN_FULFILLED} from './types.js'

export default (state = {toggle: false}, action = {}) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN_FULFILLED:
      return {
        ...state,
        toggle: action.payload
      }
    default:
      return state
  }
}
