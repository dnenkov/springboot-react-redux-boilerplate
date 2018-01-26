const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO_SUCCESS':
      state.push(action.todo);
      return Object.assign([], state);
    case 'GET_TODOS_SUCCESS':
      return action.todos;
    case 'UPDATE_TODO_SUCCESS':
      return state.map(todo => (todo.id === action.todo.id) ? action.todo : todo);
    default:
      return state
  }
};

export default todos
