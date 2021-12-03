import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';

//Import HOOKS
import { useSelector, useDispatch } from 'react-redux';
import { HashRouter as Router, Route, Link } from 'react-router-dom';


// Import components
import AdminPage from '../AdminPage/AdminPage';
import PizzaSelect from '../PizzaSelect/PizzaSelect';
import TestComponent from '../TestComponent/TestComponent.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';
import Checkout from '../Checkout/Checkout';


function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      
      <AdminPage />
      <TestComponent />
      
      <PizzaSelect />
      <CustomerForm />
      <Checkout />

    </div>
  );
}

export default App;
