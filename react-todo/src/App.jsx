import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';

function App() {
  const [arr, setArr] = useState([{value:"no task",id:uuidv4()}]); //modified
  const [val, setVal] = useState("");

  function addTaskHandler() {
    if (val.trim() === "") return; 
    setArr(prevArr => [...prevArr, {value:val,id:uuidv4()}]);//modified
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
        {arr.map((todos) => (
          <li key={todos.id}>{todos.value}</li>//modified
        ))}
      </ul>
    </div>
  );
}

export default App;
