import './variables.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { useCartSelectors } from './store/cartStore';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

// toast.configure();
const App = () => {
  const location = useLocation();
  const cart = useCartSelectors.use.cart();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [location]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default App;
