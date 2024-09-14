import axios from "axios"

const TODO_SAPI_BASE_URL="http://localhost:5050/todos"
class TodoService{
   saveTodos(todos){
    return axios.post(TODO_SAPI_BASE_URL,todos)
   }
   getTodos(){
      return axios.get(TODO_SAPI_BASE_URL)
   }
   getTodosById(id){
      return axios.get(TODO_SAPI_BASE_URL+"/"+id)
   }
   deleteTodosById(id){
      return axios.delete(TODO_SAPI_BASE_URL+"/"+id)
   }
   updateTodos(todos,id){
      return axios.put(TODO_SAPI_BASE_URL+"/"+id,todos)
   }
}
export default new TodoService();