import React, { PropTypes, Component } from 'react'
import { jumbotron } from './styles.scss'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as userDetailsActionCreators from 'actions/userDetails'




class User extends Component {

  constructor (props) {
    super(props)
    this.state = {
      editing: false,
      userdetails: {
      firstName: this.props.userdetails.firstName || 'Your First Name',
      },
    }
  }

  handleInputChange = (e) => {
    this.setState({
      ...this.state,
      userdetails: {
        ...this.state.userdetails,
        [e.target.name]: e.target.value,
      },
    })
  }

  handleSubmitEdit = (e) => {
    e.preventDefault()
    this.props.editUserDetails(this.state.userdetails)
      .catch((err) => console.error(err))
  }

  render = () => {
    const editing = this.state.editing;
    return (
      <div>{editing ? this.renderEdit() : this.renderUserDetails()}</div>
    )
  }

  renderUserDetails = () => {
    console.log(this.state);
    return (
      <div className={jumbotron}>
      <h2>User details</h2>
      <p>Username Name: <span>{this.state.userdetails.firstName}</span></p>
      <p>First Name: <span onClick={this.edit}>{this.state.userdetails.firstName}</span></p>
      <p>Last Name: <span>Miklavcic</span></p>
      <p>City of residence: <span>City</span></p>
      <p>Member Since: <span>Member Since</span></p>
      <p>Total Rides Taken: <span>631</span></p>
      <p>Passanger Rating: <span>Member Since</span></p>
      </div>
    )
  }

  renderEdit = () => {
    return (
      <div className={jumbotron}>
      <h2>User details</h2>
      <p>Username Name: <span>Sperans</span></p>
      <p>First Name: <textarea
       autoFocus={true}
       onBlur={this.finishEdit}
       onKeyPress={this.checkEnter}
       value={this.state.userdetails.firstName}
       name='firstName'
       onChange={this.handleInputChange}
       >{this.props.userdetails.firstName}</textarea></p>
      <p>Last Name: <span>Miklavcic</span></p>
      <p>City of residence: <span>City</span></p>
      <p>Member Since: <span>Member Since</span></p>
      <p>Total Rides Taken: <span>631</span></p>
      <p>Passanger Rating: <span>Member Since</span></p>
      </div>
    )
  }

  edit = () => {
    this.setState({
      editing: true
    })
  }
  checkEnter = (e) => {
    if(e.key === "Enter") {
      this.handleSubmitEdit(e);
    }
  }
}



User.propTypes = {
  userdetails: PropTypes.object.isRequired,
  editUserDetails: PropTypes.func.isRequired,
  handleSubmitEdit: PropTypes.func,
}


export default connect(
  (state) => ({userdetails: state.UserDetails.userdetails,}),
  (dispatch) => (bindActionCreators(userDetailsActionCreators, dispatch))
)(User)
