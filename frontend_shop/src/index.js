import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserContext } from './Context';

const checkCustomer = localStorage.getItem('customer_login');
const customerUsername = localStorage.getItem('customer_username');
const customerId = localStorage.getItem('customer_id');
const customerFirstName = localStorage.getItem('customer_firstname');
const customerLastName = localStorage.getItem('customer_lastname');
const customerEmail = localStorage.getItem('customer_email');
const customerPhone = localStorage.getItem('customer_phone');

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <UserContext.Provider value={[checkCustomer, customerUsername, customerId, customerFirstName, customerLastName, customerEmail, customerPhone]}>
        <App />
      </UserContext.Provider>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
