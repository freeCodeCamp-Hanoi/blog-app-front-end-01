import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'

import reducers from '../reducers'
import Main from './main'
import Header from './layouts/header'
import Footer from './layouts/footer'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore)

export default class App extends Component {
  render () {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
        <BrowserRouter>
          <div className="App">
            <Header/>
            <Main />
            <Footer/>
          </div>
        </BrowserRouter>
      </Provider>
    )
  }
}