import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const URLCat = 'http://localhost:3003/api/categories'

import ObjectForm from '../objects/ObjectForm'

import { changeName, changeImageURL, changeDescription, changeCategory, create } from '../objects/objectActions'

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
                <ObjectForm  onSubmit={this.props.create} />
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  name: state.object.name,
  imageURL: state.object.imageURL,
  description: state.object.description,
  category: state.object.category
})
const mapDispatchToProps = dispatch => bindActionCreators({
  changeName,
  changeImageURL,
  changeDescription,
  changeCategory,
  create
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddObjects)
