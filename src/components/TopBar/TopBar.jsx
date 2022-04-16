import React from 'react'
import { NotificationsNone, Language, Settings } from '@mui/icons-material';
import './index.css'

const TopBar = () => {
  return (
    <div className='topBar'>
      <div className="topBarWrapper">
        <div className="topLeft">
          <span className="logo">
            Dashboard
          </span>
        </div>
        <div className="topRight">
          <div className="topBarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topBarIconContainer">
            <Settings />
            <span className="topIconBadge">2</span>
          </div>
          <img src="https://api.multiavatar.com/Starcrasher.png
" alt="user" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}

export default TopBar