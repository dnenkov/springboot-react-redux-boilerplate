import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from "redux";

class AddTodo extends React.Component {
  handleChange(event) {
    this.props.actions.changeTodoText(event.target.value);
  }

  handleSubmit(event) {
    this.props.actions.addTodo(this.props.changeText, this.props.filter);
    this.props.actions.changeTodoText("");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.props.changeText} onChange={this.handleChange.bind(this)}/>
          <button type="submit">Add Todo</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    changeText: state.changeText
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default AddTodo;
