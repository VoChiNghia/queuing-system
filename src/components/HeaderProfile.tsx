import { BellOutlined } from '@ant-design/icons'
import React from 'react'
const img = require('../assets/img/bg2.jpg')
type Props = {}

const HeaderProfile = (props: Props) => {
  return (
    <div className="header__profile">
    <div className="header__profile-noti">
    <BellOutlined className='bell-icon'/>
    </div>
    <div className="header__profile-info">
        <img src={img} alt="" />
        <div className='name'>
            <p>Xin chào</p>
            <h2>Võ Chí nghĩa</h2>
        </div>
    </div>
</div>
  )
}

export default HeaderProfile