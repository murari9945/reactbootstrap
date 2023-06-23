import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the CartContext
const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [userEmail, setUserEmail] = useState(''); // Set the logged-in user's email

  useEffect(() => {
    // Retrieve the cart items from the backend API when the component mounts
    fetchCartItems();
  }, []);

  const fetchCartItems = () => {
    // Send a GET request to retrieve the cart items for the logged-in user
    axios
      .get(`https://crudcrud.com/api/de6b84e6830647b5b37cad38b31cc7cc/cart/${userEmail}`)
      .then((response) => {
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving cart items:', error);
      });
  };

  const addToCart = (product) => {
    // Send a POST request to add the product to the cart
    axios
      .post(`https://crudcrud.com/api/de6b84e6830647b5b37cad38b31cc7cc/cart/${userEmail}`, product)
      .then((response) => {
        // Update the cart items state after successful addition
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error adding item to cart:', error);
      });
  };

  const removeFromCart = (productId) => {
    // Send a DELETE request to remove the product from the cart
    axios
      .delete(`https://crudcrud.com/api/de6b84e6830647b5b37cad38b31cc7cc/cart/${userEmail}/${productId.toString()}`)
      .then((response) => {
        // Update the cart items state after successful removal
        setCartItems(response.data);
      })
      .catch((error) => {
        console.error('Error removing item from cart:', error);
      });
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
