import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './scss/app.scss';

import App from './App';

ReactDOM.render(
  // <React.StrictMode>
  <Router>
    <App />
  </Router>,
  // </React.StrictMode>, благодаря StrictMode мы отлавливаем ошибки и он дает дублирование выввода в консоль
  document.getElementById('root'),
);