import React from 'react';
import { useParams } from 'react-router-dom';
import Product from './Product';

const ProductDetails = ({ productsArr }) => {
  const { product_id } = useParams();

  const product = productsArr.find((product) => product.id === product_id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.title}</h2>
      <p>Price: {product.price}</p>
      <img src={product.imageUrl} alt={product.title} />
    </div>
  );
};

export default ProductDetails;
