import React, { Component } from 'react'
import { connect } from 'react-redux'

import CookBookUi from './CookBookUi'

import { loadDataAsync } from '../actionCreator'

const mapState = (state) => {
  return {
    categories: state.cookbook.categories
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadCategories () {
      dispatch(loadDataAsync(dispatch))
    }
  }
}

class CookBookContainer extends Component {
  render () {
    return (
      <CookBookUi {...this.props} ></CookBookUi>
    )
  }

  componentDidMount () {
    this.props.loadCategories()
  }
}

export default connect(mapState, mapDispatch)(CookBookContainer)