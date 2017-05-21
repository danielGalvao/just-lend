import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset } from 'redux-form'

const URL = 'http://localhost:3003/api'

export function create(values) {
  const params = {
    'method': 'post',
    'msg': 'Objeto cadastrado com sucesso!'
  }
  return submit(values, params)
}

export function update(values) {
  const params = {
    'method': 'put',
    'msg': 'Objeto atualizado com sucesso!'
  }
  return submit(values, params)
}

function submit(values, params) {
  const id = values._id ? values._id : ''

  return dispatch => {
    axios[params.method](`${URL}/objetos/${id}`, values)
    .then(resp => {
        toastr.success('Sucesso', params.msg)
        dispatch(reset('objectForm'))
    })
    .catch(err => {
      if(err.response) {
        err.response.data.errors.map(
          e => toastr.error('Erro', e)
        )
      }
    })
  }
}
