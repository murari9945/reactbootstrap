import React, { createContext, useState,useEffect} from 'react';


// Create the CartContext
const CartContext = createContext();

// Create the CartProvider component
const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Add item to cart or increase quantity if item already exists
  //const addToCart = (product) => {
   // const existingItem = cartItems.find((item) => item.title === product.title);

   // if (existingItem) {
     // setCartItems((prevItems) =>
       // prevItems.map((item) =>
         // item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        //)
      //);
   // } else {
     // setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    //}
    
   
 // };
  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === product.title);
  
      if (existingItem) {
        return prevItems.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };
  
  useEffect(() => {
    console.log('Cart items:', cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
