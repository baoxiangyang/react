import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducer from './reducer.js';
import App from './App.js';
let store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
  	<App />
  </Provider>
  , document.getElementById('main'));