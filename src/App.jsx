import React, { useEffect } from 'react';
import './variables.css';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Outlet } from 'react-router';
import { useProductsSelectors } from './store/products';

const App = () => {
  const productsData = useProductsSelectors.use.fetchProducts();
  const fetchCategories = useProductsSelectors.use.fetchProductsCategories();
  useEffect(() => {
    productsData();
  }, [productsData]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <div className='App'>
      <Header />

      <Outlet />

      <Footer />
    </div>
  );
};

export default App;
