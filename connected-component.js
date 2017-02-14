import React from 'react'
import { connect } from 'react-redux'
import { actions } from '../store/actions'

const mapStateToProps = (state) => ({
  notifications: state.settings.notifications
})

const ConnectedComponent = ({notifications, dispatch}) => (
  <label>
    <span>Notifications</span>
    <input
      type='checkbox'
      checked={notifications}
      onChange={(event) => {
        dispatch(actions.setNotifications(event.target.checked))
      }}
    />
  </label>
)

export default connect(mapStateToProps)(ConnectedComponent)
