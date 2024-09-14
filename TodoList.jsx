import { useEffect, useState } from 'react';
import './TodoList.css';
import './AddTodo.css';
import { useNavigate } from 'react-router-dom';
import TodoService from '../Service/TodoService';

const TodoList = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await TodoService.getTodos();
        setTodos(response.data);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  const deleteTodo = (e, id) => {
    e.preventDefault();
    TodoService.deleteTodosById(id)
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      })
      .catch((error) => console.log(error));
  };

  const editTodo = (e, id) => {
    e.preventDefault();
    navigate(`/editTodo/${id}`);
  };

  return (
    <div>
      <div>
        <button onClick={() => navigate("/AddTodo")} className='add-todo'>
          Add Todo
        </button>
      </div>
      <table className='tbl'>
        <thead>
          <tr className='tbl-head'>
            <th className='tbl-hd'>Id</th>
            <th className='tbl-hd'>Title</th>
            <th className='tbl-hd'>Description</th>
            <th className='tbl-hd'>Due Date</th>
            <th className='tbl-hd'>Actions</th>
            <th className='tbl-hd'>Completed</th>
          </tr>
        </thead>
        {!loading && todos.length > 0 && (
          <tbody>
            {todos.map((todo) => (
              <tr key={todo.id} className='tbl-body'>
                <td className='tdata'>{todo.id}</td>
                <td className='tdata'>{todo.title}</td>
                <td className='tdata'>{todo.description}</td>
                <td className='tdata'>{todo.dueDate}</td>
                <td className='tdata'>
                  <a href="#" onClick={(e) => editTodo(e, todo.id)} className='edt'>
                    edit ✏️
                  </a>
                  <a href="#" onClick={(e) => deleteTodo(e, todo.id)} className='dlt'>
                    delete 🗑️
                  </a>
                </td>
                <td>
                  <input className='tdata' id={`checkbox-${todo.id}`} type='checkbox' />
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default TodoList;
