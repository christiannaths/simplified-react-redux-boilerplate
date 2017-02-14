export const TYPES = {
  SET_NOTIFICATIONS: 'SET_NOTIFICATIONS'
}

export const actions = {
  setNotifications: (bool) => ({ type: TYPES.SET_NOTIFICATIONS, bool })
}
