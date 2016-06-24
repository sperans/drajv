import React, { PropTypes } from 'react'
import { icon, actions, complete, check, edit, remove } from './styles.scss'

function TaskActionsUser (props) {
  return props.isAuthed === true
    ? (
      <div className={actions}>
        <div>
            <i className={`ion-ios-compose ${icon} ${edit}`} onClick={props.handleModalOpen}></i>
            <i className={`ion-ios-close ${icon} ${remove}`} onClick={props.handleTaskDelete}></i>
        </div>
      </div>
    )
    : <span></span>
}

TaskActionsUser.propTypes = {
  isAuthed: PropTypes.bool.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
  handleTaskDelete: PropTypes.func.isRequired,
}

export default TaskActionsUser
