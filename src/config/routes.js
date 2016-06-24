import React from 'react'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import {
  MainContainer,
  HomeContainer,
  LoginContainer,
  SignupContainer,
  HomeUserContainer,
  UserContainer,
} from 'containers'

export default function routes () {
  return (
    <Router history={hashHistory}>
      <Router path='/' component={MainContainer}>
        <Route path='login' component={LoginContainer} />
        <Route path='signup' component={SignupContainer} />
        <IndexRoute component={HomeContainer} />
        <Route path='myrides' component={HomeUserContainer} />
        <Route path='mydetails' component={UserContainer} />
      </Router>
    </Router>
  )
}
