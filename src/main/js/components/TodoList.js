import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, onTodoClick, filter}) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        filter={filter}
        onClick={() => onTodoClick(todo, filter)}
      />
    )}
  </ul>
);

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  filter: PropTypes.string.isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;
