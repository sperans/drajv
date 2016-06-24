import { getUserDetails, editUser } from '../api/userDetails'


function fetchingUserDetails () {
  return {
    type: 'FETCHING_USER_DETAILS',
    itsLoading: true,
  }
}

function fetchingUserDetailsSuccess (userdetails) {
  return {
    type: 'FETCHING_USER_DETAILS_SUCCESS',
    itsLoading: false,
    userdetails,
  }
}

function fetchingUserDetailsFailure (error) {
  return {
    type: 'FETCHING_USER_DETAILS_FAILURE',
    itsLoading: true,
    error,
  }
}

function updateUserDetails (userdetails) {
  return {
    type: 'UPDATE_USER_DETAILS',
    userdetails,
  }
}

export function fetchUserDetails () {
  return function (dispatch) {
    dispatch(fetchingUserDetails)
    return getUserDetails()
      .then(({ data }) => dispatch(fetchingUserDetailsSuccess(data)))
      .catch((err) => dispatch(fetchingUserDetailsFailure(err)))
  }
}

export function editUserDetails (userdetails) {
  return function (dispatch, getState) {
    let userdetails = getState().UserDetails.userdetails
    return editUser(userdetails)
      .then((data) => {
        return dispatch(updateUserDetails(userdetails.map((item, idx, arr) => {
          if (item._id === userdetails._id) return userdetails
          else return item
        })))
      })
      .catch((err) => console.error(err))
  }
}
