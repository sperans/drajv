import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Jumbotron, Car, User, Driver } from 'components'
import * as userDetailsActionCreators from 'actions/userDetails'
import { highlight, title } from './styles.scss'

class UserContainer extends Component {

  componentDidMount = () => {
    this.props.fetchUserDetails()
  }


  render () {
    console.log(this.props.userdetails);
    return (
      <div>
        <Jumbotron>
          <h1 className={title}>{'An '}<span className={highlight}>{'User'}</span>{' & '}<span className={highlight}>{'Car'}</span>{' Page'}</h1>
        </Jumbotron>
        <User userdetails={this.props.userdetails}/>
        <p>{this.props.userdetails.firstName}</p>
      </div>
    )
  }
}

UserContainer.propTypes = {
  fetchUserDetails: PropTypes.func.isRequired,
  userdetails: PropTypes.object.isRequired,
}

export default connect(
    (state) => ({
      userdetails: state.UserDetails.userdetails,
      itsLoading: state.UserDetails.isLoading,
    }),
    (dispatch) => (bindActionCreators(userDetailsActionCreators, dispatch))
  )(UserContainer)
