import reportWebVitals from './reportWebVitals';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './App';
import './index.css';

import store from './store/store';

import { Provider } from 'react-redux';

// console.log(store)

// store.subscribe(()=>{
//   console.log(store.getState())
// }

// )

// store.dispatch(createTodo('0','learn react','2025-05-09 21:32')) //carete store elemente
// store.dispatch(createTodo('02','learn redux','2025-05-09 21:32'))
// store.dispatch(createTodo('03','learn  anything','2025-05-09 21:32'))
 




// const currentState=store.getState();

// console.log(currentState)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
//  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
