import React,{ useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { CartContext } from './CartContext';
const productsArr = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
  },
  {
    title: 'Blue Color',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
  },
];
const Product=()=> {
  const { addToCart } = useContext(CartContext);
  console.log(addToCart);
  const handleAddToCart = (product) => {
    addToCart(product);
    console.log('added',product);
  };
  
  return (<div className="row row-cols-1 row-cols-md-2 g-4">
    {productsArr.map((product, index) => (
    <Card key={index} style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.imageUrl} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>
          Price:{product.price}
        </Card.Text>
        <Button variant="primary"onClick={() => handleAddToCart(product) }>ADD TO CART</Button>
      </Card.Body>
    </Card>
  ))}
  </div>
  )
}

export default Product;