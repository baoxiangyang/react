import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import Clock from './state.jsx';
import Form from './form.jsx';
import PrpoType from './proptype.jsx';
ReactDOM.render(
  <Router history={hashHistory }>
    <Route path="/state" component={Clock}/>
    <Route path="/form" component={Form}/>
    <Route path="/PrpoType" component={PrpoType}/>
  </Router>,
  document.getElementById('main')
);