import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Input from '../templates/forms/input'
import Select from '../templates/forms/select'
import Textarea from '../templates/forms/textarea'

class ObjectForm extends Component {

  render () {
    const { handleSubmit, listCategory } = this.props
    return (
      <div className="row">
        <form role='form' onSubmit={handleSubmit}>
          <Field name='name' component={Input} type='text' cols="col-sm-6" placeholder="Nome" />
          <Field name='type' component={Select} type='select' cols="col-sm-6" list={listCategory} />
          <Field name='image' component={Input} type='text' cols="col-sm-12" placeholder="URL da imagem" />
          <Field name='descr' component={Textarea} type='textarea' textarea={true} placeholder="Descrição" cols="col-sm-12" />
          <div className="text-center mt20 col-sm-12">
            <button type="submit" className="btn btn-robot col-sm-12">Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({form: 'objectForm'})(ObjectForm)
