import React, { Component } from 'react'
import { reduxForm, Field } from 'redux-form'

class ObjectForm extends Component {

  render () {
    const { handleSubmit } = this.props
    return (
      <div className="row">
        <form role='form' onSubmit={handleSubmit}>
          <Field name='name' component='input' />
          <Field name='imageURL' component='input' />
          <Field name='description' component='input' />
          <div className="text-center mt20 col-sm-12">
            <button type="submit" className="btn btn-robot col-sm-12">Enviar</button>
          </div>
        </form>
      </div>
    )
  }
}

export default reduxForm({form: 'objectForm'})(ObjectForm)
