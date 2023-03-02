import React from 'react'
import ResetPassword from '../../components/ResetPassword'

type Props = {}

const bg = require('../../assets/img/bg2.jpg')

const ResetPass = (props: Props) => {
  return (
    <div className="login">
         <div className="login-form">
        
          <ResetPassword/>
        </div>
        <div className="login-bg">
            <div className="img">
                <img src={bg} alt="" />
               
            </div>
        </div>
    </div>
  )
}

export default ResetPass