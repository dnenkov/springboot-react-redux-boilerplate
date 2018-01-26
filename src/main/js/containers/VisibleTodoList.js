import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList';

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList
