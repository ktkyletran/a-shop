import React from 'react'
import {LineStyle, Timeline, TrendingUp, PersonOutline, Storefront, AttachMoney, BarChart, MailOutline, DynamicFeed, ChatBubbleOutline, WorkOutline, Report } from '@mui/icons-material';
import './index.css';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className='sideBar'>
      <div className="sideBarWrapper">
        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Dashboard</h3>
          <ul className="sideBarList">
          <Link to='/' className='link'>
            <li className="sideBarListItem">
              <LineStyle className='sideBarIcon' />
              Home
            </li>
          </Link>
          <Link to='/analytics' className='link'>
            <li className="sideBarListItem">
              <Timeline className='sideBarIcon' />
              Analytics
            </li>
          </Link>
          <Link to='/sales' className='link'>
            <li className="sideBarListItem">
              <TrendingUp className='sideBarIcon' />
              Sales
            </li>
          </Link>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Quick Links</h3>
          <ul className="sideBarList">
            <Link to="/users" className='link'>
              <li className="sideBarListItem">
                <PersonOutline className='sideBarIcon' />
                Users
              </li>
            </Link>
            <Link to="/products" className='link'>
              <li className="sideBarListItem">
                <Storefront className='sideBarIcon' />
                Products
              </li>
            </Link>
            <Link to='/transactions' className='link'>
              <li className="sideBarListItem">
                <AttachMoney className='sideBarIcon' />
                Transactions
              </li>
            </Link>
            <Link to='/reports' className='link'>
              <li className="sideBarListItem">
                <BarChart className='sideBarIcon' />
                Reports
              </li>
            </Link>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Notifications</h3>
          <ul className="sideBarList">
            <Link to='/mail' className='link'>
              <li className="sideBarListItem">
                <MailOutline className='sideBarIcon' />
                Mail
              </li>
            </Link>
            <Link to='/feedback' className='link'>              
              <li className="sideBarListItem">
                <DynamicFeed className='sideBarIcon' />
                Feedback
              </li>
            </Link>
            <Link to='/messages' className='link'>              
              <li className="sideBarListItem">
                <ChatBubbleOutline className='sideBarIcon' />
                Messages
              </li>
            </Link>
          </ul>
        </div>

        <div className="sideBarMenu">
          <h3 className="sideBarTitle">Staff</h3>
          <ul className="sideBarList">
            <Link to='/manage' className='link'>              
              <li className="sideBarListItem">
                <WorkOutline className='sideBarIcon' />
                Manage
              </li>
            </Link>
            <Link to='/analytics' className='link'>              
              <li className="sideBarListItem">
                <Timeline className='sideBarIcon' />
                Analytics
              </li>
            </Link>
            <Link to='/reports' className='link'>              
              <li className="sideBarListItem">
                <Report className='sideBarIcon' />
                Reports
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar