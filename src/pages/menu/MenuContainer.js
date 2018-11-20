import React, { Component } from 'react'

import Search from 'components/common/search/Search'
import MenuCategory from './MenuCategory'
import MenuMaterial from './MenuMaterial'

import { 
  Route,
  withRouter
} from 'react-router-dom'

import {
  MenuWrapper,
  MenuHeader,
  MenuNav,
  MenuNavItem,
  MenuNavSlider
} from './styledComponent.js'

class MenuContainer extends Component {
  constructor (props) {
    super(props)

    this.state = {
      dir: 'left',
      activeDir: 'left'
    }
  }
  render () {
    return (
      <MenuWrapper>
        <MenuHeader>
          <MenuNav>
            <MenuNavItem 
              onClick={() => this.handleNavClick('left')}
              active={this.state.activeDir === 'left'}
            >
              分类
            </MenuNavItem>
            <MenuNavItem 
              onClick={() => this.handleNavClick('right')}
              pos="right"
              active={this.state.activeDir === 'right'}
            >
              食材
            </MenuNavItem>
            <MenuNavSlider dir={this.state.dir}></MenuNavSlider>
          </MenuNav>
        </MenuHeader>
        <Search bgcolor='#efefef'></Search>
        <div>
          <Route path='/' exact children={props => <MenuCategory {...props} />}/>
          <Route path='/category' children={props => <MenuCategory {...props} />}/>
          <Route path='/material' children={props => <MenuMaterial {...props} />}/>
        </div>
      </MenuWrapper>
    )
  }

  handleNavClick (dir) {
    this.setState({
      dir
    })

    setTimeout(() => {
      this.setState({
        activeDir: dir
      })
    }, 300)

    this.props.history.push(
      dir === 'left' ? 'category' : 'material',
      { dir }
    )
  }
}

export default withRouter(MenuContainer)