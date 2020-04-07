import {TOGGLE_DROPDOWN} from './types.js'

const toggleDropdown = toggle => {
  return {
    type: TOGGLE_DROPDOWN,
    payload: new Promise((resolve, reject) => {
      resolve(toggle)
    })
  }
}

export {toggleDropdown}
