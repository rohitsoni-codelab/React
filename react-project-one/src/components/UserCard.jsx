import React from 'react'
import "./UserCard.css"
const UserCard = () => {
  return (
    <div className='user-container'>
        <p id='user-name' >Rohit Soni</p>
        <img id='user-image' src="https://th.bing.com/th/id/OIP.Olg0uDthcJPDuYwOTcXMCwHaEI?w=315&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" alt="img" />
        <p id='user-desc' >Description of Rohit Soni</p>
      
    </div>
  )
}

export default UserCard
