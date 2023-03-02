import React from 'react'
import Header from '../../components/Header'
import SideBar from '../../components/SideBar'
import Profile from '../../components/Profile'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className="home">
        <div className="home__left">
           <SideBar/>
        </div>
        <div className='home__right'>
           <div>
                <Header/>
           </div>
           <div>
            <Profile/>
           </div>
        </div>
    </div>
  )
}

export default Home