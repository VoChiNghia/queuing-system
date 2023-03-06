import React from 'react'
import {AppstoreOutlined,
    DesktopOutlined,
    MessageOutlined,
    DatabaseOutlined,
    BarChartOutlined,
    ImportOutlined
} from '@ant-design/icons'
import { signOut } from 'firebase/auth'
import { auth } from '../configFirebase'
import { removeStore } from '../util/config'
import { history } from '../App'
import { useNavigate } from 'react-router-dom'
type Props = {}

const logo = require('../assets/img/Grouplogo.png')

const SideBar = (props: Props) => {

  const navigate = useNavigate()
  const handleLogout = () => {
    removeStore('email')
    navigate('/login')
    
  }
  return (
    <div className='sidebar'>
       <div className="sidebar-wrapper">
       <div className="sidebar__logo">
            <img src={logo} alt="" />
        </div>
        <ul className='sidebar__list'>
            <li className='sidebar__list-item active'>
            <AppstoreOutlined className='icon'/>
            <p>Dashboard</p>
            </li>
            <li className='sidebar__list-item'>
            <DesktopOutlined className='icon'/>
            <p>Thiết bị</p>
            </li>
            <li className='sidebar__list-item'>
            <MessageOutlined className='icon'/>
            <p>Dịch vụ</p>
            </li>
            <li className='sidebar__list-item'>
            <DatabaseOutlined className='icon'/>
            <p>Cấp số</p>
            </li>
            <li className='sidebar__list-item'>
            <BarChartOutlined className='icon'/>
            <p>Báo Cáo</p>
            </li>
            <li className='sidebar__list-item'>
            <BarChartOutlined className='icon'/>
            <p>Cài đặt hệ thống</p>
            </li>
        </ul>
       </div>
       <div className='btn-logout'>
            <button onClick={handleLogout}>
                <span><ImportOutlined /></span>
                <p>Đăng xuất</p>
                </button>
       </div>
    </div>
  )
}

export default SideBar