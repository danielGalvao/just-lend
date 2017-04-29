import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import ObjectForm from '../objects/objectForm'
import { create } from '../objects/objectActions'

const URLCat = 'http://localhost:3003/api/categories'

class AddObjects extends Component {
  constructor(props) {
    super(props)
    this.state = { listCategory: [] }

    this.getCategories()
  }

  getCategories() {
    axios.get(`${URLCat}`)
      .then(resp => {
        this.setState({...this.state, listCategory: resp.data})
      })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1>Cadastre</h1>
          </div>
        </div>
        <section>
          <div className="row">
            <div className="boxed">
              <div className="col-sm-8">
                <ObjectForm listCategory={this.state.listCategory} onSubmit={this.props.create} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  create
}, dispatch)

export default connect(mapDispatchToProps)(AddObjects)
