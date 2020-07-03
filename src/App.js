import React from 'react';
import './App.css';

import Header from './components/header/Header'
import CityForm from './components/cityForm/CityForm';
import Restaurants from './components/restaurants/Restaurants';

function App() {
  return (
    <div className="App">
      <Header />
      <CityForm />
      <Restaurants />
    </div>
  );
}

export default App;
