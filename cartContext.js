// import React, { createContext, useState, useContext } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);

//   const addToCart = (item) => {
//     setCartItems((prevItems) => [...prevItems, item]);
//   };

//   const updateQuantity = (itemId, newQuantity) => {
//     setCartItems((prevItems) => {
//       return prevItems.map((item) => {
//         if (item.food_item.itemId === itemId) {
//           return { ...item, quantity: newQuantity };
//         }
//         return item;
//       });
//     });
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prevItems) => prevItems.filter((item) => item.food_item.itemId !== itemId));
//   };

//   return (
//     <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeFromCart }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCart = () => {
//   return useContext(CartContext);
// };


///
// cartContext.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
    
  useEffect(() => {
    fetch('https://645de9688d08100293f1eb54.mockapi.io/order')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []); 

  const addToCart = (item) => {
        setCartItems((prevItems) => [...prevItems, item]);
      };
    
      const updateQuantity = (itemId, newQuantity) => {
        setCartItems((prevItems) => {
          return prevItems.map((item) => {
            if (item.food_item.itemId === itemId) {
              return { ...item, quantity: newQuantity };
            }
            return item;
          });
        });
      };
    
      const removeFromCart = (itemId) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.food_item.itemId !== itemId));
      };

  return (
    <CartContext.Provider value={{ cartItems, updateQuantity, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// cartContext.js

// import React, { createContext, useContext, useReducer } from 'react';
// import cartReducer, { addToCart, updateQuantity, removeFromCart } from './cartReducer';

// // Create cart context
// const CartContext = createContext();

// // Custom hook for accessing cart context
// export const useCart = () => {
//   return useContext(CartContext);
// };

// // Cart context provider component
// export const CartProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(cartReducer, { cartItems: [] });

//   const handleAddToCart = (item) => {
//     dispatch(addToCart(item));
//   };

//   const handleUpdateQuantity = (itemId, quantity) => {
//     dispatch(updateQuantity(itemId, quantity));
//   };

//   const handleRemoveFromCart = (itemId) => {
//     dispatch(removeFromCart(itemId));
//   };

//   const value = {
//     cartItems: state.cartItems,
//     addToCart: handleAddToCart,
//     updateQuantity: handleUpdateQuantity,
//     removeFromCart: handleRemoveFromCart,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };