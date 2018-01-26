import { call, put, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions';
import * as apis from '../apis';

function* addTodo(action) {
  try {
    const todo = yield call(apis.addTodoAPI, action.text);
    yield put(actions.addTodoSuccess(todo));
  } catch (error) {
    yield put(actions.addTodoError(error));
  }
}

function* getTodos() {
  try {
    const todos = yield call(apis.getTodosAPI);
    yield put(actions.getTodosSuccess(todos));
  } catch (error) {
    yield put(actions.getTodosError(error));
  }
}

function* toggleTodo({todo}) {
  yield put(actions.updateTodo(todo));
  try {
    todo.completed = !todo.completed;
    const updatedTodo = yield call(apis.updateTodoAPI, todo);
    yield put(actions.updateTodoSuccess(updatedTodo));
  } catch (error) {
    yield put(actions.updateTodoError(error));
  }
}

export default function* root() {
  yield takeEvery(actions.ADD_TODO, addTodo);
  yield takeEvery(actions.GET_TODOS, getTodos);
  yield takeEvery(actions.TOGGLE_TODO, toggleTodo);
}