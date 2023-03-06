import React, { useEffect } from 'react'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Profile from '../../components/Profile'
import { getStore } from '../../util/config'
import { useNavigate } from "react-router-dom";
import { auth } from '../../configFirebase'
import LineChart from '../../components/LineChart'
import DashBoard from '../dashboard/Dashboard'
type Props = {}

const Home = (props: Props) => {
  const navigate = useNavigate()
  const user:unknown = getStore('email')
  console.log(auth.currentUser)
  useEffect(() =>{
    if(!user){
        navigate('/login')
    }
  })

  return (
    <div className="home">
        <div className="home__left">
           <SideBar/>
        </div>
        <div className='home__right'>
           <div>
                {/* <Header/> */}
           </div>
           <div>
            {/* <Profile/> */}
            {/* <LineChart/> */}
           <DashBoard/>
           </div>
        </div>
    </div>
  )
}

export default Home