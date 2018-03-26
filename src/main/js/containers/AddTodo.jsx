import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions';
import {bindActionCreators} from "redux";
import {injectIntl} from "react-intl";

class AddTodo extends React.Component {
  handleChange(event) {
    this.props.actions.changeTodoText(event.target.value);
  }

  handleSubmit(event) {
    console.log("Submitted");
    this.props.actions.addTodo(this.props.todoText, this.props.filter);
    this.props.actions.changeTodoText("");
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" value={this.props.todoText} onChange={this.handleChange.bind(this)}/>
          <button type="submit">{this.props.intl.formatMessage({id: "add.todo"})}</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    todoText: state.todoText
  }
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo);

export default injectIntl(AddTodo);
