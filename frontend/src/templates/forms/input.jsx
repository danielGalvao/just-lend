import React, { Component } from 'react'

export default class Select extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={this.props.col}>
          <div className="form-group">
              <input type="text" className="form-control" placeholder={this.props.placeholder} id={this.props.inputName} name={this.props.inputName} />
          </div>
      </div>
    )
  }
}
