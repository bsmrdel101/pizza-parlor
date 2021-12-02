import React from 'react';
import axios from 'axios';
import './App.css';

import TestComponent from '../TestComponent/TestComponent.jsx';
import CustomerForm from '../CustomerForm/CustomerForm.jsx';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <p> Joe is pizza. </p>

      <TestComponent />
      <CustomerForm />

    </div>
  );
}

export default App;
