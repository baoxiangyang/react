import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer.js';
import App from './App.js';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
const loggerMiddleware = createLogger();
let store = createStore(reducer, applyMiddleware(thunk, loggerMiddleware));

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>
  , document.getElementById('main'));