import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider, useDispatch } from "react-redux";

import { createStore } from "redux";

// Reducer
const aboutReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_ABOUT":
      return {
        state: action.data
      }
  }
  return state;
}



// creating a store

const store = createStore(aboutReducer, window.devToolsExtension && window.devToolsExtension()
);
console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
