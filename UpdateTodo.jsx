import React, { useState, useEffect } from 'react';
import './TodoItem.css';
import { useNavigate, useParams } from 'react-router-dom';
import TodoService from '../Service/TodoService';

const UpdateTodo = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [todos, setTodos] = useState({
    id: id || "",
    title: "",
    description: "",
    dueDate: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTodos((prevTodos) => ({
      ...prevTodos,
      [name]: value
    }));
  };

  const updateTodos = async (e) => {
    e.preventDefault(); // Correct method name
    try {
      const response = await TodoService.updateTodos(todos, id);
      console.log(response);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TodoService.getTodosById(id); // Fetch based on ID
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]); // Add id to dependency array

  return (
    <div>
      <div className='add-item'>
        <h1 className='h1'>Update To-Do</h1>
        <form onSubmit={updateTodos}> {/* Use onSubmit for form submission */}
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
            <button
              type="submit"
              className='item-btn'
              id='save-btn'
            >
              Update
            </button>
            <button
              type="button"
              onClick={() => navigate("/")}
              className='item-btn'
              id='cancel-btn'
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateTodo;
