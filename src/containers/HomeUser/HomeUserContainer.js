import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Jumbotron, TaskListUser } from 'components'
import * as taskActionCreators from 'actions/task'
import { highlight, title } from './styles.scss'

class HomeUserContainer extends Component {

  componentDidMount = () => {
    this.props.fetchUserTasks()
  }

  render () {
    console.log("this is HomeUserContainer"); //ADDED
    return (
      <div>
        <Jumbotron>
          <h1 className={title}>{'A '}<span className={highlight}>{'My Rides'}</span>{' & '}<span className={highlight}>{'C.R.U.D'}</span>{' Page'}</h1>
        </Jumbotron>
        <TaskListUser tasks={this.props.tasks} users={this.props.users}/>
        <hr></hr>
        <Jumbotron>
          <h1 className={title}>{'My '}<span className={highlight}>{'Reservations'}</span>{' & '}<span className={highlight}>{'NonConfiremd'}</span>{' Page'}</h1>
        </Jumbotron>
      </div>
    )
  }
}

HomeUserContainer.propTypes = {
  fetchUserTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
}

export default connect(
    (state) => ({
      tasks: state.Task.tasks,
      isLoading: state.Task.isLoading
    }),
    (dispatch) => (bindActionCreators(taskActionCreators, dispatch))
  )(HomeUserContainer)
