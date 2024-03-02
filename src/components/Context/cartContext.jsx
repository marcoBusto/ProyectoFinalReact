import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();


export function CartProvider ({ children }) {
  return <Cart.CartContext.Provider value={[]}>{children}</Cart.CartContext.Provider>;
}
  

