import { CHANGE_FROM } from './actionTypes'

const defaultState = {
  from: 'category'
}

export default (state=defaultState, action) => {
  if (action.type === CHANGE_FROM) {
    return {
      from: action.from
    }
  }

  return state
}