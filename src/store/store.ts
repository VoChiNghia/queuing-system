import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../redux/authReducer'



const store = configureStore({
   reducer:{
    authReducer
   },
 
})

export type RootState = ReturnType<typeof store.getState>
export type DispatchType = typeof store.dispatch

export default store