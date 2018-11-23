import React, { Component } from 'react'
import { connect } from 'react-redux'

import { BetterWrapper, Grid, Title } from './styledComponent.js'
import { fromJS } from 'immutable' 

const betterListGetter = (data) => {
  let betterList = data ? data.slice(0, 20) : []
  return betterList.map((value) => {
    return fromJS({
      icon: value.get('img'),
      id: value.get('id'),
      name: value.get('name'),
      img: value.get('img'),
      all_click: `${value.get('all_click')}浏览`,
      favorites: `${value.get('favorites')}收藏`,
    })
  })
}

const mapState = (state) => {
  return {
    betterList: betterListGetter(state.getIn(['cookbook', 'list']))
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
                <li key={value.get('id')}>
                  <div>
                    <img src={value.get('img')} alt={value.get('name')}/>
                  </div>
                  <div>
                    <h3>{value.get('name')}</h3>
                    <p>
                      <span>{value.get('all_click')}</span>
                      <span>{value.get('favorites')}</span>
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