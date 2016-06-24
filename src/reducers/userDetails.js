const initialState = {
  userdetails: {},
  itsLoading: true,
  error: '',
}

export default function UserDetails (state = initialState, action) {
  switch (action.type) {
    case 'FETCHING_USER_DETAILS' :
      return {
        ...state,
        itsLoading: true,
      }
    case 'FETCHING_USER_DETAILS_SUCCESS' :
      return {
        ...state,
        itsLoading: false,
        userdetails: action.userdetails,
      }
    case 'FETCHING_USER_DETAILS_FAILURE' :
      return {
        ...state,
        itsLoading: false,
        error: action.error,
      }
    case 'UPDATE_USER_DETAILS' :
      return {
        ...state,
        userdetails: action.userdetails,
      }
    default :
      return state
  }
}
