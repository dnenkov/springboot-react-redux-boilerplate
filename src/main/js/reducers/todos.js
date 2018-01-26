const todos = (state = [], action) => {
  switch (action.type) {
    case 'GET_TODOS_SUCCESS':
      return action.todos;
    default:
      return state
  }
};

export default todos
