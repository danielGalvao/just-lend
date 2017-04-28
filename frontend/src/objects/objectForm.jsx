import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'
import Input from '../templates/forms/input'

class ObjectForm extends Component {

  render () {
    const { handleSubmit } = this.props
    return (
      <div className="row">
        <form role='form' onSubmit={handleSubmit}>
          <Field name='name' component={Input} type='text' cols="col-sm-6" placeholder="Nome" />
          <Field name='imageURL' component={Input} type='text' cols="col-sm-6" placeholder="URL da imagem" />
          <Field name='description' component={Input} type='textarea' cols="col-sm-12" placeholder="Descrição" />
          <div className="text-center mt20 col-sm-12">
            <button type="submit" className="btn btn-robot col-sm-12">Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({form: 'objectForm'})(ObjectForm)
