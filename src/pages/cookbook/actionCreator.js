import { GET_CATEGORY_DATA } from './actionTypes'

export const loadDataSync = (categories) => {
  return {
    type: GET_CATEGORY_DATA,
    categories
  }
}

export const loadDataAsync = (dispatch) => {
  return () => {
    fetch('/mock/cookbook-category.json')
      .then(response => response.json())
      .then(result => {
        dispatch(loadDataSync(result.data.category))
      })
  }
}