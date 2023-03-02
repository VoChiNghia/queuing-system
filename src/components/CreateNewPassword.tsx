import React from 'react'
import { Formik,Form,Field } from 'formik'
import ButtonSolid from './ButtonSolid'
import * as yup from 'yup'
import {EyeInvisibleOutlined} from '@ant-design/icons'

const logo = require('../assets/img/Grouplogo.png')
type Props = {}

const CreateNewPassword = (props: Props) => {
  return (
    <Formik
    initialValues={
        {
          
            password:'',
            confirmPassword:''
        }
    }
    validationSchema={
        yup.object().shape({
          
            password: yup.string().required().min(3,'must be at least 3 charator'),
            confirmPassword:yup.string()
            .oneOf([yup.ref('password')], 'Passwords must match'),
            
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
              <h2>Đặt lại mật khẩu mới</h2>
            <div className="form-control">
                <label htmlFor="password">Mật khẩu</label>
                <div>
                <Field name="password" id="password" type='password' className={errors.password ? 'error' : ''}/>
                <EyeInvisibleOutlined className="eye-icon" />
                </div>
            </div>
            <div className="form-control">
                <label htmlFor="confirmPassword">nhập lại mật khẩu mới</label>
               <div>
               <Field name="confirmPassword" id="confirmPassword" type='password' className={errors.confirmPassword ? 'error' : ''}/>
               <EyeInvisibleOutlined className="eye-icon" />
               </div>
            </div>
            {errors.password || errors.confirmPassword ? <p>Mật khẩu không khớp</p> :   <p></p>}
          
            </div>
            <div className="btn-submit">
                <button type='submit' >
            <ButtonSolid text='Xác nhận'/>
           
            
            </button>
            </div>

         </Form>
       )}
    </Formik>
  )
}

export default CreateNewPassword