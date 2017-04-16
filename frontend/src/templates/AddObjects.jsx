import React, { Component } from 'react'
import axios from 'axios'

const URL = 'http://localhost:3003/api/categories'

export default class AddObjects extends Component {
  constructor(props) {
    super(props)
    this.state = { listCategory: [] }

    this.refresh()
  }

  refresh() {
    axios.get(`${URL}?sort=-createdAt`)
      .then(resp => {
        this.setState({...this.state, listCategory: resp.data})
        console.log(resp.data)
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
                  <div className="col-sm-6">
                      <div className="form-group">
                          <input type="text" className="form-control" placeholder="Nome *" id="objectName" name="objectName" required />
                      </div>
                  </div>
                  <div className="col-sm-6">
                      <div className="form-group">
                        <select className="selectpicker form-control"  id="objectCategory" name="objectCategory" required >
                          <option>Selecione</option>
                          <option>Categoria 1</option>
                          <option>Categoria 2</option>
                          <option>Categoria 3</option>
                        </select>
                      </div>
                  </div>
                  <div className="col-sm-12">
                      <div className="form-group">
                          <input type="text" className="form-control" placeholder="URL da Imagem" id="objectImage" name="objectImage" />
                      </div>
                  </div>
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
