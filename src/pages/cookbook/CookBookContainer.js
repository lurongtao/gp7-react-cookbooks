import React, { Component } from 'react'

import {
  HomeContainer,
  Header,
  SwiperContainer
} from './styledComponents'

import Search from 'components/common/search/Search'

import swiperImg from 'images/swiper-1.png'

class CookBookContainer extends Component {
  render () {
    return (
      <HomeContainer>
        <Header>菜谱大全</Header>
        <SwiperContainer>
          <img src={swiperImg} alt=""/>
        </SwiperContainer>
        <Search border={true}></Search>
      </HomeContainer>
    )
  }
}

export default CookBookContainer