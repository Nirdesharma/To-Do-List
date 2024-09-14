package com.example.To_Do.List.Repository;

import com.example.To_Do.List.Entity.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TodoRepository extends JpaRepository<Todo,Long>{

}
