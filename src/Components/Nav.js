 import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartIcon from './CartIcon';
import { Link } from 'react-router-dom';

function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Store</Nav.Link>
            <Nav.Link  as ={Link} to="/about">About</Nav.Link>
           
          </Nav>
          <CartIcon/>
        </Container>
      </Navbar>
     
      
    </>
  );
}

export default ColorSchemesExample;