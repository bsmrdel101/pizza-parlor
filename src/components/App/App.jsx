import React from 'react';
import axios from 'axios';
import './App.css';

import TestComponent from '../TestComponent/TestComponent.jsx';
import AdminPage from '../AdminPage/AdminPage';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <p> Joe is also great. </p>

      <TestComponent />
      <AdminPage />
    </div>
  );
}

export default App;
