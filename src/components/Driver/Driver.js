import React, { PropTypes, Component } from 'react'
import { header } from './styles.scss'


class Driver extends Component {
  render() {
    return (
      <div className={header}>
      <h2>Driver details</h2>
      <p>Driving licence since: <span>2000</span></p>
      <p>Total Rides Made: <span>231</span></p>
      <p>Driver Rating<span>85%</span></p>
      </div>
    )
  }
}

export default Driver;
