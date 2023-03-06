import { BellOutlined } from '@ant-design/icons'
import React from 'react'
import HeaderProfile from './HeaderProfile'

const img = require('../assets/img/bg2.jpg')
type Props = {}

const Header = (props: Props) => {
  return (
    <div className='header'>
        <div className="header__left">
            <div className="header__left-breadcrumb">
                <p>thông tin cá nhân</p>
            </div>
        </div>
        <div className="header__right">
           <HeaderProfile/>
        </div>
    </div>
  )
}

export default Header