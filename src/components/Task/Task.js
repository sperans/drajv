import React, { PropTypes, Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as TaskActionCreators from 'actions/task'
import { header, body, title, desc } from './styles.scss'
import { TaskModal, TaskActions } from 'components'

class Task extends Component {

  constructor (props) {
    super(props)
    this.state = {
      isModalOpen: false,
      complete: props.task.complete || false,
    }
  }


  handleTaskComplete = () => {
    this.setState({
      ...this.state,
      complete: !this.state.complete,
    })
    this.props.editTask({
      ...this.props.task,
      complete: !this.props.task.complete,
    })
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
          <TaskActions
            isAuthed={this.props.isAuthed}
            isComplete={this.state.complete}
            handleTaskComplete={this.handleTaskComplete} />
        </div>
      </div>
    )
  }
}

Task.propTypes = {
  task: PropTypes.object.isRequired,
  isAuthed: PropTypes.bool.isRequired,
  index: PropTypes.number.isRequired,
  handleTaskComplete: PropTypes.func,
}

export default connect(
  ({ User }) => ({ isAuthed: User.isAuthed }),
  (dispatch) => (bindActionCreators(TaskActionCreators, dispatch))
  )(Task)
