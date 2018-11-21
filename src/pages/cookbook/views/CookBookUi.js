import React from 'react'

import Search from 'components/common/search/Search'

import HotMenuContainer from './hotmenu/HotMenuContainer'
import BetterContainer from './better/BetterContainer'

import Swiper from './swiper/SwiperContainer'

import {
  HomeContainer,
  Header,
  SwiperContainer
} from './styledComponents'

export default (props) => {
  return (
    <HomeContainer>
      <Header>菜谱大全</Header>
      <SwiperContainer>
        <Swiper></Swiper>
      </SwiperContainer>
      <Search border={true}></Search>
      <HotMenuContainer { ...props }></HotMenuContainer>
      <BetterContainer></BetterContainer>
    </HomeContainer>
  )
}