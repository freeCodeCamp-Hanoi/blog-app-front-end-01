import React, { Component } from 'react'
import Main from './main'
import Header from './layouts/header'
import Footer from './layouts/footer'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    )
  }
}