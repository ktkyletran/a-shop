import React from 'react'
import './index.css'

const NewUser = () => {
  return (
    <div className='newUser'>
        <h1 className="newUserTitle">New User</h1>
        <form className="newUserForm">
            <div className="newUserInfo">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text" placeholder='example123'/>
                </div>
                <div className="newUserItem">
                    <label>Full Name</label>
                    <input type="text" placeholder='John Smith'/>
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="text" placeholder='john@email.com'/>
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="text" placeholder='password'/>
                </div>
                <div className="newUserItem">
                    <label>Phone number</label>
                    <input type="text" placeholder='123-456-7890'/>
                </div>
                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text" placeholder='Houston, TX'/>
                </div>
                <div className="newUserItem">
                    <label>Gender</label>
                    <div className="genderContainer">
                        <input type="radio" name='male' id='male' value='male' />
                        <label htmlFor="male">Male</label>
                        <input type="radio" name='female' id='female' value='female' />
                        <label htmlFor="female">Female</label>
                        <input type="radio" name='other' id='other' value='other' />
                        <label htmlFor="other">Other</label>
                    </div>
                </div>
                <div className="newUserItem">
                    <label>Active</label>
                    <select name="active" id="active" className='newUserSelect'>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
            </div>
            <button className="newUserButton">Create</button>
        </form>
    </div>
  )
}

export default NewUser