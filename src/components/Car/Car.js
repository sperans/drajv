import React, { PropTypes, Component } from 'react'
import { header } from './styles.scss'


class Car extends Component {
  render() {
    return (
      <div className={header}>
      <h2>Car details</h2>
      <p>Car Make: <span>BMW</span></p>
      <p>Car Model: <span>X5</span></p>
      <p>Color: <span>Black</span></p>
      <p>Year of build: <span>2008</span></p>
      </div>
    )
  }
}

export default Car;
