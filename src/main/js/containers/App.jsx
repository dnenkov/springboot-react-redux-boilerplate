import React from 'react';
import {connect} from "react-redux";
import AddTodo from "./AddTodo";
import VisibleTodoList from "./VisibleTodoList";
import Footer from "../components/Footer";
import * as actions from "../actions"
import {bindActionCreators} from "redux";

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
    console.log(this.props);
    return (
      <div>
        <AddTodo filter={this.getFilter()}/>
        <VisibleTodoList filter={this.getFilter()}/>
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
