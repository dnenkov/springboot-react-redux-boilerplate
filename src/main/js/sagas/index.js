import { call, put, takeEvery} from 'redux-saga/effects';
import * as actions from '../actions';
import * as apis from '../apis';

function* addTodo({text, filter}) {
  try {
    yield call(apis.addTodoAPI, text);
  } finally {
    yield put(actions.getTodos(filter));
  }
}

function* getTodos({visibilityFilter}) {
  try {
    const todos = yield call(apis.getTodosAPI, visibilityFilter);
    yield put(actions.getTodosSuccess(todos));
  } catch (error) {
    yield put(actions.getTodosError(error));
  }
}

function* toggleTodo({todo, filter}) {
  try {
    todo.completed = !todo.completed;
    yield call(apis.updateTodoAPI, todo);
  } finally {
    yield put(actions.getTodos(filter));
  }
}

export default function* root() {
  yield takeEvery(actions.ADD_TODO, addTodo);
  yield takeEvery(actions.GET_TODOS, getTodos);
  yield takeEvery(actions.TOGGLE_TODO, toggleTodo);
}