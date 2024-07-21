import React from 'react';
import './App.css';
import HeaderNav from './components/Navbar/Navbar';
import CartElements from './components/Cart/CartElements';
import { CartProvider } from './store/CartContext'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import About from './pages/About';

const router = createBrowserRouter([
  {path: '/store', element: <CartElements/>},
  {path: '/about' , element: <About/>}
])

function App() {
  return (
    <CartProvider>
      <HeaderNav />
      <RouterProvider router={router}></RouterProvider>
    </CartProvider>
  );
}

export default App;
