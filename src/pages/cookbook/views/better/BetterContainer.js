import React, { Component } from 'react'
import { connect } from 'react-redux'

import { BetterWrapper, Grid, Title } from './styledComponent.js'

const betterListGetter = (data) => {
  let betterList = data ? data.slice(0, 20) : []
  return betterList.map((value) => {
    return {
      icon: value.img,
      id: value.id,
      name: value.name,
      all_click: `${value.all_click}浏览`,
      favorites: `${value.favorites}收藏`,
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
        <Title>精品好菜</Title>
        <Grid>
          {
            this.props.betterList.map((value) => {
              return (
                <li key={value.id}>
                  <div>
                    <img src={value.icon} alt={value.name}/>
                  </div>
                  <div>
                    <h3>{value.name}</h3>
                    <p>
                      <span>{value.all_click}</span>
                      <span>{value.favorites}</span>
                    </p>
                  </div>
                </li>
              )
            })
          }
        </Grid>
      </BetterWrapper>
    )
  }
}

export default connect(mapState)(BetterContainer)