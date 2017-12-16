import React from 'react';
import './reset.css';

import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>
  , document.getElementById('root'));
registerServiceWorker();
