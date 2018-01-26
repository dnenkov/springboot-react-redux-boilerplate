package com.avcora.springbootreactredux.service;

import com.avcora.springbootreactredux.model.Todo;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;

import static java.util.stream.Collectors.toList;

@Service
public class TodosService {

    private Map<String, Todo> todos;

    public TodosService() {
        todos = Collections.synchronizedMap(new HashMap<>());
    }

    public Todo create(Todo todo) {
        String id = UUID.randomUUID().toString();
        todo.setId(id);

        todos.put(id, todo);

        return todo;
    }

    public Todo update(String id, Todo todo) {
        todos.put(id, todo);

        return todo;
    }

    public List<Todo> getAll() {
        return new ArrayList<>(todos.values());
    }

    public List<Todo> getAll(boolean completed) {
        return todos.values().stream()
                .filter(todo -> todo.isCompleted() == completed)
                .collect(toList());
    }

    public Optional<Todo> get(String id) {
        if (todos.containsKey(id)) {
            return Optional.of(todos.get(id));
        }
        return Optional.empty();
    }

    public void delete(String id) {
        todos.remove(id);
    }
}
