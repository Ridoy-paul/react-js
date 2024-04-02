import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Header from './component/Header.jsx';
import Hero from './component/Hero.jsx';
import City from './component/City';
import PropsChild from './component/PropsChild.jsx';
import PropsWithObject from './component/PropsWithObject.jsx';
import FormSubmit from './component/FormSubmit.jsx';

const ItemObj = {
  name: 'Ridoy Paul',
  age: 25,
  city: 'Dhaka',
  country: 'Bangladesh',
  address: {
    street: 'No. 123',
    city: 'Dhaka',
    country: 'Bangladesh'
  }
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <FormSubmit />
  </React.StrictMode>
);
