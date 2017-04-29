import React, { Component } from 'react'

export default class Select extends Component {
  constructor(props) {
    super(props)
    this.renderOptions = this.renderOptions.bind(this)
  }

  renderOptions() {
    const list = this.props.list || []
    return list.map(cat => (
      <option key={cat._id} value={cat._id}>{cat.name}</option>
    ))
  }

  render() {
    return (
      <div className="col-sm-6">
          <div className="form-group">
            <select {...this.props.input} className="selectpicker form-control">
              <option>Selecione</option>
              {this.renderOptions()}
            </select>
          </div>
      </div>
    )
  }
}
