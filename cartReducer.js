// cartReducer.js

// Define initial state
const initialState = {
    cartItems: [],
  };
  
  // Define action types
  const ADD_TO_CART = 'ADD_TO_CART';
  const UPDATE_QUANTITY = 'UPDATE_QUANTITY';
  const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
  
  // Define action creators
  export const addToCart = (item) => {
    return {
      type: ADD_TO_CART,
      payload: item,
    };
  };
  
  export const updateQuantity = (itemId, quantity) => {
    return {
      type: UPDATE_QUANTITY,
      payload: { itemId, quantity },
    };
  };
  
  export const removeFromCart = (itemId) => {
    return {
      type: REMOVE_FROM_CART,
      payload: itemId,
    };
  };
  
  // Define cart reducer
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      case UPDATE_QUANTITY:
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.itemId === action.payload.itemId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        };
      case REMOVE_FROM_CART:
        return {
          ...state,
          cartItems: state.cartItems.filter(
            (item) => item.itemId !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default cartReducer;