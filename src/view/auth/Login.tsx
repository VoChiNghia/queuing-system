import React from 'react'
import FormLogin from '../../components/FormLogin'
import ResetPassword from '../../components/ResetPassword'


const loginBg = require('../../assets/img/loginBg.jpg')


type Props = {}

const Login:React.FC = (props: Props) => {
  return (
    <div className="login">
        <div className="login-form">
          <FormLogin/>
          
        </div>
        <div className="login-bg">
            <div className="img">
                <img src={loginBg} alt="" />
                <div className='img-info'>
                    <p>Hệ thống</p>
                    <h1>QUẢN LÝ XẾP HÀNG</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login