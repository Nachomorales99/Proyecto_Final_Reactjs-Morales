import React from 'react';
import ReactDOM from 'react-dom/client';
import { CartProvider } from './context/CartContext';
import './styles/index.css';
import App from './components/App';
//import './utils/cargaDeDatos'
//import './utils/pruebas.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( 
  <CartProvider>
      <App />
  </CartProvider>
  
);