import React, { Component } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3003/api/categories'

import Select from './forms/select'
import Input from './forms/input'

export default class AddObjects extends Component {
  constructor(props) {
    super(props)
    this.state = { listCategory: [] }

    this.getCategories()
  }

  getCategories() {
    axios.get(`${URL}`)
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
                  <Input col="col-sm-6" inputName="objectName" placeholder="Nome" />
                  <Select list={this.state.listCategory} selectName="objectCategory" />
                  <Input col="col-sm-12" inputName="objectImage" placeholder="URL da Imagem" />
                  <div className="col-sm-12">
                      <div className="form-group">
                          <textarea className="form-control" rows="6" placeholder="Descrição..." name="objectDescription"></textarea>
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
