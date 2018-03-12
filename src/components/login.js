import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginUser } from '../actions'

class Login extends Component {

  constructor (props) {
    super(props)
    this.state = {
      email: null,
      password: null,
      error: null
    }
  }

  login () {
    const result = this.props.loginUser(this.state);

    if (result.payload.success) {
      window.location.href = '/';
    } else {
      this.setState({error: 'username or password wrong!'})
    }
  }

  render () {
    return (
      <form onSubmit={this.login}>
        <legend>Login</legend>

        <div className="form-group">
          <label for="">Email</label>
          <input type="text" className="form-control" name="email"
                 onChange={(e) => this.setState({email: e.target.value})}/>
        </div>

        <div className="form-group">
          <label for="">Password</label>
          <input type="password" className="form-control" name="password"
                 onChange={(e) => this.setState({password: e.target.value})}/>
        </div>

        <div className="form-group">
          <button type="button" className="btn btn-primary m-r-5" onClick={this.login.bind(this)}>Login</button>
          <Link to='/register'>Register</Link>
        </div>

        <div className="div form-group">
          <p className="warning">{this.state.error}</p>
        </div>
      </form>
    )

  }
}

function mapStateToProps({users}) {
  return {user: users};
}


export default connect(mapStateToProps, { loginUser })(Login);