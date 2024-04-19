import './variables.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet, useLocation } from 'react-router';
import { useEffect } from 'react';
import { useCartSelectors } from './store/cartStore';
const App = () => {
  const location = useLocation();
  const cart = useCartSelectors.use.cart();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location]);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return (
    <div className='App'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
