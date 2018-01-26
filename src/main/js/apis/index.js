import 'whatwg-fetch';

export function addTodoAPI(text) {
  return fetch(`/todos/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      text: text
    })
  })
    .then(res => res.json());
}

export function getTodosAPI() {
  return fetch(`/todos`).then(res => res.json());
}

export function updateTodoAPI(todo) {
  return fetch(`/todos/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(todo)
  })
    .then(res => res.json())
}