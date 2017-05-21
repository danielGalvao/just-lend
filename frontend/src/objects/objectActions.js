import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const URL = 'http://localhost:3003/api'

export function create(values) {
  const params = {
    'method': 'post',
    'msg': 'Objeto cadastrado com sucesso!'
  }
  submit(values, params)
  return {
    type: 'CREATE_OBJECT'
  }
}

export function update(values) {
  const params = {
    'method': 'put',
    'msg': 'Objeto atualizado com sucesso!'
  }
  submit(values, params)
  return {
    type: 'UPDATE_OBJECT'
  }
}

function submit(values, params) {

  const id = values._id ? values._id : ''
  axios[params.method](`${URL}/objetos/${id}`, values)
    .then(resp => {
      toastr.success('Sucesso', params.msg)
    })
    .catch(err => {
      err.response.data.errors.map(
        e => toastr.error('Erro', e)
      )
    })
}
