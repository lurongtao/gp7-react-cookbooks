import { GET_CATEGORY_DATA, GET_LIST_DATA} from './actionTypes'

const defaultState = {
  categories: null,
  material: null,
  list: []
}

export default (state=defaultState, action) => {
  if (action.type === GET_CATEGORY_DATA) {
    return {
      ...state,
      categories: {...state.categories, ...action.categories.category},
      material: {...state.material, ...action.categories.material}
    }
  }

  if (action.type === GET_LIST_DATA) {
    return {
      ...state,
      list: [...state.list, ...action.list]
    }
  }

  return state
}