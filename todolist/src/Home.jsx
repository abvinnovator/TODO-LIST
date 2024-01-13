import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Create from './Create';
import './App.css'; // Import your CSS file

function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/get')
      .then(result => setTodos(result.data))
      .catch(err => console.log(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete('http://localhost:3001/delete/'+id)
    .then(result =>{
      location.reload()
    })
      .catch(err => console.log(err));
  };
  const handleUpdate = (id) => {
    const newTask = prompt("Enter the updated task:");
    if (newTask !== null) {
      axios.put(`http://localhost:3001/update/${id}`, { task: newTask })
        .then(result => {
          location.reload();
        })
        .catch(err => console.log(err));
    }
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <Create />
      {todos.length === 0 ? (
        <div className="no-record">
          <h2>No records</h2>
        </div>
      ) : (
        todos.map((todo) => (
          <div key={todo._id} className='tasks'>
            <h2>{todo.task}</h2>
            <button className="update-button" onClick={() => handleUpdate(todo._id)}>
              update
            </button>
            <button className="delete-button" onClick={() => handleDelete(todo._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Home;
