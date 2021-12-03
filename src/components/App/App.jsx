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

// useSelector Global State Access
const pizzaMenu = useSelector((store) => store.pizzaReducer)
console.log(pizzaMenu);


// get Pizza data from server on load
useEffect(() => {
  console.log('in useEffect');
  fetchPizzaMenu();
}, []);


//AXIOS GET function that fetches Pizza table, and dispatches to pizzaReducer
function fetchPizzaMenu() {
  axios({
    method: 'GET',
    url: '/api/pizza'
  }).then( response => {
    // response.data is the array of artists
    console.log('We get Za:', response.data);
    // TODO - update this to dispatch to Redux 👍
    dispatch({
      type: 'HOT_PIZZA_HERE',
      payload: response.data
    })
  }).catch( error => {
    console.log('I cant let you pizza, Dave:', error);
  });
}


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
