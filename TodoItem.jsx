import React, { useState } from 'react';
import './TodoItem.css';
import { useNavigate } from 'react-router-dom';
import TodoService from '../Service/TodoService';

const TodoItem = () => {
  const navigate = useNavigate();

  const [todos, setTodos] = useState({
    id: "",
    title: "",
    description: "",
    dueDate: ""
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodos(prevTodos => ({
      ...prevTodos,
      [name]: value
    }));
  };

  // Reset form fields
  const reset = (e) => {
    e.preventDefault(); // Correct method name
    setTodos({
      id: "",
      title: "",
      description: "",
      dueDate: ""
    });
  };

  // Save todo item
  const saveTodos = (e) => {
    e.preventDefault(); // Correct method name
    TodoService.saveTodos(todos)
      .then(response => {
        console.log(response);
        navigate("/");
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className='add-item'>
      <h1 className='h1'>Add New To-Do</h1>
      <form onSubmit={saveTodos}> {/* Add onSubmit handler */}
        <input
          value={todos.id}
          onChange={handleChange}
          type="number"
          name='id'
          placeholder='Enter Id'
        />
        <input
          value={todos.title}
          onChange={handleChange}
          type="text"
          name='title'
          placeholder='Enter Title of your Task'
        />
        <input
          value={todos.description}
          onChange={handleChange}
          type="text"
          name='description'
          placeholder='Enter Description of your Task'
        />
        <input
          value={todos.dueDate}
          onChange={handleChange}
          type="date"
          name='dueDate'
          placeholder='Enter Due Date'
        />
        <div className='btns'>
          <button type="submit" className='item-btn' id='save-btn'>Save</button>
          <button type="button" onClick={reset} className='item-btn' id='clear-btn'>Clear</button>
          <button type="button" onClick={() => navigate("/")} className='item-btn' id='cancel-btn'>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default TodoItem;
