import React from 'react';
import './variables.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router';

const App = () => {

  return (
    <div className='App'>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
