import './App.css';
import ReactDOM from 'react-dom'; 
import { useState } from "react";

function App() {
  const [list, setList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const newi = (e) => {
    setNewTask(e.target.value);
  }

  const deleteTask = (i) => {
    const deList = [...list];
    deList.splice(i, 1);
    setList(deList);
  }

  const addTask = () => {
    setList([...list, newTask]);
    setNewTask(""); 
  }

  return (
    <div className="App">
      <div className="src">
      </div>
      <h1 className="heading">To Do App</h1>
      <div className="inputs">
        <input type="text" onChange={(e) => newi(e)} value={newTask} />
        <button className="btn" onClick={addTask}>Add Task</button>
      </div>
      <div className="container">
        {
          list.map((val, index) => (
            <div className="list" key={index}>
              <input type="text" value={val} readOnly />
              <span  onClick={() => deleteTask(index)}><button style={{ cursor: "pointer",  width:"100px", padding:"10px", backgroundColor:"red"} }>Remove</button></span>
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default App;
