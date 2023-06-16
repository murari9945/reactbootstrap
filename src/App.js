import logo from './logo.svg';
import './App.css';

import { CartProvider } from './Components/CartContext';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';
import Contact from './Components/Contact';
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';
import RootLayout from './Components/Root';


function App() {
  return (
    <CartProvider>
      <Router>
        <RootLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Store />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
