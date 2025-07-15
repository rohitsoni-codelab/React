import React from 'react'
import "./UserCard.css"
import Darshan from "../assets/DARSHAN.JPEG"
const UserCard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name' >{props.name}</p>
        <img id='user-image' src={Darshan} alt="img" />
        <p id='user-desc' >{props.desc}</p>
      
    </div>
  )
}

export default UserCard
