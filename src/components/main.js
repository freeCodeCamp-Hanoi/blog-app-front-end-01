import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import PostsIndex from './posts_index'
import PostsNew from './posts_new'
import PostsShow from './posts_show'
import PostsEdit from './posts_edit'

export default class Main extends Component {
  render () {
    return (
      <div className="container">
        <div className="col-md-8 col-md-offset-2">

          <Switch>
            <Route exact path="/" component={PostsIndex}/>
            <Route path="/posts/new" component={PostsNew}/>
            <Route path="/posts/:id/edit" component={PostsEdit}/>
            <Route path="/posts/:id" component={PostsShow}/>
          </Switch>

        </div>
      </div>
    )
  }
}