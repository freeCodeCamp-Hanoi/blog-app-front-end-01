import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { registerUser } from '../actions'
import { Auth } from './auth'
import axios from 'axios'

class Register extends Component {

  state = {
    error: null,
    redirect: false,
    email: '',
    username: '',
    password: ''
  }

  register = () => {
    this.props.registerUser(this.state, this.success, this.failure)
  }

  success = (res) => {
    this.setState({ redirect: true })
  }

  failure = (error) => {
    const res = error.response
    this.setState({ error: (res && res.data.message) || error.message || 'Something went wrong' })
    this.setState({ redirect: false })
  }

  render() {
    const {redirect} = this.state

    if (redirect) {
      return <Redirect to='/login'/>
    }

    return (
      <form onSubmit={this.register}>
        <legend>Register</legend>

        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" name="email"
                 onChange={(e) => this.setState({ email: e.target.value })}/>
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" className="form-control" name="username"
                 onChange={(e) => this.setState({ username: e.target.value })}/>
        </div>


        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password"
                 onChange={(e) => this.setState({ password: e.target.value}) }/>
        </div>

        <div className="form-group">
          <Link to='/login' style={{marginRight: '10px'}}>Login</Link>
          <button type="button" className="btn btn-primary m-r-5" onClick={this.register}>Register</button>
        </div>

        <div className="form-group">
          <p className="text-danger">{this.state.error}</p>
        </div>
      </form>
    )

  }
}

export default connect(null, {registerUser})(Register)
