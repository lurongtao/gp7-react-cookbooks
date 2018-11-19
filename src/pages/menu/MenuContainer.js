import React, { Component } from 'react'

import Search from 'components/common/search/Search'
import MenuCategory from './MenuCategory'
import MenuMaterial from './MenuMaterial'
import {
  TransitionGroup, 
  CSSTransition
} from "react-transition-group";

import { 
  Route,
  withRouter,
  Switch,
  Redirect
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

        <TransitionGroup>
            <CSSTransition
              key={this.props.location.key}
              classNames={{
                enter: 'animated',
                enterActive: 'fadeInRight',
                exit: 'animated',
                exitActive: 'fadeOutLeft'
              }}
              timeout={1000}
            >
              <Switch>
                <Redirect exact from="/" to="/category"></Redirect>
                <Route path='/category' component={MenuCategory}/>
                <Route path='/material' component={MenuMaterial}/>
              </Switch>
          </CSSTransition>
        </TransitionGroup>
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
      dir === 'left' ? 'category' : 'material'
    )
  }
}

export default withRouter(MenuContainer)