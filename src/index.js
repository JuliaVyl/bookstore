import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store.js';

import './index.css';
import BookstoreService from './service/bookstore-service';

const api = new BookstoreService();

export const apiContext = new createContext();

ReactDOM.render(
  <Provider store={store}>
    <apiContext.Provider value={api}>
      <App />
    </apiContext.Provider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
