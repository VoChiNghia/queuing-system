import {PayloadAction, createSlice} from '@reduxjs/toolkit'
import { signInWithEmailAndPassword } from "firebase/auth";

import { ACCESS_TOKEN, saveStore } from '../util/config';
import { history } from '../App';
import { auth } from '../configFirebase';


type UserLoginState = {
 
}

const initialState:UserLoginState = {

}


const authReducer = createSlice({
    name: 'authReducer',
    initialState,
    reducers:{
      
    }
})

export const {} = authReducer.actions
export default authReducer.reducer

export const signIn = (values:any) => {
    return async () => {
      try {
        const res = await signInWithEmailAndPassword(auth, values.email, values.password)
  
        if(res){
            saveStore('email',res.user.email)
            history.push('/')
        }
      } catch (error) {
        alert('fail')
      }
    }
}