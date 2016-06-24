import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TaskActionCreators from 'actions/task'
import { header, body, title, desc } from './styles.scss'
import { TaskModal, TaskActionsUser } from 'components'

class TaskUser extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false,
      complete: props.task.complete || false,
    }
  }

  handleModalOpen = (e) => {
    e.preventDefault()
    if (!this.props.isAuthed) return
    this.setState({
      ...this.state,
      isModalOpen: true,
    })
  }

  handleModalClose = (e = false) => {
    if (e) e.preventDefault()
    this.setState({
      ...this.state,
      isModalOpen: false,
    })
  }

  handleTaskDelete = () => {
    this.props.deleteTask(this.props.task._id, this.props.index)
  }

  handleSubmit = (task, e) => {
    e.preventDefault()
    this.props.editTask({
      ...this.props.task,
      ...task
    })
    .then(() => this.handleModalClose())
    .catch((err) => console.error(err))
  }


  render () {
    return (
      <div>
        <div className={header}>
          <div className={title}>{this.props.task.title}
          <p>{this.props.task.owner}</p>
          </div>
        </div>
        <div className={body}>
          <p className={desc}>{this.props.task.desc}</p>
          <TaskActionsUser
            isAuthed={this.props.isAuthed}
            handleModalOpen={this.handleModalOpen}
            handleTaskDelete={this.handleTaskDelete}
              />
        </div>
        <TaskModal
          isOpen={this.state.isModalOpen}
          closeModal={this.handleModalClose}
          handleSubmit={this.handleSubmit}
          task={this.props.task} />
      </div>
    )
  }
}

TaskUser.propTypes = {
  task: PropTypes.object.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  editTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  handleModalOpen: PropTypes.func,
  handleTaskDelete: PropTypes.func,
}

export default connect(
  ({ User }) => ({ isAuthed: User.isAuthed }),
  (dispatch) => (bindActionCreators(TaskActionCreators, dispatch))
)(TaskUser)
