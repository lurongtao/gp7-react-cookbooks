import React, { Component } from 'react'

import { 
  MenuList,
  MenuListNav,
  MenuListNavItem,
  MenuListContent
} from './styledComponent.js'

import wrapperAnimate from 'components/highorder/wrapperAnimate'

class MenuMaterial extends Component {
  render () {
    return (
      <MenuList>
        <MenuListNav>
          <MenuListNavItem active={true}>
            <span>
              奶类
            </span>
          </MenuListNavItem>
          <MenuListNavItem>
            <span>
              肉类
            </span>
          </MenuListNavItem>
          <MenuListNavItem>
            <span>
              豆类
            </span>
          </MenuListNavItem>
          <MenuListNavItem>
            <span>
              蔬菜
            </span>
          </MenuListNavItem>
          <MenuListNavItem>
            <span>
              粗粮
            </span>
          </MenuListNavItem>
        </MenuListNav>
        <MenuListContent>
          牛奶 酸奶
        </MenuListContent>
      </MenuList>
    )
  }
}

export default wrapperAnimate(MenuMaterial)