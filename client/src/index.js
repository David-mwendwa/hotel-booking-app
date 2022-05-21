import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

// create user reducer function
const authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGGED_IN_USER':
      return {
        ...state,
        ...action.payload,
      };
    case 'LOGOUT':
      return action.payload;
    default:
      return state;
  }
};

// combine multiple reducers
const rootReducer = combineReducers({
  user: authReducer,
});

// create redux store
const store = createStore(rootReducer, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
