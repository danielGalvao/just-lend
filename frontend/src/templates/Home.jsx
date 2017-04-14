import React, { Component } from 'react'
import Header from './head'
import ListObjects from '../objects/ListObjects'

export default class Home extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="container">
        <Header />
        <ListObjects />
      </div>
    )
  }
}
