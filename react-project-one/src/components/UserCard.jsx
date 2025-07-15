import React from 'react'
import "./UserCard.css"
import Darshan from "../assets/DARSHAN.JPEG"
const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name' >Rohit Soni</p>
        <img id='user-image' src={Darshan} alt="img" />
        <p id='user-desc' >Description of Rohit Soni</p>
      
    </div>
  )
}

export default UserCard
