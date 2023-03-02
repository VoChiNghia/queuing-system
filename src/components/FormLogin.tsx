import React from 'react'
import { Formik,Form,Field } from 'formik'
import ButtonSolid from './ButtonSolid'
import * as yup from 'yup'
import { Link } from 'react-router-dom'
import {EyeInvisibleOutlined} from '@ant-design/icons'
const logo = require('../assets/img/Grouplogo.png')
type Props = {}

const FormLogin = (props: Props) => {
  return (
    <Formik
    initialValues={
        {
            username: '',
            password:''
        }
    }
    validationSchema={
        yup.object().shape({
            username:yup.string().required().min(3,'must be at least 3 charator'),
            password: yup.string().required().min(3,'must be at least 3 charator'),
            
          })
    }
    onSubmit={(values)=> {
            console.log(values);
    }}
    >
       {({values,errors,touched }) => (
         <Form className='form-wrapper'>
             <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className="form-group">
            <div className="form-control">
                <label htmlFor="username">Tên đăng nhập</label>
                <div>
                <Field name="username" id="username" type='text' className={errors.username ? 'error' : ''}/>
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="password">Mật khẩu</label>
                <div>
                <Field name="password" id="password" type='password' className={errors.username ? 'error' : ''}/>
             <EyeInvisibleOutlined className="eye-icon" />
                </div>
                
            </div>
            {errors.username || errors.password ? <p>Sai tên tài khoản hoặc mật khẩu</p> :   <Link to='/reset-password'><p>Quên mật khẩu?</p></Link>}
          
            </div>
            <div className="btn-submit">
                <button type='submit' >
            <ButtonSolid text='Đăng nhập'/>
            {errors.username || errors.password ? <Link to='/reset-password'><p>Quên mật khẩu?</p></Link> :  <p></p> }
            
            </button>
            </div>

         </Form>
       )}
    </Formik>
  )
}

export default FormLogin