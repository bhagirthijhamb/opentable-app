import React from 'react';
import './App.css';

import { Provider } from 'react-redux';

import Header from './components/header/Header'
import CityForm from './components/cityForm/CityForm';
import Restaurants from './components/restaurants/Restaurants';
import Footer from './components/footer/Footer';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App wrapper">
        <Header />
        <main>
          <CityForm />
          <Restaurants />
        </main>
        <Footer />
      </div>
    </Provider>
  );
}

export default App;
