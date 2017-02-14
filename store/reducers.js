import { TYPES } from './actions'

const initialStates = {
  settings: {
    notifications: true
  }
}

export const settings = (state = initialStates.settings, action) => {
  switch (action.type) {
    case TYPES.SET_NOTIFICATIONS:
      return Object.assign({}, state, { notifications: action.bool })
    default:
      return state
  }
}
