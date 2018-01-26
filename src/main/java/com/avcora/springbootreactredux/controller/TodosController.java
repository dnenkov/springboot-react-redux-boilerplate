package com.avcora.springbootreactredux.controller;

import com.avcora.springbootreactredux.model.Todo;
import com.avcora.springbootreactredux.model.VisibilityFilter;
import com.avcora.springbootreactredux.service.TodosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/todos/")
public class TodosController {

    @Autowired
    private TodosService todosService;

    @PostMapping
    @ResponseStatus(HttpStatus.OK)
    public Todo create(@RequestBody Todo todo) {
        return todosService.create(todo);
    }

    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.OK)
    public Todo update(@PathVariable("id") String id, @RequestBody Todo todo) {
        return todosService.update(id, todo);
    }

    @GetMapping
    @ResponseStatus(HttpStatus.OK)
    public List<Todo> getAll(@RequestParam("visibilityFilter") VisibilityFilter visibilityFilter) {
        switch (visibilityFilter) {
            case ALL:
                return todosService.getAll();
            case COMPLETED:
                return todosService.getAll(true);
            default:
                return todosService.getAll(false);
        }

    }

    @GetMapping("{id}")
    public ResponseEntity<Todo> get(@PathVariable("id") String id) {
        Optional<Todo> optionalTodo = todosService.get(id);
        if (optionalTodo.isPresent()) {
            return ResponseEntity.ok(optionalTodo.get());
        }
        return ResponseEntity.notFound().build();
    }

    @DeleteMapping("{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") String id) {
        Optional<Todo> optionalTodo = todosService.get(id);
        if (optionalTodo.isPresent()) {
            todosService.delete(id);
            return ResponseEntity.noContent().build();
        }

        return ResponseEntity.notFound().build();
    }
}
