package com.example.To_Do.List.Controller;

import com.example.To_Do.List.Entity.Todo;
import com.example.To_Do.List.Service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/todos")
@CrossOrigin(" http://localhost:5173/")
public class TodoController {

   @Autowired
   private TodoService todoService;
   @GetMapping
   public List<Todo> getAllTodos(){
       return todoService.viewTodos();
   }
   @PostMapping
   public Todo createTodos(@RequestBody Todo myEntry) {
       todoService.saveTodos(myEntry);
       return myEntry;
    }
    @GetMapping("/{id}")
    public Todo getTodosById(@PathVariable Long id){
       return todoService.viewTodosById(id).orElse(null);
    }
    @DeleteMapping("/{id}")
    public String deleteTodosById(@PathVariable Long id){
       todoService.deleteTodosById(id);
       return "Deleted Successfully";
    }
    @PutMapping("/{id}")
    public Todo updateTodosById(@PathVariable Long id,@RequestBody Todo newEntry) {
        Todo old=todoService.viewTodosById(id).orElse(null);
        if(old !=null){
            old.setTitle(newEntry.getTitle() !=null && !newEntry.getTitle().isEmpty() ? newEntry.getTitle() : old.getTitle());
            old.setDescription(newEntry.getDescription() !=null && !newEntry.getDescription().isEmpty() ? newEntry.getDescription() : old.getDescription());
            old.setDueDate(newEntry.getDueDate()!=null && !newEntry.getDueDate().isEmpty() ? newEntry.getDueDate() : old.getDueDate());
        }
       todoService.saveTodos(old);
       return old;
    }

}
