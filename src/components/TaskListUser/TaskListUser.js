import React, { PropTypes } from 'react'
import { TaskUser } from 'components'
import { taskListContainer, taskContainer } from './styles.scss'


export default function TaskListUser (props) {
  return (
    <ul className={taskListContainer}>
      {props.tasks.map((task, idx) => {
        return (
          <li className={taskContainer} key={idx} >
            <TaskUser task={task} index={idx}/>
          </li>
        )
      }
      )}
    </ul>
  )
}


TaskListUser.propTypes = {
  tasks: PropTypes.array.isRequired,
}
