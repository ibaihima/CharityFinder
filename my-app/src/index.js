import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header'
import FullPage from './components/FullPage'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <FullPage />
  </React.StrictMode>,
  document.getElementById('root')
);