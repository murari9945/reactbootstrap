import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Product from './Product';

function Home() {
    const navigate = useNavigate();

    function navigateHandler() {
      navigate('/products');
    }
  return (
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <Product/>
   
    </div>
  );
}

export default Home;
