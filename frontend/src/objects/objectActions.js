import axios from 'axios'

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
