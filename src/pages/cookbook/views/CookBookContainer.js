import React, { Component } from 'react'
import { connect } from 'react-redux'

import CookBookUi from './CookBookUi'

import { loadCategoriesDataAsync, loadListDataAsync } from '../actionCreator'

const mapState = (state) => {
  return {
    categories: state.cookbook.categories,
    list: state.cookbook.list
  }
}

const mapDispatch = (dispatch) => {
  return {
    loadCategories () {
      dispatch(loadCategoriesDataAsync(dispatch))
    },

    loadList () {
      dispatch(loadListDataAsync(dispatch))
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
    this.props.loadList()
  }
}

export default connect(mapState, mapDispatch)(CookBookContainer)