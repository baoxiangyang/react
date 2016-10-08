import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app'
import configureStore from './store.js'

const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('main')
)