import { GET_CATEGORY_DATA } from './actionTypes'

const defaultState = {
  categories: null
}

export default (state=defaultState, action) => {
  if (action.type === GET_CATEGORY_DATA) {
    return {
      categories: {...state.categories, ...action.categories}
    }
  }

  return state
}