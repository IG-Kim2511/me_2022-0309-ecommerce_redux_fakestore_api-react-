import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// 🥒js0309.router
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

