import UserCard from './components/UserCard'
import './App.css'

function App() {
  return (

    <div className="container">
      <UserCard name="Rohit Soni" desc=" Fullstack Developer"/>
      <UserCard name="Golu Soni" desc=" Frontend Developer"/>
      <UserCard name="Shubham Soni" desc=" Backend Developer"/>
    </div>

  )
}

export default App
