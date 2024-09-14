package com.example.To_Do.List.Service;

import com.example.To_Do.List.Entity.Todo;
import com.example.To_Do.List.Repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Component
public class TodoService {
    @Autowired
   private TodoRepository todoRepository;

    public List<Todo> viewTodos(){
        return todoRepository.findAll();
    }
    public void saveTodos(Todo todos){
        todoRepository.save(todos);
    }
    public Optional<Todo> viewTodosById(@PathVariable Long id){
        return todoRepository.findById(id);
    }
    public void deleteTodosById(@PathVariable Long id){
         todoRepository.deleteById(id);
    }
}
