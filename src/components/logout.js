import React, { Component } from 'react'
import { Auth } from './auth'
import { Redirect } from 'react-router-dom'

export default class Logout extends Component {

  constructor () {
    super()
    Auth.logout()
  }

  render () {
    return (
      <Redirect to='/'/>
    )
  }
}