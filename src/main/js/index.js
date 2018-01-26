import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga'
import todoApp from './reducers';
import Root from './components/Root';
import rootSaga from './sagas';
import createSagaMonitor from './monitor/sagaMonitor';

const config = {
  level: 'log',
  actionDispatch: true
};

const sagaMiddleware = createSagaMiddleware({
  sagaMonitor: createSagaMonitor(config)
});
const store = createStore(todoApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

render(
  <Root store={store} />,
  document.getElementById('root')
);