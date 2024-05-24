import './variables.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router';
import { useEffect } from 'react';
import { useCartSelectors } from './store/cartStore';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { ScrollRestoration } from 'react-router-dom';

const App = () => {
  const cart = useCartSelectors.use.cart();

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
      <ScrollRestoration />
    </div>
  );
};

export default App;
