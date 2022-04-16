import React from 'react'
import {LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@mui/icons-material';
import './index.css';

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <LineStyle className='sideBarIcon' />
              Home
            </li>
            <li className="sideBarListItem">
              <Timeline className='sideBarIcon' />
              Analytics
            </li>
            <li className="sideBarListItem">
              <TrendingUp className='sideBarIcon' />
              Sales
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Links</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <PersonOutline className='sideBarIcon' />
              Users
            </li>
            <li className="sideBarListItem">
              <Storefront className='sideBarIcon' />
              Products
            </li>
            <li className="sideBarListItem">
              <AttachMoney className='sideBarIcon' />
              Transactions
            </li>
            <li className="sideBarListItem">
              <BarChart className='sideBarIcon' />
              Reports
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <MailOutline className='sideBarIcon' />
              Mail
            </li>
            <li className="sideBarListItem">
              <DynamicFeed className='sideBarIcon' />
              Feedback
            </li>
            <li className="sideBarListItem">
              <ChatBubbleOutline className='sideBarIcon' />
              Messages
            </li>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <li className="sideBarListItem">
              <WorkOutline className='sideBarIcon' />
              Manage
            </li>
            <li className="sideBarListItem">
              <Timeline className='sideBarIcon' />
              Analytics
            </li>
            <li className="sideBarListItem">
              <Report className='sideBarIcon' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar