import React from 'react'

import Search from 'components/common/search/Search'

import swiperImg from 'images/swiper-1.png'

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
        <img src={swiperImg} alt=""/>
      </SwiperContainer>
      <Search border={true}></Search>
      <ul>
        {
          props.categories && Object.keys(props.categories).map((key) => {
            return <li key={key}>{key}</li>
          })
        }
      </ul>
    </HomeContainer>
  )
}