import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter } from 'react-router-dom';
import { configureStore } from "@reduxjs/toolkit";
import dialogReducer from './components/Home/redux';
import { Provider } from 'react-redux'

const store = configureStore({ reducer: dialogReducer });
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>
);
