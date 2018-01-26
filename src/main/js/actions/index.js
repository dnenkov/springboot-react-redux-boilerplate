export const ADD_TODO = 'ADD_TODO';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const CHANGE_TODO_TEXT = 'CHANGE_TODO_TEXT';

export const addTodo = (text, filter) => ({
  type: ADD_TODO,
  text,
  filter
});

export const getTodos = (visibilityFilter) => ({
  type: GET_TODOS,
  visibilityFilter
});

export const getTodosSuccess = (todos) => ({
  type: GET_TODOS_SUCCESS,
  todos
});

export const getTodosError = (error) => ({
  type: GET_TODOS_ERROR,
  error
});

export const toggleTodo = (todo, filter) => ({
  type: TOGGLE_TODO,
  todo,
  filter
});

export const changeTodoText = (text) => ({
  type: CHANGE_TODO_TEXT,
  text
});
