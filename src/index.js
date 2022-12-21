import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducers/index';
import App from './App';
import './index.css';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';

const store = createStore(reducer, composeWithDevTools(), applyMiddleware(thunk));
ReactDOM.render(
  <Provider store={store}>
  <App />
  </Provider>,
  document.getElementById('root')
);
