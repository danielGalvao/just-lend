import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const URLCat = 'http://localhost:3003/api/categories'

import Select from './forms/select'
import Input from './forms/input'

import { changeName, changeImageURL, changeDescription } from '../objects/objectActions'

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
                <div className="row">
                  <Input
                    col="col-sm-6"
                    inputName="name"
                    placeholder="Nome"
                    valeu={this.props.name}
                    onChange={this.props.changeName}
                  />
                <Select list={this.state.listCategory} selectName="objectCategory" />
                  <Input
                    col="col-sm-12"
                    inputName="imageURL"
                    placeholder="URL da Imagem"
                    value={this.props.imageURL}
                    onChange={this.props.changeImageURL}
                  />
                  <div className="col-sm-12">
                      <div className="form-group">
                          <textarea
                            className="form-control"
                            rows="6"
                            placeholder="Descrição..."
                            name="description"
                            id="description"
                            onChange={this.props.changeDescription}
                            value={this.props.description}
                          />
                      </div>
                  </div>
                  <div className="text-center mt20 col-sm-12">
                      <button type="submit" className="btn btn-robot col-sm-12" id="objectSubmit">Enviar</button>
                  </div>
                </div>
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
  description: state.object.description
})
const mapDispatchToProps = dispatch => bindActionCreators({changeName, changeImageURL, changeDescription}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(AddObjects);
