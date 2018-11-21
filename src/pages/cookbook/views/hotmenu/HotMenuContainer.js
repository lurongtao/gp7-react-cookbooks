import React, { Component } from 'react'

import { HotMenuWrap, Title } from './styledComponent.js'

import { Grid } from 'antd-mobile'

class HotMenuContainer extends Component {
  render () {
    let data = this.props.categories && this.props.categories['热门'].slice(0, 11).map((value, index) => {
      return {
        icon: value.img,
        text: value.title
      }
    })
    data && data.push({
      text: '更多...'
    })

    return (
      <HotMenuWrap>
        <Title>热门分类</Title>
        <Grid 
          data={data} 
          hasLine={false}
          onClick={_el => console.log(_el)}
        />
      </HotMenuWrap>
    )
  }
}

export default HotMenuContainer