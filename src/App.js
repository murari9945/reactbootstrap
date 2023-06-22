import logo from './logo.svg';
import './App.css';

import { CartProvider } from './Components/CartContext';
import {BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Store from './Components/Store';
import Contact from './Components/Contact';
import Login from './Components/Login';
import {
  createBrowserRouter,
  // createRoutesFromElements,
  RouterProvider,
  // Route,
} from 'react-router-dom';
import RootLayout from './Components/Root';
import ProductDetails from './Components/ProductDetails';
import { useContext } from 'react';
import { AuthContext } from './Components/AuthContext';

const productsArr = [
  { id:'1',
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    id:'2',
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    id:'3',
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    id:'4',
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];
function App() {
  const authContext=useContext(AuthContext);
  return (
    <CartProvider>
      <Router>
        <RootLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Store />} />
          
          <Route path="/products/:product_id" element={<ProductDetails productsArr={productsArr}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
          {!authContext.isLoggedIn && (<Route path="/login" element={<Login/>}/>)}
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
