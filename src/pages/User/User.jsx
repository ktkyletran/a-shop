import React from 'react'
import { Link } from 'react-router-dom'
import { Cake, FileUpload, LocationOn, Mail, PermIdentity, Phone } from '@mui/icons-material'
import './index.css'

const User = () => {
  return (
    <div className='user'>
      <div className="userTitleContainer">
          <h1 className="userTitle">Edit User</h1>
        <Link to='/add/user'>
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://picsum.photos/id/856/200" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Bobby T.</span>
              <span className="userShowUserTitle">Software Developer</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">                
              <PermIdentity className='userShowIcon' />
              <div className="userShowInfoTitle">bobbyt153</div>
            </div>
            <div className="userShowInfo">                
              <Cake className='userShowIcon' />
              <div className="userShowInfoTitle">Mar 19, 1974</div>
            </div>
            <span className="userShowTitle">Contact Details</span>
            <div className="userShowInfo">                
              <Phone className='userShowIcon' />
              <div className="userShowInfoTitle">281-555-5555</div>
            </div>
            <div className="userShowInfo">                
              <Mail className='userShowIcon' />
              <div className="userShowInfoTitle">bobbyt@gmail.com</div>
            </div>
            <div className="userShowInfo">                
              <LocationOn className='userShowIcon' />
              <div className="userShowInfoTitle">Houston, TX</div>
            </div>
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input type="text" placeholder='bobbyt153' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input type="text" placeholder='Bobby Telly' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Phone</label>
                <input type="text" placeholder='281-555-5555
' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input type="text" placeholder='bobbyt@gmail.com
' className='userUpdateInput' />
              </div>
              <div className="userUpdateItem">
                <label>Address</label>
                <input type="text" placeholder='bobbyt153' className='userUpdateInput' />
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img src="https://picsum.photos/id/856/200" alt="" className='userUpdateImg' />
                <label htmlFor='file'><FileUpload className='userUpdateIcon' /></label>
                <input type="file" name="" id="file" style={{display: 'none'}} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User