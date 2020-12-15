import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';
import { Provider } from 'react-redux';
import store from './store.js';

import './index.css';
import { apiContext } from './service/apiContext';
import { firebaseIni } from './utils/firebaseConfig';
import FirebaseService from './service/firebaseService';

firebaseIni();
const api = new FirebaseService();

ReactDOM.render(
  <Provider store={store}>
    <apiContext.Provider value={api}>
      <App />
    </apiContext.Provider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
