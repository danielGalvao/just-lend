import axios from 'axios'
import { toastr } from 'react-redux-toastr'

const URL = 'http://localhost:3003/api/objetos'

export const changeName = event => ({
  type: 'NAME_CHANGED',
  payload: event.target.value
})

export const changeImageURL = event => ({
  type: 'IMAGE_CHANGED',
  payload: event.target.value
})

export const changeDescription = event => ({
  type: 'DESCRIPTION_CHANGED',
  payload: event.target.value
})

export const changeCategory = event => ({
  type: 'CATEGORY_CHANGED',
  payload: event.target.value
})

export function create(values) {
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
