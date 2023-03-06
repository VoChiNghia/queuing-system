import React, { useState } from 'react'
import { Formik,Form,Field } from 'formik'
import ButtonSolid from './ButtonSolid'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import {EyeInvisibleOutlined, EyeOutlined} from '@ant-design/icons'
import { signIn } from '../redux/authReducer'
import { DispatchType } from '../store/store'
import { useDispatch } from 'react-redux'


const logo = require('../assets/img/Grouplogo.png')
type Props = {}

const FormLogin = (props: Props) => {

  const [displayPassword,setDisplayPassword] = useState<boolean>(true)

const dispatch:DispatchType = useDispatch()



  return (
    <Formik
    initialValues={
        {
          email: '',
            password:''
        }
    }
    validationSchema={
        yup.object().shape({
          email:yup.string().required().email(),
            password: yup.string().required().min(3,'must be at least 3 charator'),
            
          })
    }
    onSubmit={(values)=> {
  
      dispatch(signIn(values))
    }}
    >
       {({values,errors,touched }) => (
         <Form className='form-wrapper'>
             <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className="form-group">
            <div className="form-control">
                <label htmlFor="email">Tên đăng nhập</label>
                <div>
                <Field name="email" id="email" type='text' className={errors.email ? 'error' : ''}/>
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="password">Mật khẩu</label>
                <div>
                <Field name="password" id="password" type={displayPassword ? "password" : "text"} className={errors.email ? 'error' : ''}/>
            {
              displayPassword 
              ? <EyeInvisibleOutlined className="eye-icon" onClick={() => setDisplayPassword(!displayPassword)}/>
             : <EyeOutlined className="eye-icon" onClick={() => setDisplayPassword(!displayPassword)}/>
            }
                </div>
                
            </div>
            {errors.email || errors.password ? <p>Sai tên tài khoản hoặc mật khẩu</p> :   <Link to='/reset-password'><p>Quên mật khẩu?</p></Link>}
          
            </div>
            <div className="btn-submit">
                <button type='submit' >
            <ButtonSolid text='Đăng nhập'/>
            {errors.email || errors.password ? <Link to='/reset-password'><p>Quên mật khẩu?</p></Link> :  <p></p> }
            
            </button>
            </div>

         </Form>
       )}
    </Formik>
  )
}

export default FormLogin