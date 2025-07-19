import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  function decrementHandler() {
    setCount(count - 1);
  }
  function incrementHandler() {
    setCount(count + 1);
  }
  function resetHandler(){
    setCount(0)
  }
  return (
    <div className='container'>
      <div className='top'>
        <p>Increament & Decremen</p>
      </div>

      <div className='middle'>

        <button className='decrement' onClick={decrementHandler}>-</button>


        <div className='count'>
          <p>Count {count}</p>
        </div>


        <button className='increment' onClick={incrementHandler}>+</button>

      </div>

      <div className='bottom'>
        <button onClick={resetHandler}>Reset</button>
      </div>




    </div>
  )
}

export default App
