import styled from 'styled-components'

const BetterWrapper = styled.div `
  background: #fff;
  h1 {
    height: .48rem;
    color: #666;
    font-size: .14rem;
    padding-left: .18rem;
    line-height: .48rem;
    font-weight: 100;
  }
`

const Grid = styled.ul `
  display: flex;
  flex-wrap: wrap;
  li {
    width: 50%;
  }
`

export {
  BetterWrapper,
  Grid
}