import Navbar from './Component/Navbar'
import TodoList from './Component/TodoList'
import './App.css'
import TodoItem from './Component/TodoItem'
import UpdateTodo from './Component/UpdateTodo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route index element={<TodoList/>}></Route>
    <Route path="/" element={<TodoList/>}></Route>
    <Route path="/AddTodo" element={<TodoItem/>}></Route>
    <Route path="/editTodo/:id" element={<UpdateTodo/>}></Route>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
