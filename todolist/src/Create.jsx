import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import your CSS file

function Create() {
  const [task, setTask] = useState();

  const handleAdd = () => {
    axios.post('http://localhost:3001/add', { task: task })
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="create-container">
      <input
        className="input-task"
        type="text"
        placeholder="Enter task"
        onChange={(e) => setTask(e.target.value)}
      />
      <button className="add-button" type="button" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}

export default Create;
