import { useState } from 'react';
import './App.css';

function App() {
  const [arr, setArr] = useState([]); 
  const [val, setVal] = useState("");

  function addTaskHandler() {
    if (val.trim() === "") return; 
    setArr(prevArr => [...prevArr, val]);
    setVal("");
  }

  function addInputHandler(event) {
    setVal(event.target.value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="mention your task"
        value={val}
        onChange={addInputHandler}
      />
      <br />
      <button onClick={addTaskHandler}>Add Task</button>

      <ul>
        {arr.map((todos, index) => (
          <li key={index}>{todos}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
