import styled from 'styled-components'

const HomeContainer = styled.div `
  height: 100%;
`

const Header = styled.header `
  height: .44rem;
  background: #ee7530;
  text-align: center;
  line-height: .44rem;
  color: #fff;
  font-size: .18rem;
`

const SwiperContainer = styled.div `
  font-size: 0;
  padding-bottom: 66.6666667%;
  position: relative;
  img {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`

export {
  HomeContainer,
  Header,
  SwiperContainer
}