import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Jumbotron, TaskList } from 'components'
import * as taskActionCreators from 'actions/task'
import { highlight, title } from './styles.scss'

class HomeContainer extends Component {

  componentDidMount = () => {
    this.props.fetchTasks()
  }

  render () {
    console.log("this is HomeContainer"); //ADDED
    return (
      <div>
        <Jumbotron>
          <h1 className={title}>{'An '}<span className={highlight}>{'All Rides'}</span>{' & '}<span className={highlight}>{'Reservation'}</span>{' Page'}</h1>
        </Jumbotron>
        <TaskList tasks={this.props.tasks} users={this.props.users}/>
      </div>
    )
  }
}

HomeContainer.propTypes = {
  fetchTasks: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired,
}

export default connect(
    (state) => ({
      tasks: state.Task.tasks,
      isLoading: state.Task.isLoading,
    }),
    (dispatch) => (bindActionCreators(taskActionCreators, dispatch))
  )(HomeContainer)
