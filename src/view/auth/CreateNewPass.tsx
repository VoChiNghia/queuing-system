import React from 'react'
import ResetPassword from '../../components/ResetPassword'
import CreateNewPassword from '../../components/CreateNewPassword'

type Props = {}

const bg = require('../../assets/img/bg2.jpg')

const CreateNewPass = (props: Props) => {
  return (
    <div className="login">
         <div className="login-form">
        
          <CreateNewPassword/>
        </div>
        <div className="login-bg">
            <div className="img">
                <img src={bg} alt="" />
               
            </div>
        </div>
    </div>
  )
}

export default CreateNewPass