import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const URL = 'http://localhost:3003/api/objetos'

export function create(values) {
  values.type = '58f2d3fafefb22482d10613e'
  axios.post(`${URL}`, values)
    .then(resp => {
      toastr.success('Sucesso', 'Objeto cadastrado com sucesso!')
    })
    .catch(err => {
      err.response.data.errors.map(
        e => toastr.error('Erro', e)
      )
    })
  return {
    type: 'CREATE_OBJECT'
  }
}
