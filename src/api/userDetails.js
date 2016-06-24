export function getUserDetails () {
  return Stamplay.Object('userdetails').findByCurrentUser()
}

export function editUser (userDetails) {
  return Stamplay.Object('userdetails').patch(userdetails._id, userdetails)
}
