import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home/Home.jsx';
import Product from './pages/product/Product.jsx';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import Cart from './pages/cart/Cart.jsx';
import Products from './pages/products/Products.jsx';
import Category from './pages/category/Category.jsx';
import Checkout from './pages/checkout/Checkout.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/products', element: <Products /> },
      { path: '/products/:productId', element: <Product /> },
      { path: '/cart', element: <Cart /> },
      { path: '/categories/:categoryName', element: <Category /> },
      { path: '/checkout', element: <Checkout /> },
      {path: 'search'}
    ],
  },
  {
    path: '*',
    errorElement: <h1>404 Not Found</h1>,
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
