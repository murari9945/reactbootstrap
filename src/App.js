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
import ProductDetails from './Components/ProductDetails';

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
  return (
    <CartProvider>
      <Router>
        <RootLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Store />} />
          <Route path="/products/:product_id" element={<ProductDetails productsArr={productsArr}/>}/>
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
