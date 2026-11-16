
import React, { createContext, useContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export default function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((previous) => {
      const existing = previous.find((item) => item.id === product.id);

      if (existing) {
        return previous.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...previous, { ...product, quantity: 1 }];
    });
  };

  const increaseQuantity = (id) => {
    setCartItems((previous) =>
      previous.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQuantity = (id) => {
    setCartItems((previous) =>
      previous
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((previous) =>
      previous.filter((item) => item.id !== id)
    );
  };

  const clearCart = () => setCartItems([]);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const cartCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        clearCart,
        total,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
