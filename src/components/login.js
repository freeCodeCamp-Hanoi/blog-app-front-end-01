import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions'
import { Auth } from './auth'
import axios from 'axios'

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      username: null,
      password: null,
      error: null,
      redirect: false
    }
  }

  login () {
    this.props.loginUser(this.state, this.success.bind(this), this.failure.bind(this))
  }

  success (res) {
    Auth.setToken(res.data.token)
    axios.defaults.headers.common['Authorization'] = 'Bearer ' + Auth.getToken() //lmao
    this.setState({redirect: true})
  }

  failure (error) {
    this.setState({error: 'Wrong username or password'});
    this.setState({redirect: false});
  }

  render () {
    const {redirect} = this.state

    if (redirect) {
      return <Redirect to='/'/>
    }

    return (
      <form onSubmit={this.login}>
        <legend>Login</legend>

        <div className="form-group">
          <label>Email</label>
          <input type="text" className="form-control" name="username"
                 onChange={(e) => this.setState({username: e.target.value})}/>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" className="form-control" name="password"
                 onChange={(e) => this.setState({password: e.target.value})}/>
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-primary m-r-5" onClick={this.login.bind(this)}>Login</button>
          <Link to='/register'>Register</Link>
        </div>

        <div className="form-group">
          <p className="text-danger">{this.state.error}</p>
        </div>
      </form>
    )

  }
}

function mapStateToProps (state, response) {
  return {user: state.users}
}

export default connect(mapStateToProps, {loginUser})(Login)