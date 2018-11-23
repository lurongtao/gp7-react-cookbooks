import { CHANGE_FROM } from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  from: 'category'
})

export default (state=defaultState, action) => {
  if (action.type === CHANGE_FROM) {
    return state.set('from', action.from)
  }

  return state
}