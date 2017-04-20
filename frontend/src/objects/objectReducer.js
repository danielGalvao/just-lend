const INITIAL_STATE = { name: '', type: '', imageURL: '', description: '', category: ''}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NAME_CHANGED':
      return { ...state, name: action.payload }
    case 'IMAGE_CHANGED':
      return { ...state, imageURL: action.payload }
    case 'DESCRIPTION_CHANGED':
      return { ...state, description: action.payload }
    case 'CATEGORY_CHANGED':
      return { ...state, category: action.payload }
    default:
      return state;
  }
}
