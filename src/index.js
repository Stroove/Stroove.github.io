import './App.css';
import './index.css';
import store from './state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import './index.css';


let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App store={store} state={store.getState()} dispatch={store.dispatch.bind(store)}  />
    </BrowserRouter>,
    document.getElementById('root')
  );
}
reportWebVitals();
rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
