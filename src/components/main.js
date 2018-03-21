import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsIndex from './posts_index'
import PostsNew from './posts_new'
import PostsShow from './posts_show'
import PostsEdit from './posts_edit'
import Register from './register'
import Login from './login'
import Logout from './logout'

export default class Main extends Component {
  render () {
    return (
      <div className="container">
        <div className="col-md-8 offset-md-2">

          <Switch>
            <Route exact path="/" component={PostsIndex}/>
            <Route path="/posts/new" component={PostsNew}/>
            <Route path="/posts/:id/edit" component={PostsEdit}/>
            <Route path="/posts/:id" component={PostsShow}/>
            <Route path="/register" component={Register} />
            <Route path="/login" component={Login} />
            <Route path="/logout" component={Logout} />
          </Switch>

        </div>
      </div>
    )
  }
}
