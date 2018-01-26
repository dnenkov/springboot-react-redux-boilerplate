export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_SUCCESS = 'ADD_TODO_SUCCESS';
export const ADD_TODO_ERROR = 'ADD_TODO_ERROR';

export const GET_TODOS = 'GET_TODOS';
export const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';
export const GET_TODOS_ERROR = 'GET_TODOS_ERROR';

export const TOGGLE_TODO = 'TOGGLE_TODO';

export const UPDATE_TODO = 'UPDATE_TODO';
export const UPDATE_TODO_SUCCESS = 'UPDATE_TODO_SUCCESS';
export const UPDATE_TODO_ERROR = 'UPDATE_TODO_ERROR';

export const addTodo = (text) => ({
  type: ADD_TODO,
  text
});

export const addTodoSuccess = (todo) => ({
  type: ADD_TODO_SUCCESS,
  todo
});

export const addTodoError = (error) => ({
  type: ADD_TODO_ERROR,
  error
});

export const getTodos = () => ({
  type: GET_TODOS
});

export const getTodosSuccess = (todos) => ({
  type: GET_TODOS_SUCCESS,
  todos
});

export const getTodosError = (error) => ({
  type: GET_TODOS_ERROR,
  error
});

export const toggleTodo = (todo) => ({
  type: TOGGLE_TODO,
  todo
});

export const updateTodo = (todo) => ({
  type: UPDATE_TODO,
  todo
});

export const updateTodoSuccess = (todo) => ({
  type: UPDATE_TODO_SUCCESS,
  todo
});

export const updateTodoError = (error) => ({
  type: UPDATE_TODO_ERROR,
  error
});