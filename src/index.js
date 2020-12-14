import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store.js';

import './index.css';
import BookstoreService from './service/bookstore-service';
import { apiContext } from './service/apiContext';

const api = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <apiContext.Provider value={api}>
      <App />
    </apiContext.Provider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
