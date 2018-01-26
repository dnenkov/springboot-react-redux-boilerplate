import React from 'react';
import {connect} from "react-redux";
import AddTodo from "./AddTodo";
import Footer from "../components/Footer";
import * as actions from "../actions"
import {bindActionCreators} from "redux";
import TodoList from "./TodoList";

class App extends React.Component {

  getFilter() {
    return this.props.match.params.filter ? this.props.match.params.filter : 'ALL';
  }

  loadTodos() {
    this.props.actions.getTodos(this.getFilter());
  }

  componentDidMount() {
    this.loadTodos();
  }

  componentDidUpdate() {
    this.loadTodos();
  }

  render() {
    return (
      <div>
        <AddTodo filter={this.getFilter()}/>
        <TodoList filter={this.getFilter()}/>
        <Footer />
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {actions: bindActionCreators(actions, dispatch)};
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
