import React, { Component } from 'react'
import { connect } from 'react-redux'

import { BetterWrapper, Grid } from './styledComponent.js'

const betterListGetter = (data) => {
  let betterList = data ? data.slice(0, 20) : []
  return betterList.map((value) => {
    return {
      icon: value.img,
      id: value.id,
      name: value.name,
      all_click: `浏览量：${value.all_click}`,
      favorites: `收藏量：${value.favorites}`,
    }
  })
}

const mapState = (state) => {
  return {
    betterList: betterListGetter(state.cookbook.list)
  }
}

class BetterContainer extends Component {
  render () {
    return (
      <BetterWrapper>
        <h1>精品好菜</h1>
        <Grid>
          {
            this.props.betterList.map((value) => {
              return <li key={value.id}>{value.name}</li>
            })
          }
        </Grid>
      </BetterWrapper>
    )
  }
}

export default connect(mapState)(BetterContainer)