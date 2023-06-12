import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  },
];

function Example() {
  const [show, setShow] = useState(false);
  const [cartElements, setCartElements] = useState([]); 


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRemoveFromCart = (index) => {
    // Remove the item from the cartElements array
    const updatedCartElements = [...cartElements];
    updatedCartElements.splice(index, 1);
    // Update the cartElements state
    setCartElements(updatedCartElements);
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
          {cartElements.length > 0 ? (
            <ul>
              {cartElements.map((element, index) => (
                <li key={index}>
                  <img src={element.imageUrl} alt={element.title} />
                  <h5>{element.title}</h5>
                  <p>Price: ${element.price}</p>
                  <p>Quantity: {element.quantity}</p>
                  <button onClick={() => handleRemoveFromCart(index)}>Remove</button>
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
