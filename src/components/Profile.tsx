import React from 'react'

type Props = {}
const logo = require('../assets/img/bg2.jpg')
const Profile = (props: Props) => {
  return (
    <div className='profile'>
        <div className='profile-img'>
            <img src={logo} alt="" />
            <h1>Võ Chí Nghĩa</h1>
        </div>
        <div className="profile-info">
           <div className="profile-info-left">
           <div>
                <h2>Tên người dung</h2>
                <p>Võ Chí Nghĩa</p>
            </div>
            <div>
                <h2>Số điện thoại</h2>
                <p>0878869016</p>
            </div>
            <div>
                <h2>Email</h2>
                <p>nghiakg11432@gmail.com</p>
            </div>
           </div>
           <div className="profile-info-right">
           <div>
                <h2>Tên đăng nhập</h2>
                <p>Võ Chí Nghĩa</p>
            </div>
            <div>
                <h2>Mật khẩu</h2>
                <p>123456</p>
            </div>
            <div>
                <h2>Vai trò</h2>
                <p>Kế toán</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Profile