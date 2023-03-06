import React from 'react'
import { Formik,Form,Field } from 'formik'
import ButtonSolid from './ButtonSolid'
import * as yup from 'yup'
import ButtonOutline from './ButtonOutline'
import { auth } from '../configFirebase'
import { sendPasswordResetEmail } from 'firebase/auth'
import { Link } from 'react-router-dom'

const logo = require('../assets/img/Grouplogo.png')
type Props = {}

const ResetPassword = (props: Props) => {
  return (
    <Formik
    initialValues={
        {
            email: '',
         
        }
    }
    validationSchema={
        yup.object().shape({
          email:yup.string().required(),
           
            
          })
    }
    onSubmit={(values)=> {
      const triggerResetEmail = async () => {
        await sendPasswordResetEmail(auth, values.email);
       alert("Password reset email sent")
      }
      triggerResetEmail()
    }}
    >
       {({values,errors,touched }) => (
         <Form className='form-wrapper'>
             <div className='logo'>
                <img src={logo} alt="" />
            </div>
            <div className="form-group">
            <h2>Đặt lại mật khẩu</h2>
            <div className="form-control">
             
                <label htmlFor="email">Vui lòng nhập email để đặt lại mật khẩu của bạn *</label>
               <div>
               <Field name="email" id="email" type='text' className={errors.email ? 'error' : ''}/>
               </div>
            </div>
            
           
          
            </div>
            <div className="btn-submit">
            <Link to='/login'>
            <ButtonOutline text='Hủy'/>
            </Link>
                <button type='submit' >
            <ButtonSolid text='Tiếp tục'/>
         
            
            </button>
           
            </div>

         </Form>
       )}
    </Formik>
  )
}

export default ResetPassword