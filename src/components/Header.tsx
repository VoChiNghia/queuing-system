import { BellOutlined } from '@ant-design/icons'
import React from 'react'

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
            <div className="header__right-noti">
            <BellOutlined className='bell-icon'/>
            </div>
            <div className="header__right-info">
                <img src={img} alt="" />
                <div className='name'>
                    <p>Xin chào</p>
                    <h2>Võ Chí nghĩa</h2>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header