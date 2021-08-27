import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//add from e-commerce
// import {BrowserRouter} from 'react-router-dom';
import {ProductProvider} from './components/Context';

ReactDOM.render(
<ProductProvider>
{/* <BrowserRouter> */}
<React.StrictMode>
  <App />
</React.StrictMode>
{/* </BrowserRouter> */}
</ProductProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
