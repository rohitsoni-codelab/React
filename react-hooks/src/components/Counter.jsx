import React, { useState } from 'react'
import './Counter.css'
const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <p className='para'>You clicked {count} times</p>
      <button className='btn' onClick={() => { setCount(count+1)}}>Click me</button>
    </div >
  )
}

export default Counter