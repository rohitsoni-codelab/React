import './App.css'

function App() {

  return (
    <div className='container'>
      <div className='top'>
        <p>Increament & Decremen</p>
      </div>

      <div className='middle'>

        <button className='decrement'>-</button>


        <div className='count'>
          <p>Count 0</p>
        </div>


        <button className='increment'>+</button>

      </div>

      <div className='bottom'>
        <button>Reset</button>
      </div>




    </div>
  )
}

export default App
