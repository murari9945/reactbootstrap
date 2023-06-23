import React, { useContext,useState } from 'react';
import { CartContext } from './CartContext';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
    const [show, setShow] = useState(false);
  const { cartItems, removeFromCart } = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemoveFromCart = (item) => {
    removeFromCart(item.id);
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Cart
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop="static">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {cartItems.length > 0 ? (
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.imageUrl} alt={item.title} />
                  <h5>{item.title}</h5>
                  <p>Price: RS{item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleRemoveFromCart(item)}>Remove</button>
                </li>
              ))}
            </ul>
          ) : (
            <p>No items in the cart.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Example;



































