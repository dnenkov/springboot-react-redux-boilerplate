import React from 'react';
import PropTypes from 'prop-types';
import Todo from '../components/Todo';
import * as actions from "../actions";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

class TodoList extends React.Component {


  render() {
    return (
      <ul>
        {this.props.todos.map(todo =>
          <Todo
            key={todo.id}
            {...todo}
            filter={this.props.filter}
            onClick={this.props.actions.toggleTodo.bind(this, todo, this.props.filter)}
          />
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  filter: PropTypes.string.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    todos: state.todos
  };
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
