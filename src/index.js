import React from 'react';
import ReactDOM from 'react-dom/client';
// import ReactDOMClient from 'react-dom/client'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import { Provider } from 'react-redux';
// import store from '../src/redux-toolkit/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <App  />
  </BrowserRouter>
  // </React.StrictMode>

  // // Redux Toolkit (We can also Wrap "Provider" in App.js)
  // <Provider store={store}>
  //   <App />
  // </Provider>
);



// // //
// const container = document.getElementById('root')
// const root = ReactDOMClient.createRoot(container)
// root.render(<App/>)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
